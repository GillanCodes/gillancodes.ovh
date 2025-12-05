import { Router } from "express";
import { createTech, deleteTech, editTech, getTech, getTechs } from "./tech.controller";
let router:Router = Router()

router.get('/', getTechs);
router.get('/:id', getTech);

router.post('/', createTech);

router.patch('/:id', editTech);

router.delete('/:id', deleteTech);


export default router;
