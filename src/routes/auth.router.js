import {Router} from "express";
const router = Router();
import { authenticate } from './../middlewares/loginAuth.js'


router.get('/profile', authenticate, (req, res) => {
    res.json({ message: `Welcome ${req.user.username}` });
  });
  

export default router;