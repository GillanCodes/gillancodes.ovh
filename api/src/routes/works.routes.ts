import { Router } from 'express';
import { createWork, deleteWork, editWork, getWork, getWorks } from "../controllers/works.controller";
let auth = require('../../middlewares/auth.middleware');
let router:Router = Router();


router.get('/', getWorks);
router.get('/:id', getWork);

router.post('/', auth.requireAuth, createWork);

router.patch('/:id', auth.requireAuth, editWork);

router.delete('/:id', auth.requireAuth, deleteWork);

export default router;