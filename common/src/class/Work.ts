import { MongoEntity } from "./MongoEntity";

type TLink = {name: string, url:string};

export class Work extends MongoEntity {
        public name: string;
        public description: string;
        public techs?: [string];
        public icon: string;
        public links?: [TLink];
        public authors: [string];

        constructor({
                _id,
                createdAt,
                updatedAt,
                name,
                description,
                techs,
                icon,
                links,
                authors,
        } : {
                _id?: string,
                createdAt?: string,
                updatedAt?: string,
                name: string,
                description: string,
                techs?:[string],
                icon:string,
                links?:[TLink],
                authors: [string]

        }) {
                super({_id, createdAt, updatedAt});
                this.name = name;
                this.description = description;
                this.techs = techs;
                this.icon = icon;
                this.links =links;
                this.authors = authors;
        }


}
