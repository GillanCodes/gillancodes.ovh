import announceModel from "../models/announcement";
import { mongoSchema } from "./mongoSchema.type";

export default class Announce extends mongoSchema
{
  title: string;
  content: string;
  active: boolean | undefined;
  
  constructor({title, content, active, _id, createdAt, updatedAt}: {title:string, content:string, active?:boolean, _id:string, createdAt:string, updatedAt:string})
  {
    super({_id, createdAt, updatedAt});
    this.title = title;
    this.content = content;
    this.active = active;
  }

  async switchActive()
  {
    const newAnnounce = await announceModel.findByIdAndUpdate(this._id, {
      $set: {
        active: !this.active 
      }
    });

    return newAnnounce;
  }

}
