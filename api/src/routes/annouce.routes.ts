import { Router } from 'express';
import { editAnnounce, getAnnounces, getCurrentAnnounce, postAnnounce, switchAnnounce } from '../controllers/announcement.controller';
let router:Router = Router();

//Routes definitions
router.get('/', getCurrentAnnounce);
router.get('/all', getAnnounces)

router.post('/', postAnnounce);

router.patch('/:id', editAnnounce);
router.patch ('/:id/switch', switchAnnounce);

//default export
export default router;
