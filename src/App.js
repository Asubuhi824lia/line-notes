import styles from './App.module.css'

import { React, useState } from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'

import Header from './components/common/Header/Header'

import { privateRoutes, publicRoutes } from './routes/index'


const App = () => {
	const [isAuth, setIsAuth] = useState(false)

	return (
		<div className={styles["wrapper"]}>
			<main>
				<BrowserRouter>
					{isAuth ? <Header /> : ''}
					<Routes>
						{isAuth
							? publicRoutes.map((route) => {
								return <Route path={route.path} element={route.element} exact={route.exact}/>
							})
							: privateRoutes.map((route) => {
								return <Route path={route.path} element={route.element} exact={route.exact}/>
							})
						}
						<Route path='*'	element={<Navigate to='/auth'/>} />
					</Routes>
				</BrowserRouter>
			</main>
		</div>
	);
}


export default App;
