import { Request, Response } from "express";
import techModel from "./tech.model";
import { isEmpty } from "@this/common/utils/isEmpty";
import { isValidObjectId } from "mongoose";

export const getTechs = async (req:Request, res:Response): Promise<void> => {
        const techs = await techModel.find();
        return void res.status(202).json(techs);
}

export const getTech = async (req:Request, res:Response): Promise<void> => {
        const { id } = req.params;

        if (isEmpty(id) || !isValidObjectId(id)) return void res.status(400).json({error: "invalid_id"});

        const tech = await techModel.findById(id);
        return void res.status(202).json(tech);
}

export const createTech = async(req:Request, res:Response): Promise<void> => {
        const {name, icon, color, percentage, display} = req.body;
        if (isEmpty(name) || isEmpty(percentage)) return void res.status(400).send({error: "empty_field"});

        const tech = await techModel.create({
                name,
                icon,
                color,
                percentage,
                display
        });
        return void res.status(201).json(tech);
}

export const editTech = async(req:Request, res:Response): Promise<void> => {
        const {name, icon, color, percentage, display } = req.body;
        const { id } = req.params;

        if (isEmpty(id) || !isValidObjectId(id)) return void res.status(400).json({error: "invalid_id"});

        const tech = await techModel.findByIdAndUpdate(id, {
                name,
                icon,
                color,
                percentage,
                display
        });
        return void res.status(200).json(tech);
}

export const deleteTech = async(req:Request, res:Response): Promise<void> => {
        const { id } = req.params;

        if (isEmpty(id) || !isValidObjectId(id)) return void res.status(400).json({error: "invalid_id"});

        const tech = await techModel.findByIdAndDelete(id);
        return void res.status(200).json(tech);
}
