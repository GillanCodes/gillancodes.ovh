import { ObjectId } from "mongoose";
import roles from "../../config/permissions.json";

export default class Permission
{
        public permissions: [] | [string];

        constructor()
        {
                this.permissions = [];
        }

        getPermissionsByRoleName(roleName:string)
        {
                const role = roles.find((r:any) => r.name === roleName);
                return role ? role.permissions : [];
        }

        getPermissionsByRoleId(roleId:ObjectId)
        {
                const role = roles.find((r:any) => r.id === roleId);
                console.log(role, roles);
                return role ? role.permissions : [];
        }
}
