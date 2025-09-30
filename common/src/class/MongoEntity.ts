import { ObjectId } from "mongoose";

class MongoEntity
{

  public _id?: string | ObjectId | undefined;
  public createdAt?: string | Date | undefined;
  public updatedAt?: string | Date | undefined;

  constructor({_id, createdAt, updatedAt}: {_id?:string, createdAt?:string, updatedAt?:string})
  {
    this._id = _id;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}

export { MongoEntity };
