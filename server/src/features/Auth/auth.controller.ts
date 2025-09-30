import { Request, Response } from "express";
import { sign } from "jsonwebtoken";
import config from "../../config/config";
import userModel from "../User/user.model";
import { User } from "@this/common/class/User";
import { signInErrors, signUpErrors } from "./auth.error";

/**
 *  @param {number} maxAge Define the cookie maxAge
 */
const maxAge: number = 3 * 21 * 60 * 60 * 1000;

const createToken = (id: string) => {
  return sign({ id }, config.JWT_TOKEN as string, {
    expiresIn: maxAge,
  });
}

export const signIn = async (req: Request, res: Response): Promise<void> => {
  const { username, password }: { username: string; password: string } = req.body;
  try {
    const formatedUsername = username.toLocaleLowerCase().split(" ").join("_");
    const user: User = await userModel.login(formatedUsername, password);
    const UID: string = user._id!.toString();
    const token: string = createToken(UID);
    res.cookie("auth", token, { httpOnly: true, maxAge });
    res.status(201).json({ user });
    return;
  } catch (error:any) {
    const errors = signInErrors(error);
    res.status(200).send({errors});
    return;
  }
}

export const signUp = async (req: Request, res: Response): Promise<void> => {
  const { username, password }: { username: string; password: string } = req.body;
  try {
    const formatedUsername = username.toLocaleLowerCase().split(" ").join("_");
    const user = await userModel.create({ username: formatedUsername, password });
    res.status(201).json({ user: user._id });
    return;
  } catch (error:any) {
    const errors = signUpErrors(error);
    res.status(200).send({errors}); 
    return;
  }
}

export const signOut = (_req: Request, res: Response): void => {
  res.cookie("auth", null, { httpOnly: true, maxAge: 1 });
  res.status(200).send('logout');
  return;
}
