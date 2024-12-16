import { model, Schema } from "mongoose";
import Announce from "../types/announce.type";

const announceSchema = new Schema<Announce>({
  title: {type:String, required:true},
  content : {type:String, required:true},
  active : {type: Boolean, default:false}
}, {timestamps:true});

//default export.
const announceModel = model<Announce>('announcements', announceSchema);
export default announceModel;
