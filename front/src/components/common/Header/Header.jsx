import React from 'react'
import styles from './Header.module.scss'

import userImage from '../../../images/header/user.svg'
import hamburgerImage from '../../../images/header/hamburger.svg'

const Header = () => {
	return (
		<header className={styles.header}>
			<button type='button'>
				<img alt='Auth' src={userImage} />
			</button>

			<button type='button'>
				<img alt='Hamburger' src={hamburgerImage} />
			</button>
		</header>
	)
}

export default Header
