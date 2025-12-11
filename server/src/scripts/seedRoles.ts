import mongoose from 'mongoose';
import Role from '../features/Role/role.model';
import { Permission } from '../features/Permission/permission.types';
import config from "../config/config";

async function seedRoles() {
        try {
                await mongoose.connect(config.DB_CONNECT_STRING);

                // Create admin role with all permissions
                const adminRole = await Role.findOne({ name: 'admin' });
                if (!adminRole) {
                        const admin = new Role({ name: 'admin' });
                        // Set all permissions to true for admin
                        Object.values(Permission).forEach(perm => {
                                admin.permissions.set(perm, true);
                        });
                        await admin.save();
                        console.log('Admin role created');
                }

                // Create user role with limited permissions
                const userRole = await Role.findOne({ name: 'user' });
                if (!userRole) {
                        const user = new Role({ name: 'user' });
                        // Set only read permissions for user
                        user.permissions.set(Permission.TECH_GET, true);
                        user.permissions.set(Permission.USER_GET, true);
                        await user.save();
                        console.log('User role created');
                }

                // Create moderator role
                const modRole = await Role.findOne({ name: 'moderator' });
                if (!modRole) {
                        const mod = new Role({ name: 'moderator' });
                        // Set moderate permissions
                        mod.permissions.set(Permission.TECH_GET, true);
                        mod.permissions.set(Permission.TECH_EDIT, true);
                        mod.permissions.set(Permission.USER_GET, true);
                        await mod.save();
                        console.log('Moderator role created');
                }

                // Sync all roles with current permissions
                await Role.syncAllRolesPermissions();
                console.log('All roles synced with current permissions');

                process.exit(0);
        } catch (error) {
                console.error('Error seeding roles:', error);
                process.exit(1);
        }
}

seedRoles();
