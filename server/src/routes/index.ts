import { Router } from "express";
const router:Router = Router();

import AuthRoutes from "../features/Auth/auth.routes";
import UserRoutes from "../features/User/user.routes";
import TechRoutes from "../features/Tech/tech.routes";
import RoleRoutes from "../features/Role/role.routes";

router.use('/auth', AuthRoutes);
router.use('/user', UserRoutes);
router.use('/role', RoleRoutes);

router.use('/tech', TechRoutes);


export default router;
