import { Router } from 'express';
import { createStudy, deleteStudy, editStudy, getStudies, getStudy } from '../controllers/studies.controller';
let requireAuth = require('../../middlewares/auth.middleware');
let router:Router = Router();


router.get('/', getStudies);
router.get('/:id', getStudy);

router.post('/', createStudy);

// router.patch('/:id', requireAuth, editStudy);

// router.delete('/:id', requireAuth, deleteStudy);

export default router;