import { Router } from "express";
let router:Router = Router()

import { requireAuth } from "../../middlewares/auth.middleware";

import { multerMiddleware } from "../../middlewares/multer.middleware";
import { UserController } from "./user.controller";
import { checkPermission } from "../../middlewares/checkPermission.middleware";
import { Permission } from "../Permission/permission.types";

router.patch('/', requireAuth, multerMiddleware, UserController.editUser);
router.patch('/', requireAuth, checkPermission(Permission.ADMIN_CHANGE_USER_ROLE), UserController.updateUserRole);
router.delete('/', requireAuth, UserController.deleteUser);

router.get('/:id', UserController.getUserById);

export default router;
