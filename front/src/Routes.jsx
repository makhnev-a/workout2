import React from 'react'
import Home from './components/pages/Home/Home'
import NewWorkout from './components/pages/NewWorkout/NewWorkout'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Auth from './components/pages/Auth/Auth'

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path='/' exact element={<Home />} />
				<Route path='/new-workout' element={<NewWorkout />} />
				<Route path='/auth' element={<Auth />} />
			</Routes>
		</Router>
	)
}

export default App
