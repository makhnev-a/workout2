import expressAsyncHandler from 'express-async-handler'
import Workout from '../../models/workoutModel.js'

// @desc    Create workout
// @route   POST /api/workouts
// @access  Private
export const addNewWorkout = expressAsyncHandler(async (req, res) => {
	const { name, exerciseIds } = req.body

	const workout = await Workout.create({
		name,
		exercises: exerciseIds,
	})

	res.json(workout)
})

// @desc    Update workout
// @route   PUT /api/workouts
// @access  Private
export const updateWorkout = expressAsyncHandler(async (req, res) => {
	const { name, exerciseIds, workoutId } = req.body
	const currentWorkout = await Workout.findById(workoutId)

	if (!currentWorkout) {
		res.status(404)
		throw new Error('Данный workout не найден')
	}

	currentWorkout.name = name
	currentWorkout.exercises = exerciseIds

	const updatedWorkout = await currentWorkout.save()

	res.json(updatedWorkout)
})

// @desc    Delete workout
// @route   DELETE /api/workouts
// @access  Private
export const deleteWorkout = expressAsyncHandler(async (req, res) => {
	const { workoutId } = req.body
	const currentWorkout = await Workout.findById(workoutId)

	if (!currentWorkout) {
		res.status(404)
		throw new Error('Данный workout не найден')
	}

	await currentWorkout.save()

	res.json({ message: 'Workout has been removed' })
})

// @desc    Get workout
// @route   GET /api/workouts/:id
// @access  Private
export const getWorkout = expressAsyncHandler(async (req, res) => {
	const workout = await Workout.findById(req.params.id)
		.populate('exercises')
		.lean()
	const minutes = Math.ceil(workout.exercises.length * 3.7)

	res.json({ ...workout, minutes })
})

// @desc    Get workouts
// @route   GET /api/workouts
// @access  Private
export const getWorkouts = expressAsyncHandler(async (req, res) => {
	const workouts = await Workout.findById({}).populate('exercises')

	res.json(workouts)
})
