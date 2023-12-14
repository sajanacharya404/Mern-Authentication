import express from "express";
const router = express.Router();
import {
  authUser,
  registerUser,
  logoutUser,
  updateUserProfile,
  getUserProfile,
} from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";

router.post("/auth", authUser);
router.post("/", registerUser);
router.post("/logout", logoutUser);
router.put("/profile", protect, updateUserProfile);
router.get("/profile", protect, getUserProfile);

export default router;
