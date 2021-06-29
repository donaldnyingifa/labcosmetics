import express from "express";
const router = express.Router();
import { authUser, registerUser, getUsers, getUserById, getUserProfile } from '../controllers/userController.js'
import { protect } from '../middleware/authMiddleware.js'

router.route("/").post(registerUser);
router.post("/login", authUser);
router.route("/profile").get(protect, getUserProfile)

router.route("/").get(getUsers);
router.route('/:id').get(getUserById);

export default router;
