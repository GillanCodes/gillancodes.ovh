import { MongoEntity } from "./MongoEntity.js";
import { Role } from "./Role.js";

export class User extends MongoEntity {
  public username: string;
  public password: string;
  public avatar?: string | undefined | null;
  public role: string | Role | any;

  constructor({
    _id,
    createdAt,
    updatedAt,
    username,
    password,
    avatar,
    role
  }: {
    _id?: string;
    createdAt?:string;
    updatedAt?:string;
    username: string;
    password: string;
    avatar?: string;
    role: string
  }) {
    super({_id, createdAt, updatedAt});
    this.username = username;
    this.password = password;
    this.avatar = avatar;
    this.role = role;
  }

  getUsername() {
    return this.username;
  }

  setUsername(username: string) {
    return this.username = username;
  }
}
