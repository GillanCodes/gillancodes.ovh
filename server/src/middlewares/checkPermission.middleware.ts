import { NextFunction, Request, Response } from "express";

import { Permission } from "../features/Permission/permission.types";
import userModel from "../features/User/user.model";
import roleModel from "../features/Role/role.model";

export const checkPermission = (requiredPermission: string) => {
        return async (req: Request, res: Response, next: NextFunction) => {
                try {
                        if (!res.locals.user._id) return res.status(401).send('auth_required')                   

                        const user = await userModel.findById(res.locals.user._id);
                        if (!user) return res.status(401).send('user_not_found') 

                        const role = await roleModel.findById(user.role);
                        if (!role) return res.status(401).send('role_not_found') 

                        // Check if user has the required permission
                        const hasPermission = role.permissions.get(requiredPermission) || role.permissions.get(Permission.ADMIN_BYPASS);

                        if (!hasPermission) {
                                return res.status(403).json({
                                        error: 'Insufficient permissions',
                                        message: `You need '${requiredPermission}' permission to access this resource`,
                                        required: requiredPermission,
                                        yourRole: role.name
                                });
                        }

                        next();
                } catch (error) {
                        console.error('Permission check error:', error);
                        return res.status(500).json({
                                error: 'Internal server error',
                                message: 'An error occurred while checking permissions'
                        });
                }
        };
};
