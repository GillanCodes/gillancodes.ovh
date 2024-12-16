import { Request, Response } from "express";
import announceModel from "../../models/announcement";
import log from "../../log";

export const getCurrentAnnounce = async(_req:Request, res:Response) => {
  try {
    const announce = await announceModel.find({active:true});
    res.status(200).json(announce);
  } catch (error:any) {
    log(error, 0);
  }
};

export const getAnnounces = async(_req:Request, res:Response) => {
  try {
    const announces = await announceModel.find();
    res.status(200).json({announces});
  } catch (error:any) {
    log(error, 0);
  }
};

export const postAnnounce = async (req:Request, res:Response) => {
  if (!res.locals.user) return res.status(403).send("permission_refused"); 
  const {title, content, active} = req.body;
  
  if (active) 
  {
    await announceModel.findOneAndUpdate({active:true}, {
      $set: {
        active: false
      }
    });
  };

  const announce = await announceModel.create({
    title,
    content,
    active
  });
  
  res.status(201).send(announce);
}

//export const getCurrentAnnounce = (req:Request, res:Response) => {};
//export const getCurrentAnnounce = (req:Request, res:Response) => {};
//export const getCurrentAnnounce = (req:Request, res:Response) => {};
