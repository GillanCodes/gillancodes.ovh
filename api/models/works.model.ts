import { model, ObjectId, Schema } from "mongoose";

export interface IWork
{
    _id:        ObjectId | string,
    icon:       string,
    name:       string,
    descrption: object,
    createdAt:  Date | string,
    updatedAt:  Date | string
}

const workSchema = new Schema<IWork>({
    icon: {type: String},
    name: {type: String},
    descrption: {type:Object} 
}, {timestamps:true});

//default export.
const wokrModel = model<IWork>('user', workSchema);
export default wokrModel;