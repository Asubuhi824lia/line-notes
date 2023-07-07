import React from 'react'
import styles from './App.module.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import Header from './common/Header/Header'

import AuthPage from './pages/AuthPage/AuthPage'
import AccountPage from './pages/AccountPage/AccountPage'
import NotesPage from './pages/NotesPage/NotesPage'

const App = () => {
	return (
		<div className={styles["wrapper"]}>
			<main>
				<BrowserRouter>
					<Header />
					<Routes>
						<Route path='/auth' element={<AuthPage />} />
						<Route path='/account' element={<AccountPage />} />
						<Route path='/notes' element={<NotesPage />} />
						<Route path='*' element={<Navigate to='/notes' />} />
					</Routes>
				</BrowserRouter>
			</main>
		</div>
	);
}

export default App;
