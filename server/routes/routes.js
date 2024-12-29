import express from "express";
const router = express.Router();

import signUp from '../controller/user/signUp.js'
import signIn from '../controller/user/signIn.js'
import authtoken from "../middleware/auth.js";
import consultation from '../controller/services/consultation.js'
import doctorinfo from "../controller/user/doctorInfo.js";

router.post('/signin', signIn);
router.post('/signup', signUp);
router.post('/consultation', authtoken, consultation);
router.get('/doctorinfo', doctorinfo)

export default router;


