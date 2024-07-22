import { model, ObjectId, Schema } from "mongoose";

export interface IStudy
{
    _id:        ObjectId | string,
    year:       string,
    description:object,
    createdAt:  Date | string,
    updatedAt:  Date | string
}

const studiySchema = new Schema<IStudy>({
    year: {type: String},
    description: {type:Object},
}, {timestamps:true});

//default export.
const studyModel = model<IStudy>('user', studiySchema);
export default studyModel;