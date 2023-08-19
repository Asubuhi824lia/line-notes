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
	const onSubmit = (data) => {console.log(data); console.log(login)}
	

	return (
		<section className={styles['auth-section']}>
			<form className={styles['auth-form']} onSubmit={handleSubmit(onSubmit)}>
				<input 
					className={styles['input']} 
					placeholder="Почта"
					{...register("email", {required: true, minLength: 8, 
						pattern: {
							value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
							message: "Некорректный адрес"
						}})
					}
					aria-invalid={errors.email ? "true" : "false"}
				/>
				{errors.email?.type === "required" 	&& (<span role="alert" style={{color:'red'}}>Не указана почта</span>)}
				{errors.email&& <span role="alert" style={{color:'red'}}>{errors.email.message}</span>}
				{errors.email?.type === "minLength" && (<span role="alert" style={{color:'red'}}>Меньше 8 символов</span>)}

				<input 
					className={styles['input']} 
					placeholder="Логин"	
					{...register("login", {required: true, minLength: 2, 
						pattern: {
							value: /[^\s]{1,}$/i,
							message: "Пробелы недопустимы"
						}})
					}
					aria-invalid={errors.login ? "true" : "false"}
				/>
				{errors.login&& <span role="alert" style={{color:'red'}}>{errors.login.message}</span>}
				{errors.login?.type === "required" && (<span role="alert" style={{color: 'red'}}>Не указан логин</span>)}
				{errors.login?.type === "minLength" && (<span role="alert" style={{color:'red'}}>Меньше 2 символов</span>)}

				<input 
					className={styles['input']} 
					placeholder="Пароль"	
					{...register("password", {required: true, minLength: 6, 
						pattern: {
							value: /[^\s]$/i,
							message: "Пробелы недопустимы"
						}})
					}
					aria-invalid={errors.password ? "true" : "false"}
				/>
				{errors.password&& <span role="alert" style={{color:'red'}}>{errors.password.message}</span>}
				{errors.password?.type === "required" && (<span role="alert" style={{color: 'red'}}>Не указан пароль</span>)}
				{errors.password?.type === "minLength" && (<span role="alert" style={{color:'red'}}>Меньше 6 символов</span>)}

				<button 
					className={styles['button']} 
					// onClick={() => {regUser(); setUser(); logIn()}}
					// onClick={() => {}}
				>Зарегестрироваться</button>
			</form>
			<NavLink to="/login" className={styles['gate-link']}>Войти</NavLink>
		</section>
	);
}


export default AuthPage;