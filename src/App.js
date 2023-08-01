import styles from './App.module.css'

import React from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'

import Header from './components/common/Header/Header'

import AuthPage 	from './components/pages/AuthPage/AuthPage'
import AccountPage 	from './components/pages/AccountPage/AccountPage'
import NotesPage 	from './components/pages/NotesPage/NotesPage'

const App = () => {
	return (
		<div className={styles["wrapper"]}>
			<main>
				<BrowserRouter>
					<Header />
					<Routes>
						<Route path='/auth' 	element={<AuthPage />} />
						<Route path='/account' 	element={<AccountPage />} />
						<Route path='/notes' 	element={<NotesPage />} />
						<Route path='*'			element={<Navigate to='/notes' />} />
					</Routes>
				</BrowserRouter>
			</main>
		</div>
	);
}

export default App;
