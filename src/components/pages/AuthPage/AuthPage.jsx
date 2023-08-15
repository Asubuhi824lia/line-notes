import styles from './AuthPage.module.css'

import { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';

import { AuthContext, UserContext } from '../../../context';


const AuthPage = () => {

	const [email, setEmail] 		= useState()
	const [login, setLogin] 		= useState()
	const [password, setPassword]	= useState()

	const users = useContext(UserContext)
	const setIsAuth = useContext(AuthContext)['setIsAuth']


	const regUser = () => {
		const user = {
			email: email,
			login: login,
			password: password,
		}
		users.push(user)
	}

	const setUser 	= () => localStorage.setItem("user_id", users.length-1);
	const logIn		= () => setIsAuth(true);
	

	return (
		<section className={styles['auth-form']}>
			<div >
				<input className={styles['input']} placeholder="Почта"	value={email} onChange={e => setEmail(e.target.value)}/>
				<input className={styles['input']} placeholder="Логин"	value={login} onChange={e => setLogin(e.target.value)}/>
				<input className={styles['input']} placeholder="Пароль"	value={password} onChange={e => setPassword(e.target.value)}/>
				<button className={styles['button']} onClick={() => {regUser(); setUser(); logIn()}}>Зарегестрироваться</button>
			</div>
			<NavLink to="/login" className={styles['gate-link']}>Войти</NavLink>
		</section>
	);
}


export default AuthPage;