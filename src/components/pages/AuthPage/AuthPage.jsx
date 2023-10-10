import styles from './AuthPage.module.css'

import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
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


	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const onSubmit = (data) => {console.log(data)}
	

	return (
		<section className={styles['auth-section']}>
			<form className={styles['auth-form']} onSubmit={handleSubmit(onSubmit)}>
				<input 
					className={styles['input']} 
					placeholder="Почта"
					{...register("email", {required: "Не указана почта", 
						minLength: {value: 8, message: 'Меньше 8 символов'}, 
						pattern: {
							value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
							message: "Некорректный адрес"
						}})
					}
					aria-invalid={errors.email ? "true" : "false"}
				/>
				{errors.email&& <span role="alert" style={{color:'red'}}>{errors.email.message}</span>}

				<input 
					className={styles['input']} 
					placeholder="Логин"	
					{...register("login", {required: "Не указан логин", 
						minLength: {value: 2, message: 'Меньше 2 символов'}, 
						pattern: {
							value: /[^\s]+[^\s]$/i,
							message: "Пробелы недопустимы"
						}})
					}
					aria-invalid={errors.login ? "true" : "false"}
				/>
				{errors.login && <span role="alert" style={{color:'red'}}>{errors.login.message}</span>}

				<input 
					className={styles['input']} 
					placeholder="Пароль"	
					{...register("password", {required: "Не указан пароль",
						minLength: {value: 8, message: "Меньше 6 символов"}, 
						pattern: {
							value: /[^\s]+[^\s]$/i,
							message: "Пробелы недопустимы"
						}})
					}
					aria-invalid={errors.password ? "true" : "false"}
				/>
				{errors.password&& <span role="alert" style={{color:'red'}}>{errors.password.message}</span>}

				<button 
					className={styles['button']}
					onClick={() => {regUser(); setUser(); logIn()}}
				>Зарегестрироваться</button>
			</form>
			<NavLink to="/login" className={styles['gate-link']}>Войти</NavLink>
		</section>
	);
}


export default AuthPage;