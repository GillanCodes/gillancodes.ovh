import { model, ObjectId, Schema } from "mongoose";

export interface ITechno
{
    _id:        ObjectId | string,
    icon:       string,
    name:       string,
    color:      string,
    category:      string,
    createdAt:  Date | string,
    updatedAt:  Date | string
}

const technoSchema = new Schema<ITechno>({
    icon: {type: String, required: true},
    name: {type:String, required: true},
    color: {type:String, required: true},
    category: {type:String, required: true},
}, {timestamps:true});

//default export.
const technoModel = model<ITechno>('technologies', technoSchema);
export default technoModel;