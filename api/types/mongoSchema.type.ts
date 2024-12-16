export class mongoSchema
{
  _id: string;
  createdAt: string;
  updatedAt:string;

  constructor({_id,createdAt,updatedAt}:{_id:string,createdAt:string,updatedAt:string})
  {
        this._id = _id;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
  }
}

