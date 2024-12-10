import { Request, Response } from "express";
import { isValidObjectId } from "mongoose";
import workModel from "../../models/works.model";
import sanitizedConfig from "../../config/config";
import genUId from "../utils/Uid";
import * as fs from "fs";

export const getWorks = async (req: Request, res: Response) => {
    try {

        const works = await workModel.find().sort({'createdAt': -1});
        return res.status(200).json(works)

    } catch (error) {
        return console.log(error);
    }
}

export const getWork = async (req: Request, res: Response) => {
    try {
        
        const { id } = req.params;

        if (!isValidObjectId(id))
            throw new Error('invalid_id');

        const work = await workModel.findById(id);
        return res.status(200).json(work)

    } catch (error) {
        return console.log(error);
    }
}

export const createWork = async (req: any, res: Response) => {

    try {
       if (!res.locals.user)
        throw new Error("permission_refused: must be log to do that action !") 

        const { name, description, tags, link } = req.body;
        const file = req.file;
        
        const fileName = genUId() + ".png";
        fs.writeFile(`${sanitizedConfig.CDN_PATH}/${fileName}`, file!.buffer, (err:any) => {
            if (err) throw new Error(err);
        });

        const work = await workModel.create({
            icon: fileName,
            name,
            link,
            description: JSON.parse(description),
            tags: JSON.parse(tags)
        })

        return res.status(201).send(work)


    } catch (error) {
        return console.log(error);
    }
}

export const editWork = async (req: any, res: Response) => {
    try {
        if (!res.locals.user)
            throw new Error("permission_refused: must be log to do that action !")

        const { id } = req.params;

        if (!isValidObjectId(id))
            throw new Error('invalid_id');

        const { name, description, tags, link } = req.body;
        const file = req.file;
        
        const fileName = genUId() + ".png";
        fs.writeFile(`${sanitizedConfig.CDN_PATH}/${fileName}`, file!.buffer, (err:any) => {
            if (err) throw new Error(err);
        });
        
        await workModel.findByIdAndUpdate(id, {
            icon: fileName,
            name,
            description,
            tags,
            link,
        }, {new:true, upsert: true}).then((data) => {
            return res.status(201).json(data);
        }).catch((err) => {
            return console.log(err);
        });

    } catch (error) {
        return console.log(error);
    }
}

export const deleteWork = async (req: Request, res: Response) => {
    try {
        if (!res.locals.user)
            throw new Error("permission_refused: must be log to do that action !")

        const { id } = req.params;

        if (!isValidObjectId(id))
            throw new Error('invalid_id');

        const work = await workModel.findByIdAndDelete(id);
        return res.status(200).json(work);


    } catch (error) {
        return console.log(error);
    }
}
