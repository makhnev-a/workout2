import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import hamburgerImage from '../../../../images/header/hamburger.svg'
import hamburgerClose from '../../../../images/header/hamburger-close.svg'

import { menu } from './menubas'
import styles from './Hamburger.module.scss'

const Hamburger = () => {
	const [show, setShow] = useState(false)

	const handleLogout = () => console.log('Logout')

	return (
		<div className={styles.wrapper}>
			<button type='button' onClick={() => setShow(!show)}>
				<img
					alt='Hamburger'
					src={show ? hamburgerClose : hamburgerImage}
					height='24px'
				/>
			</button>
			<nav className={`${styles.menu} ${show ? styles.show : ''}`}>
				<ul>
					{menu.map(item => (
						<li key={item.title}>
							<Link to={item.link}>{item.title}</Link>
						</li>
					))}
					<li>
						<button onClick={handleLogout}>Logout</button>
					</li>
				</ul>
			</nav>
		</div>
	)
}

export default Hamburger
