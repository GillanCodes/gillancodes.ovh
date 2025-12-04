import { MongoEntity } from "./MongoEntity";

export class Tech extends MongoEntity {
        public name: string;
        public icon: string;
        public percentage: number;
        public color: string;

        constructor({
                _id,
                createdAt,
                updatedAt,
                name,
                icon,
                percentage,
                color,
        } : {
                _id?: string,
                createdAt?: string,
                updatedAt?: string,
                name: string,
                icon: string,
                percentage: number,
                color: string,
        }) {
                super({_id, createdAt, updatedAt});
                this.name = name;
                this.icon = icon;
                this.percentage = percentage;
                this.color = color;
        }
}
