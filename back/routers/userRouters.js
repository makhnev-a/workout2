import express from "express"
import {getUserProfile} from "../controllers/user/profileController.js";
import {registerUser} from "../controllers/user/regController.js";
import {protect} from "../middleware/authMiddleware.js"
import {authUser} from "../controllers/user/authController.js";

const router = express.Router()

router.route("/").post(registerUser)
router.route("/login").post(authUser)
router.route("/profile").get(protect, getUserProfile)

export default router