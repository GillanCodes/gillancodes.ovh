import { Router } from "express";
import { createTech, deleteTech, editTech, getTech, getTechs } from "./tech.controller";
import { checkPermission } from "../../middlewares/checkPermission.middleware";
let router:Router = Router()

router.get('/', checkPermission("tech_get") ,getTechs);
router.get('/:id', getTech);

router.post('/', createTech);

router.patch('/:id', editTech);

router.delete('/:id', deleteTech);


export default router;
