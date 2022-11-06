import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import styles from './NewWorkout.module.scss'
import bgImage from '../../../images/new-workout-bg.jpg'

import Layout from '../../common/Layout'
import Button from '../../ui/Button/Button'
import Field from '../../ui/Field/Field'

const NewWorkout = () => {
	const navigate = useNavigate()
	const [name, setName] = useState('')
	const handleSubmit = () => console.log('submit')

	return (
		<>
			<Layout bgImage={bgImage} />
			<div className={styles.wrapper}>
				<form onSubmit={handleSubmit}>
					<Field
						value={name}
						placeholder='Enter name'
						onChange={e => setName(e.target.value)}
					/>
					{/* React Select */}
					<Button text='Create' callback={() => navigate('/new-workout')} />
				</form>
			</div>
		</>
	)
}

export default NewWorkout
