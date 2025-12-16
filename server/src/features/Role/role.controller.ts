import { isEmpty } from "@this/common/utils/isEmpty";
import { Request, Response } from "express";
import roleModel from "./role.model";
import { ALL_PERMISSIONS } from "../Permission/permission.types";
import { isValidObjectId } from "mongoose";

export class RoleController {
        static async createRole(req: Request, res: Response) {
                try {
                        const { name }: { name: string | undefined } = req.body

                        if (isEmpty(name)) return res.status(400).json({ error: 'role_name_field_empty' });

                        const existingRole = await roleModel.findOne({ name: name!.toLowerCase() });
                        if (existingRole) return res.status(409).json({ error: 'role_already_exists' });

                        const role = new roleModel({ name });
                        await role.save();

                        return res.status(201).json(role);
                } catch (error) {
                        console.error('Error creating role:', error);
                        return res.status(500).json({ error: 'Internal server error' });
                }

        }
        static async getAllRoles(_req: Request, res: Response) {
                try {
                        const roles = await roleModel.find();
                        return res.status(200).json(roles)
                } catch (error) {
                        console.error('Error fetching roles:', error);
                        return res.status(500).json({ error: 'Internal server error' });
                }
        }

        // Get a specific role by ID
        static async getRole(req: Request, res: Response) {
                try {
                        const { id } = req.params;
                        if (!isValidObjectId(id)) return res.status(200).send({error: "invalid id"}) // TODO Error Handling

                        const role = await roleModel.findById(id);
                        if (!role) return res.status(404).json({ error: 'roleModel not found' });

                        return res.status(200).send(role);
                } catch (error) {
                        console.error('Error fetching role:', error);
                        return res.status(500).json({ error: 'Internal server error' });
                }
        }

        // Update role name
        static async updateRoleName(req: Request, res: Response) {
                try {
                        const { id } = req.params;
                        const { name } = req.body;

                        if (!name) return res.status(400).json({ error: 'roleModel name is required' });

                        const role = await roleModel.findById(id);
                        if (!role) return res.status(404).json({ error: 'roleModel not found' });

                        const existingRole = await roleModel.findOne({ name: name.toLowerCase(), _id: { $ne: id } });
                        if (existingRole) return res.status(409).json({ error: 'roleModel name already exists' });

                        role.name = name;
                        await role.save();

                        return res.status(200).json(role);
                } catch (error) {
                        console.error('Error updating role name:', error);
                        return res.status(500).json({ error: 'Internal server error' });
                }
        }

        // Update role permissions (partial update - only changes provided permissions)
        static async updateRolePermissions(req: Request, res: Response) {
                try {
                        const { id } = req.params;
                        const { permissions } = req.body;

                        if (!permissions || typeof permissions !== 'object') return res.status(400).json({ error: 'Permissions object is required' });

                        const role = await roleModel.findById(id);
                        if (!role) return res.status(404).json({ error: 'roleModel not found' });

                        // Validate and update only the provided permissions
                        Object.entries(permissions).forEach(([key, value]) => {
                                if (ALL_PERMISSIONS.includes(key as any)) {
                                        role.permissions.set(key, Boolean(value));
                                }
                        });

                        await role.save();

                        return res.status(200).json(role);
                } catch (error) {
                        console.error('Error updating role permissions:', error);
                        return res.status(500).json({ error: 'Internal server error' });
                }
        }

        // Set all permissions for a role at once (full replace)
        static async setAllRolePermissions(req: Request, res: Response) {
                try {
                        const { id } = req.params;
                        const { permissions } = req.body;

                        if (isEmpty(permissions)) return res.status(400).json({ error: 'Permissions is required' });

                        const role = await roleModel.findById(id);
                        if (!role) return res.status(404).json({ error: 'roleModel not found' });

                        // Reset all permissions to false first
                        ALL_PERMISSIONS.forEach(perm => {
                                role.permissions.set(perm, false);
                        });

                        // Then set the provided permissions
                        Object.entries(permissions).forEach(([key, value]) => {
                                if (ALL_PERMISSIONS.includes(key as any)) role.permissions.set(key, Boolean(value));
                        });

                        await role.save();

                        return res.status(200).json(role);
                } catch (error) {
                        console.error('Error setting role permissions:', error);
                        return res.status(500).json({ error: 'Internal server error' });
                }
        }

