import React from 'react'
import cn from 'classnames'

import styles from './Layout.module.scss'

import Header from './Header/Header'

const Layout = ({ children, bgImage, height = '350px ', heading = '' }) => {
	return (
		<div
			className={cn(styles.wrapper, {
				[styles.otherPage]: !!heading,
			})}
			style={{ height, backgroundImage: `url(${bgImage})` }}
		>
			<Header />
			{heading && <h1 className={styles.heading}>{heading}</h1>}
			{children && <div>{children}</div>}
		</div>
	)
}

export default Layout
