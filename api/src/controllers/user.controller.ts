import { Request,Response } from "express"
import userModel from "../../models/user.model";
import { isValidObjectId } from "mongoose";

export const getUser = async (req:Request, res:Response) => {

    try {
        
        const { id } = req.params;

        if (!isValidObjectId(id)) throw new Error('Invalid_id');

        const user = await userModel.findById(id);
        return res.status(200).json(user);

    } catch (error) {
        return console.log(error);
    }

}