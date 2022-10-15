import {addNewExercise} from "../controllers/exercise/exerciseController.js";
import {protect} from "../middleware/authMiddleware.js"
import express from "express";

const router = express.Router()

router.route("/").post(protect, addNewExercise)

export default router