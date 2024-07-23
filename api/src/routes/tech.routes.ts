//Imports
import { Router } from 'express';
import { createTechno, deleteTechno, editTechno, getTechnos } from '../controllers/tech.controller';
let router:Router = Router();
let auth = require("../../middlewares/auth.middleware");

//Routes definitions
router.get('/', getTechnos);

router.post('/', auth.requireAuth, createTechno);

router.patch('/:id', auth.requireAuth, editTechno);

router.delete('/:id', auth.requireAuth, deleteTechno);


//default export
export default router;