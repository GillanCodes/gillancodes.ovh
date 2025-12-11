import { Request, Response } from "express";
import * as jwt from "jsonwebtoken";
import config from "../config/config";
import userModel from "../features/User/user.model";

export const requireAuth = (req: Request, res: Response, next: () => void) => {
  const token = req.cookies.auth;
  if (!token)
  {
    res.status(401).send({error: "auth_needed"}); 
    return;
  }
  jwt.verify(token, config.JWT_TOKEN, async (err: unknown, _decodedToken: unknown) => {
      if (err) return console.log(err);
      else next();
    },
  );
};

export const checkUser = async (req: Request, res: Response, next: () => void) => {
  let token = req.cookies.auth;
  if (token) {
    jwt.verify(token, config.JWT_TOKEN, async (err: any, decodedToken: any) => {
      if (err) {
        res.locals.user = null;
        next();
      } else {
        let user = await userModel.findById(decodedToken.id).select("-password");
        res.locals.user = user;
        next();
      }
    });
  } else {
    res.locals.user = null;
    next();
  }
};
