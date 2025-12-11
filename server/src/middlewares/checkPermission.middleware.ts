import { Request, Response } from "express";

import Permission from "../features/Permission/permission.model";


export const checkPermission = (permission:string) => {
        return (_req:Request, res:Response, next:() => void) => {
                const userRole = res.locals.user ? res.locals.user.role : "guess";
                const userPermissions = new Permission().getPermissionsByRoleName(userRole)!;

                if (userPermissions.includes(permission) || userPermissions.includes('admin_bypass')) return next();
                else res.status(403).send({error: "access_denied"});
        }
}
