import { Router } from "express";
import { signIn, signOut, signUp } from "./auth.controller";

let router:Router = Router();

router.post('/signin', signIn);
router.post('/signup', signUp);
router.post('/signout', signOut);

export default router;
