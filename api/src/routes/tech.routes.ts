//Imports
import { Router } from 'express';
import { createTechno, deleteTechno, editTechno, getTechnos } from '../controllers/tech.controller';
let router:Router = Router();
let auth = require("../../middlewares/auth.middleware");

let multer = require('multer');
const upload = multer().single('icon');

//Routes definitions
router.get('/', getTechnos);

router.post('/', upload, auth.requireAuth, createTechno);

router.patch('/:id', upload, auth.requireAuth, editTechno);

router.delete('/:id', auth.requireAuth, deleteTechno);


//default export
export default router;