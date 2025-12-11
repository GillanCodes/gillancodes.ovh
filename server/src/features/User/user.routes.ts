import { Router } from "express";
let router:Router = Router()

import { deleteUser, editUser, getUserById } from "./user.controller";
import { requireAuth } from "../../middlewares/auth.middleware";

import { multerMiddleware } from "../../middlewares/multer.middleware";

router.patch('/', requireAuth, multerMiddleware, editUser);
router.delete('/', requireAuth, deleteUser);

router.get('/:id', getUserById);

export default router;
