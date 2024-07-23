import { Request, Response } from "express";
import technoModel from "../../models/techno.model";
import { isValidObjectId } from "mongoose";

export const getTechnos = async (req: Request, res:Response) => {
    try {
        
        const techs = await technoModel.find();
        return res.status(200).json(techs);
        
    } catch (error) {
       return console.log(error); 
    }
}

export const createTechno = async (req: Request, res:Response) => {
    try {

        if (!res.locals.user)
            throw new Error("permission_denied: need auth.");

        const { icon, name, color, category } = req.body;

        const tech = await technoModel.create({
            name,
            icon,
            color, 
            category
        });

        return res.status(201).json(tech);

        
    } catch (error) {
       return console.log(error); 
    }
}

export const editTechno = async (req: Request, res:Response) => {
    try {

        if (!res.locals.user)
            throw new Error("permission_denied: need auth.");

        const { id } = req.params;

        if(!isValidObjectId(id))
            throw new Error("invalid_id");
    
        const { icon, name, color, category } = req.body;

        await technoModel.findByIdAndUpdate(id, {
            name,
            icon,
            color, 
            category
        }, {new: true, upsert: true}).then((data) => {
            return res.status(201).json(data);
        }).catch((err) => {
            throw new Error(err);
        })
    } catch (error) {
       return console.log(error); 
    }
}

export const deleteTechno = async (req: Request, res:Response) => {
    try {

        if (!res.locals.user)
            throw new Error("permission_denied: need auth.");

        const { id } = req.params;

        if(!isValidObjectId(id))
            throw new Error("invalid_id");

        const tech = await technoModel.findByIdAndDelete(id);
        return res.status(201).json(tech);

    } catch (error) {
       return console.log(error); 
    }
}