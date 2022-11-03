import React from 'react'

import Layout from '../../common/Layout'
import Button from '../../ui/Button/Button'
import Counters from '../../common/Counters/Counters'
import bgImage from '../../../images/home-bg.jpg'
import styles from './Home.module.scss'

const Home = () => {
	return (
		<Layout height='100%' bgImage={bgImage}>
			<Button text='New' callBack={() => {}} type='main' />
			<h1 className={styles.heading}>EXERCISES FOR THE SHOULDERS</h1>
			<Counters />
		</Layout>
	)
}

export default Home
