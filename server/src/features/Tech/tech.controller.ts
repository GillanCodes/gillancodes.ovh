import { Request, Response } from "express";
import techModel from "./tech.model";
import { isEmpty } from "@this/common/utils/isEmpty";

export const getTechs = async (req:Request, res:Response): Promise<void> => {
        const techs = await techModel.find();
        return void res.status(202).json(techs);
}

export const createTech = async(req:Request, res:Response): Promise<void> => {
        const {name, icon, color, percentage} = req.body;
        if (isEmpty(name) || isEmpty(percentage)) return void res.status(400).send({error: "TODO"});

        const tech = await techModel.create({
                name,
                icon,
                color,
                percentage
        });

        return void res.status(201).json(tech);
}
