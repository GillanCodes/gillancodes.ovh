import { MongoEntity } from "./MongoEntity";
import { Role } from "./Role";

export type PermissionsMethod = {
        create: boolean
        read: boolean,
        edit: boolean,
        delete: boolean
}

export class Permission extends MongoEntity {
        public role: Role | string
        public permissions: PermissionsMethod

        constructor({
                _id,
                createdAt,
                updatedAt,
                role,
                permissions
        } : {
                _id?: string,
                createdAt?: string,
                updatedAt?: string,
                name: string,
                role: Role | string,
                permissions: PermissionsMethod
        }) {
                super({_id, createdAt, updatedAt});
                this.role = role;
                this.permissions = permissions;
        }

        getRole()
        {
                return this.role;
        }

        getPermissions()
        {
                return this.permissions;
        }
}
