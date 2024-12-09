import { Router } from 'express';
import { createWork, deleteWork, editWork, getWork, getWorks } from "../controllers/works.controller";
let auth = require('../../middlewares/auth.middleware');
let router:Router = Router();

let multer = require('multer');
const upload = multer().single('icon');

router.get('/', getWorks);
router.get('/:id', getWork);

router.post('/', upload, auth.requireAuth, createWork);

router.patch('/:id', upload, auth.requireAuth, editWork);

router.delete('/:id', auth.requireAuth, deleteWork);

export default router;