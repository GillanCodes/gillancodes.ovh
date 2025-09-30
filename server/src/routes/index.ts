import { Router } from "express";
const router:Router = Router();

import AuthRoutes from "../features/Auth/auth.routes";
import UserRoutes from "../features/User/user.routes";

router.use('/auth', AuthRoutes);
router.use('/user', UserRoutes);

export default router;
