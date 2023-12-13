import express from "express"
const router = express.Router();
import { authUser,registerUser,logoutUser,updateUserProfile,getUserProfile } from "../controllers/userController.js";



router.post('/auth',authUser);
router.post('/',registerUser);
router.post('/logout',logoutUser);
router.put('/profile',updateUserProfile);
router.get('/profile',getUserProfile);


export default router;