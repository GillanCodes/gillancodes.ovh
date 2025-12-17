import { model, Schema } from "mongoose";
import { Work } from "@this/common/class/Work";

const workSchema = new Schema<Work>(
        {
                name: {
                        type: String,
                        required: true,
                        unique: true,
                        lowercase: true,
                        trim: true,
                },
                description: {
                        type: String,
                        default: "A default description"
                },
                authors: {
                        type:[String],
                },
                icon: {
                        type:String,
                        default: "work_default.png"
                },
                links: {
                        type: [String]
                },
                techs: {
                        type: [String],
                        ref: "Tech"
                }
        },
        {
                timestamps: true,
        }
);


const workModel = model<Work>('Works', workSchema);
export default workModel;
