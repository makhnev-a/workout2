import React from 'react'
import styles from './Counters.module.scss'

const counters = {
	minutes: 7,
	workouts: 1,
	kgs: 5,
}

const Counters = () => {
	console.log(Object.entries(counters))

	return (
		<div className={styles.wrapper}>
			{Object.entries(counters).map(item => {
				return (
					<div className={styles.count} key={`_key_${item[0]}`}>
						<div className={styles.heading}>{item[0]}</div>
						<div className={styles.number}>{item[1]}</div>
					</div>
				)
			})}
		</div>
	)
}

export default Counters