        // Delete a role
        static async deleteRole(req: Request, res: Response) {
                try {
                        const { id } = req.params;

                        const role = await roleModel.findByIdAndDelete(id);
                        if (!role) return res.status(404).json({ error: 'Role not found' });

                        return res.status(200).json(role);
                } catch (error) {
                        console.error('Error deleting role:', error);
                        return res.status(500).json({ error: 'Internal server error' });
                }
        }

        // Sync all roles with current permissions (adds new permissions as false to all existing roles)
        static async syncPermissions(_req: Request, res: Response) {
                try {
                        await (roleModel as any).syncAllRolesPermissions();

                        const roles = await roleModel.find();

                        return res.status(200).json({
                                totalRoles: roles.length,
                                roles: roles.map(role => ({
                                        id: role._id,
                                        name: role.name,
                                        permissions: Object.fromEntries(role.permissions),
                                })),
                        });
                } catch (error) {
                        console.error('Error syncing permissions:', error);
                        return res.status(500).json({ error: 'Internal server error' });
                }
        }

        // Get all available permissions
        static async getAvailablePermissions(_req: Request, res: Response) {
                try {
                        return res.status(200).json(ALL_PERMISSIONS);
                } catch (error) {
                        console.error('Error fetching permissions:', error);
                        return res.status(500).json({ error: 'Internal server error' });
                }
        }

        // Get permissions for a specific role (quick lookup)
        static async getRolePermissions(req: Request, res: Response) {
                try {
                        const { id } = req.params;

                        const role = await roleModel.findById(id);
                        if (!role) {
                                return res.status(404).json({ error: 'role_not_found' });
                        }

                        // Get only enabled permissions
                        const enabledPermissions = Array.from(role.permissions.entries())
                                .filter(([_, value]) => value)
                                .map(([key, _]) => key);

                        return res.status(200).json({
                                roleId: role._id,
                                roleName: role.name,
                                permissions: Object.fromEntries(role.permissions),
                                enabledPermissions,
                                enabledCount: enabledPermissions.length,
                                totalPermissions: role.permissions.size,
                        });
                } catch (error) {
                        console.error('Error fetching role permissions:', error);
                        return res.status(500).json({ error: 'Internal server error' });
                }
        }

        // Duplicate a role (copy all permissions from one role to a new role)
        static async duplicateRole(req: Request, res: Response) {
                try {
                        const { id } = req.params;
                        const { newName } = req.body;

                        if (!newName) {
                                return res.status(400).json({ error: 'New role name is required' });
                        }

                        const sourceRole = await roleModel.findById(id);
                        if (!sourceRole) {
                                return res.status(404).json({ error: 'Source role not found' });
                        }

                        // Check if new name already exists
                        const existingRole = await roleModel.findOne({ name: newName.toLowerCase() });
                        if (existingRole) {
                                return res.status(409).json({ error: 'Role name already exists' });
                        }

                        // Create new role and copy permissions
                        const newRole = new roleModel({ name: newName });
                        sourceRole.permissions.forEach((value, key) => {
                                newRole.permissions.set(key, value);
                        });
                        await newRole.save();

                        return res.status(201).json({
                                message: 'Role duplicated successfully',
                                sourceRole: {
                                        id: sourceRole._id,
                                        name: sourceRole.name,
                                },
                                newRole: {
                                        id: newRole._id,
                                        name: newRole.name,
                                        permissions: Object.fromEntries(newRole.permissions),
                                },
                        });
                } catch (error) {
                        console.error('Error duplicating role:', error);
                        return res.status(500).json({ error: 'Internal server error' });
                }
        }
}
