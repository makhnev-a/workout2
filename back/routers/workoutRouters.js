import { protect } from '../middleware/authMiddleware.js'
import express from 'express'
import {
	addNewWorkout,
	deleteWorkout,
	getWorkout,
	getWorkouts,
	updateWorkout,
} from '../controllers/workout/workoutController.js'
import {
	createNewWorkoutLog,
	getWorkoutLog,
	updateCompleteWorkoutLog,
} from '../controllers/workout/createWorkoutLog.js'

const router = express.Router()

router.route('/').get(protect, getWorkouts)
router.route('/').post(protect, addNewWorkout)
router.route('/').put(protect, updateWorkout)
router.route('/').delete(protect, deleteWorkout)

router.route('/log').post(protect, createNewWorkoutLog)
router.route('/log').put(protect, updateCompleteWorkoutLog)
router.route('/:id').get(protect, getWorkout)
router.route('/log/:id').get(protect, getWorkoutLog)

export default router
