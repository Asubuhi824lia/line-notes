import styles from './LoginPage.module.css'

import { useContext, useEffect, useState } from 'react';

import { NavLink } from 'react-router-dom';
import { AuthContext, UserContext } from '../../../context';


const LoginPage = () => {

    const [email, setEmail] 		= useState()
	const [login, setLogin] 		= useState()
	const [password, setPassword]	= useState()


	const users = useContext(UserContext)
	const setIsAuth = useContext(AuthContext)['setIsAuth']


    const checkUser = () => {
		const user = JSON.stringify( formUserData() )

        users.forEach((u, id) => {
            if (JSON.stringify(u) == user) {
                setUser(id);
                logIn();
                return;
            }
        })
    }

    const formUserData = () => ({email: email, login: login, password: password})
	const setUser 	= (id) => localStorage.setItem("user_id", id);
	const logIn		= () => setIsAuth(true);


	return (
		<section className={styles['auth-form']}>
			<div >
				<input className={styles['input']} placeholder="Почта" value={email} onChange={e => setEmail(e.target.value)}/>
				<input className={styles['input']} placeholder="Логин" value={login} onChange={e => setLogin(e.target.value)}/>
				<input className={styles['input']} placeholder="Пароль" value={password} onChange={e => setPassword(e.target.value)}/>
				<button className={styles['button']} onClick={checkUser}>Войти</button>
			</div>
			<NavLink to="/auth" className={styles['gate-link']}>Зарегестрироваться</NavLink>
		</section>
	);
}


export default LoginPage;