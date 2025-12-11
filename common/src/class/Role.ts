import { MongoEntity } from "./MongoEntity";

export class Role extends MongoEntity {
        public name: string;
        public permissions: Map<string, boolean>;

        constructor({
                _id,
                createdAt,
                updatedAt,
                name,
                permissions,
        } : {
                _id?: string,
                createdAt?: string,
                updatedAt?: string,
                name: string,
                permissions: Map<string, boolean>;

        }) {
                super({_id, createdAt, updatedAt});
                this.name = name;
                this.permissions = permissions
        }

        getName()
        {
                return this.name;
        }

        setName(name:string)
        {
                this.name = name;
                return this.name;
        }
}
