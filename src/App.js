import React from 'react'
import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import AuthPage from './pages/AuthPage/AuthPage'
import AccountPage from './pages/AccountPage/AccountPage'
import NotesPage from './pages/NotesPage/NotesPage'

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/auth' 	element={<AuthPage />} 			/>
				<Route path='/account'	element={<AccountPage />} 		/>
				<Route path='/notes' 	element={<NotesPage />} 		/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
