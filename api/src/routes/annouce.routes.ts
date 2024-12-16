import { Router } from 'express';
import { getAnnounces, getCurrentAnnounce, postAnnounce } from '../controllers/announcement.controller';
let router:Router = Router();

//Routes definitions
router.get('/', getCurrentAnnounce);
router.get('/all', getAnnounces)

router.post('/', postAnnounce);

//default export
export default router;
