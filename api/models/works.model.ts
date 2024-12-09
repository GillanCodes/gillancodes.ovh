import { model, ObjectId, Schema } from "mongoose";

export interface ITag
{
    name: string,
    color: string,
}

export interface IWork
{
    _id:        ObjectId | string,
    icon:       string,
    name:       string,
    link:       string,
    description: object,
    tags: ITag[],
    createdAt:  Date | string,
    updatedAt:  Date | string
}

const workSchema = new Schema<IWork>({
    icon: {type: String},
    name: {type: String},
    description: {type:Object},
    link: {type:String},
    tags: {type: [{
        name: {type: String},
        color: {type: String},
    }]}
}, {timestamps:true});

//default export.
const workModel = model<IWork>('work', workSchema);
export default workModel;