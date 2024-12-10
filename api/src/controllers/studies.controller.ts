import { Request, Response } from "express";
import studyModel from "../../models/studies.model";
import { isValidObjectId } from "mongoose";


export const getStudies = async (req:Request, res:Response) => {
    try {
        const studies = await studyModel.find().sort({'createdAt': -1});
        return res.status(200).json(studies);
    } catch (error) {
        return console.log(error);
    }
}

export const getStudy = async (req:Request, res:Response) => {
    try {
        
        const { id } = req.params;
        if (!isValidObjectId(id))
            throw new Error('not_valid_id : Get Study');

        const study = await studyModel.findById(id);
        return res.status(200).json(study)


    } catch (error) {
        return console.log(error)
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

        return res.status(201).json(study);

    } catch (error) {
        return console.log(error);
    }

}

export const editStudy = async (req:Request, res:Response) => {
    try {
        
        if (!res.locals.user)
            throw new Error('permission_refused: must be log to do that action !');

        const { id } = req.params;
        
        if (!isValidObjectId(id))
            throw new Error('invalid_id');

        const { year, description } = req.body;

        const study = studyModel.findByIdAndUpdate(id, {
            year,
            description
        }, {new: true, upsert: true}).then((data) => {
            return res.status(201).json(data);
        }).catch((err) => {
            return console.log(err);  
        })


    } catch (error) {
        return console.log(error);
    }
}


export const deleteStudy = async (req:Request, res:Response) => {
    try {
        
        if (!res.locals.user)
            throw new Error('permission_refused: must be log to do that action !');

        const { id } = req.params;

        if (!isValidObjectId(id))
            throw new Error('invalid_id');

        const study = await studyModel.findByIdAndDelete(id);
        return res.status(200).json(study);

    } catch (error) {
        return console.log(error);
    }
}
