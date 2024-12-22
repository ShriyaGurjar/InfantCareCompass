import express from "express";
const router = express.Router();

import signUp from '../controller/user/signUp.js'
import signIn from '../controller/user/signIn.js'
import authtoken from "../middleware/auth.js";
import consultation from '../controller/services/consultation.js'

router.post('/signin', signIn);
router.post('/signup', signUp);
router.post('/consultation', authtoken, consultation);


export default router;


