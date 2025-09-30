import { MongoEntity } from "./MongoEntity.js";

export class User extends MongoEntity {
  public username: string;
  public password: string;
  public avatar?: string | undefined | null;

  constructor({
    _id,
    createdAt,
    updatedAt,
    username,
    password,
    avatar,
  }: {
    _id?: string;
    createdAt?:string;
    updatedAt?:string;
    username: string;
    password: string;
    avatar?: string;
  }) {
    super({_id, createdAt, updatedAt});
    this.username = username;
    this.password = password;
    this.avatar = avatar;
  }

  getUsername() {
    return this.username;
  }

  setUsername(username: string) {
    return this.username = username;
  }
}
