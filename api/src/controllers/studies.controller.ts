import { Request, Response } from "express";
import studyModel from "../../models/studies.model";
import { isValidObjectId } from "mongoose";


export const getStudies = async (req:Request, res:Response) => {
    try {
        const studies = await studyModel.find();
        res.status(200).json(studies);
    } catch (error) {
        console.log(error);
    }
}

export const getStudy = async (req:Request, res:Response) => {
    try {
        
        const { id } = req.params;
        if (!isValidObjectId(id))
            throw new Error('not_valid_id : Get Study');

        const study = await studyModel.findById(id);
        res.status(200).json(study)


    } catch (error) {
        
    }
}

export const createStudy = async (req:Request, res:Response) => {

    try {
        
        if (!res.locals.user)
            throw new Error('permission_refused: must be log to do that action !');

        const { year, description } = req.body;

        const study = await studyModel.create({
            year,
            description
        });

        res.status(201).json(study);

    } catch (error) {
        console.log(error);
    }

}

export const editStudy = (req:Request, res:Response) => {
    try {
        
        if (!res.locals.user)
            throw new Error('permission_refused: must be log to do that action !');

    } catch (error) {
        
    }
}


export const deleteStudy = (req:Request, res:Response) => {
    try {
        
        if (!res.locals.user)
            throw new Error('permission_refused: must be log to do that action !');

    } catch (error) {
        
    }
}