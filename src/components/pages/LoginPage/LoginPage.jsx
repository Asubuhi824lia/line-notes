import styles from './LoginPage.module.css'

import { useContext, useState } from 'react';

import { NavLink } from 'react-router-dom';
import { AuthContext, UserContext } from '../../../context';

import equal from 'deep-equal'


const LoginPage = () => {

	const users = useContext(UserContext)

    const [email, setEmail] 		= useState(users[0].email)
	const [login, setLogin] 		= useState(users[0].login)
	const [password, setPassword]	= useState(users[0].password)

	const setIsAuth = useContext(AuthContext)['setIsAuth']


    const checkUser = () => {
		const log_user = formUserData()
        
        users.forEach((user, id) => {
            if ( equal(user, log_user) ) {
                setUser(id);
                logIn();
                return;
            }
        })
    }

    const formUserData = () => ({email: email, login: login, password: password})
	const setUser   = (id) => localStorage.setItem("user_id", id);
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