import express from "express";
const router = express.Router();
import { authUser, getUsers, getUserById } from '../controllers/userController.js'


router.route("/").get(getUsers);
router.route('/:id').get(getUserById);
router.post("/login", authUser);

export default router;
