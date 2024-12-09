import { Router } from 'express';
import { createStudy, deleteStudy, editStudy, getStudies, getStudy } from '../controllers/studies.controller';
let auth = require('../../middlewares/auth.middleware');
let router:Router = Router();


router.get('/', getStudies);
router.get('/:id', getStudy);

router.post('/', auth.requireAuth, createStudy);

router.patch('/:id', auth.requireAuth, editStudy);

router.delete('/:id', auth.requireAuth, deleteStudy);

export default router;