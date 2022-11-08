import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ReactSelect from 'react-select'

import bgImage from '../../../images/new-workout-bg.jpg'

import Layout from '../../common/Layout'
import Button from '../../ui/Button/Button'
import Field from '../../ui/Field/Field'
import { optionColor } from './optionColor'

const NewWorkout = () => {
	const navigate = useNavigate()
	const [name, setName] = useState('')
	const [exercises, setExercises] = useState('')
	const handleSubmit = () => console.log('submit')

	return (
		<>
			<Layout bgImage={bgImage} heading='Create new workout' />
			<div className='wrapper-inner-page'>
				<form onSubmit={handleSubmit}>
					<Field
						value={name}
						placeholder='Enter name'
						onChange={e => setName(e.target.value)}
					/>
					<Link to='/new-exercise' className='dark-link'>
						Add new exercise
					</Link>
					<ReactSelect
						classNamePrefix='select2-selection'
						placeholder='Exercises...'
						title='Exercises'
						options={[
							{ value: 'sfw432', label: 'Push-ups' },
							{ value: 'refres', label: 'Push-ups' },
						]}
						isSearchable={false}
						value={exercises}
						onChange={setExercises}
						theme={theme => optionColor(theme)}
						isMulti={true}
					/>
					<Button text='Create' callback={() => navigate('/new-workout')} />
				</form>
			</div>
		</>
	)
}

export default NewWorkout
