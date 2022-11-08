import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import styles from './Header.module.scss'

import userImage from '../../../images/header/user.svg'
import arrowImage from '../../../images/header/arrow.svg'
import Hamburger from './Hamburger/Hamburger'

const Header = () => {
	const location = useLocation()
	const navigate = useNavigate()

	return (
		<header className={styles.header}>
			{location.pathname !== '/' ? (
				<button type='button' onClick={() => navigate(-1)}>
					<img alt='Auth' src={arrowImage} />
				</button>
			) : (
				<button type='button' onClick={() => navigate('/auth')}>
					<img alt='Auth' src={userImage} />
				</button>
			)}

			<Hamburger />
		</header>
	)
}

export default Header
