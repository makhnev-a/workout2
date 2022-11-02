import express from 'express'
import { protect } from '../middleware/authMiddleware.js'
import {
	addNewExercise,
	deleteExercise,
	getExercises,
	updateExercise,
} from '../controllers/exercise/mainController.js'
import { getExerciseLog } from '../controllers/exercise/log/getController.js'
import {
	updateCompleteExerciseLog,
	updateExerciseLog,
} from '../controllers/exercise/log/updateController.js'

const router = express.Router()

router.route('/').get(protect, getExercises)
router.route('/').post(protect, addNewExercise)
router.route('/').put(protect, updateExercise)
router.route('/').delete(protect, deleteExercise)
router.route('/log').put(protect, updateExerciseLog)
router.route('/log/completed').put(protect, updateCompleteExerciseLog)
router.route('/log/:id').get(protect, getExerciseLog)

export default router
