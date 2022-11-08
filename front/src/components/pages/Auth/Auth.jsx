import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import styles from './Auth.module.scss'
import bgImage from '../../../images/auth-bg.png'

import Layout from '../../common/Layout'
import Button from '../../ui/Button/Button'
import Field from '../../ui/Field/Field'
import Alert from '../../ui/Alert/Alert'

const Auth = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [type, setType] = useState('auth')

	const handleSubmit = e => {
		e.preventDefault()

		if (type === 'auth') {
			console.log('Auth')
		} else {
			console.log('Reg')
		}
	}

	const handleReg = () => {
		console.log('Reg')
	}
	return (
		<>
			<Layout bgImage={bgImage} heading='Auth || Register' />
			<div className='wrapper-inner-page'>
				{true && <Alert type='success' text='You have been successfully' />}
				<form onSubmit={handleSubmit}>
					<Field
						type='email'
						value={email}
						placeholder='Enter email'
						onChange={({ target: { value } }) => setEmail(value)}
					/>
					<Field
						type='password'
						value={password}
						placeholder='Enter password'
						onChange={({ target: { value } }) => setPassword(value)}
					/>
					<div className={styles.wrapperButtons}>
						<Button text='Sign in' callBack={() => setType('auth')} />
						<Button text='Sign up' callBack={() => setType('reg')} />
					</div>
				</form>
			</div>
		</>
	)
}

export default Auth
