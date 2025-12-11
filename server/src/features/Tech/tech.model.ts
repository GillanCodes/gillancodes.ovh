import { Tech } from "@this/common/class/Tech";
import { model, Schema } from "mongoose";

let techSchema = new Schema<Tech>({
        name: {
                type:String,
                required: true,
                max: 32,
                min: 2
        },
        icon: {
                type: String,
                default: "default.svg"
        },
        color: {
                type: String,
                default: "#FFF",
        },
        percentage: {
                type: Number,
                required: true,
                min: [0, "Percentage cant be under 0%"],
                max: [100, "Percentage cant be above 100%"]
        },
        display: {
                type: Boolean,
                default: false,
        }
}, {timestamps: true});

// Model
const techModel = model<Tech>('tech', techSchema);
export default techModel;
