import { Request, Response } from "express";
import userModel from "./user.model";
import { isValidObjectId } from "mongoose";
import { isEmpty } from "@this/common/utils/isEmpty";
import { editUserErrors } from "./user.error";
import fs from "fs";
import path from "path";
import roleModel from "../Role/role.model";

export class UserController {
        static async getUserById(req: Request, res: Response): Promise<void> {
                const { id } = req.params;
                if (!isValidObjectId(id)) res.send("Error: not valid id");

                let user = await userModel.findById(id).select('-password').populate('role');
                if (isEmpty(user)) res.send("Error: No user Found")
                res.status(200).send(user);

        }

        static async editUser(req: Request, res: Response): Promise<void> {
                try {
                        const { username, role }: { username?: string, role?: string } = req.body;
                        const file = req.file;

                        const mimetype_whitlist = ["image/jpeg"];

                        if (file && !mimetype_whitlist.includes(file.mimetype)) {
                                throw Error("wrong picture type");
                        }

                        const user = await userModel.findById(res.locals.user._id);
                        if (!user) return void res.status(200).send("Error: No user Found");

                        if (username) user.username = username.toLocaleLowerCase().split(" ").join("_");
                        if (file) {
                                var filePath = path.join(__dirname, `../../../uploads/${user.avatar}`);
                                if (user.avatar != "default.png") {
                                        try {
                                                fs.unlink(filePath, () => {});
                                        } catch(_e) {
                                                console.log(`${res.locals.user._id} tried to delete ${user.avatar} but failed`)
                                        }
                                }
                                user.avatar = file.filename;
                        }

                        if (role) user.role = role;

                        await user.save();
                        return void res.status(201).json(user);
                } catch (error: any) {
                        const errors = editUserErrors(error);
                        console.log(errors);

                        return void res.status(201).send({ errors });
                }

        }

        static async updateUserRole(req: Request, res: Response) {
                const { userId, roleId } = req.body;
                if (!isValidObjectId(userId) || !isValidObjectId(roleId)) return res.status(200).send({ error: "Invalid Ids" });

                const user = await userModel.findById(userId);
                if (isEmpty(user)) return res.status(200).send({ error: "user_not_found" });
                
                const role = await roleModel.findById(roleId);
                if (isEmpty(role)) return res.status(200).send({ error: "role_not_found" });

                user!.role = role!._id;
                user!.save();

                return res.status(201).send(user);
        }

        static async deleteUser(req: Request, res: Response): Promise<void> {

                if (!res.locals.user) return void res.status(403).send("Unauthorized");

                const { password }: { password: string } = req.body;

                let pswd = await userModel.checkPassword(password, res.locals.user._id);
                if (!pswd) return void res.status(201).send("Error: Wrong password");

                const user = await userModel.findByIdAndDelete(res.locals.user._id)
                return void res.status(201).json(user);
        }
}
