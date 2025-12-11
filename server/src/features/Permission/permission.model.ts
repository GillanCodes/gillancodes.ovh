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
}
