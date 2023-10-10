import styles from './App.module.css'

import { React, useState } from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'

import Header from './components/common/Header/Header'

import { privateRoutes, publicRoutes } from './routes/index'
import { AuthContext } from './context'
import { Helmet } from 'react-helmet'


const App = () => {
	const [isAuth, setIsAuth] = useState(true)

	return (
		<AuthContext.Provider value={{ 
			isAuth, 
			setIsAuth 
		}}>
			<div className={styles["wrapper"]}>
				<Helmet>
					<title>Line Notes</title>
					<script src="https://yastatic.net/s3/passport-sdk/autofill/v1/sdk-suggest-with-polyfills-latest.js"></script>
				</Helmet>
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
							<Route path='*'	element={<Navigate to={!isAuth ? '/login' : '/notes'}/>} />
						</Routes>
					</BrowserRouter>
				</main>
			</div>
		</AuthContext.Provider>
	);
}


export default App;
