import { Request, Response } from "express";
import announceModel from "../../models/announcement";
import log from "../../log";
import { isEmpty, isVariableWidth } from "validator";
import { isValidObjectId } from "mongoose";
import Announce from "../../types/announce.type";
import { request } from "node:http";

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

export const editAnnounce = async (req:Request, res:Response) => {
  try {
    if (!res.locals.user) return res.status(403).send("permission_refused");
    const { id } = req.params;
    const { title, content, active } = req.body;

    if (isEmpty(id) || !isValidObjectId(id)) return res.status(200).send("error: missing ou invalid id"); 

    if (active) 
    {
      await announceModel.findOneAndUpdate({active: true}, {
        $set: {
          active: false
        }
      })
    }
  
    await announceModel.findByIdAndUpdate(id, {
      $set: {
        title,
        content,
        active
      }
    }, {upsert:true, new:true}).then((data) => {
      return res.status(200).send(data);
    }).catch((error) => {
      console.log(error) 
      return;
    })

  } catch (error) {
    console.log(error);
  }
}

export const switchAnnounce = async (req:Request, res:Response) => {
  try {
    if (!res.locals.user) return res.status(403).send("permission_refused");
    const { id } = req.params;

    if (isEmpty(id) || !isValidObjectId(id)) return res.status(200).send("error: missing ou invalid id"); 

    const activeAnn:Announce | null = await announceModel.findOne({active:true});
    if (activeAnn)
    {
      const announce = new Announce(activeAnn);
      announce.switchActive();
    }

    const reqAnn:Announce | null = await announceModel.findById(id);
    if (!reqAnn) return res.status(200).send('error: announce do not exist');  
    const announce = new Announce(reqAnn);
    announce.switchActive();

    return res.status(200).send(announce);

  } catch (error) {
    console.log(error);    
  } 
}
