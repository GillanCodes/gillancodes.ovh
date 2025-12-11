import { User } from "@this/common/class/User";
import { Model, model, Schema } from "mongoose";
import { compare, genSalt, hash } from "bcrypt";

// User Model interface init
export interface UserModel extends Model<User> {
    login(log: string, password:string): Promise<User>;
    checkPassword(password:string, id:string): Promise<boolean>;
}

let userSchema = new Schema<User>({
  username: {
    type: String,
    required: true,
    maxlength: 32,
    minlength: 4,
    unique: true
  },
  password: {
    type: String,
    required: true,
    maxlength: 255,
    minlength: 4
  },
  avatar: {
    type:String,
    required: false,
    default: "default.png"
  },
  role: {
          type: Schema.Types.ObjectId,
          ref: "Role",
          required: true
  }
}, {timestamps: true});

userSchema.pre('save', async function (this, next) {

  if (this.isNew || this.isModified('password')) {
    console.log("hased password");
    
    const salt:string = await genSalt();
    this.password = await hash(this.password, salt);
  }
  
  next();
});

// Login function to see if the password match.
userSchema.statics.login = async function (username:string, password:string)
{
    const user = await userModel.findOne({username});
    if (!user) throw new Error("incorrect_username");

    const auth = await compare(password, user.password);
    if (!auth) throw new Error("incorrect_password");
    
    return user;
}

userSchema.statics.checkPassword = async function (password:string, id:string): Promise<boolean>
{
  var user = await userModel.findById(id);
  if (user) return await compare(password, user.password);
  
  return false;
}

// Model
const userModel = model<User, UserModel>('User', userSchema);
export default userModel;
