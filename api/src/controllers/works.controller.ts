import { Request, Response } from "express";
import { isValidObjectId } from "mongoose";
import workModel from "../../models/works.model";

export const getWorks = async (req: Request, res: Response) => {
    try {

        const works = await workModel.find();
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

export const createWork = async (req: Request, res: Response) => {
    try {
       if (!res.locals.user)
        throw new Error("permission_refused: must be log to do that action !") 

        const { icon, name, description, tags } = req.body;

        const work = await workModel.create({
            icon,
            name,
            description,
            tags
        })

        return res.status(201).send(work)


    } catch (error) {
        return console.log(error);
    }
}

export const editWork = async (req: Request, res: Response) => {
    try {
        if (!res.locals.user)
            throw new Error("permission_refused: must be log to do that action !")

        const { id } = req.params;

        if (!isValidObjectId(id))
            throw new Error('invalid_id');

        const { icon, name, description, tags } = req.body;
        
        await workModel.findByIdAndUpdate(id, {
            icon,
            name,
            description,
            tags,
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