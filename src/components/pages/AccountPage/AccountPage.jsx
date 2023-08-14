import { useState } from 'react'
import styles from './AccountPage.module.css'
import { useEffect } from 'react'


const user_data = {
	email: 'cocoa_mokoa*66@gmail.com',
	login: 'Cocoa_Micola',
	password: 'JiJaJiJaJa',
}


const AccountPage = () => {

	const [editData, setEditData] = useState('')

	useEffect(() => {
		switch (editData) {
			case "email": 		
				document.getElementById('email').focus(); 
				break;
			case "login": 		
				document.getElementById('login').focus(); 
				break;
			case "password": 	
				document.getElementById('password').focus(); 
				break;
			default: break;
		}
	}, [editData])

	const isFocus = (type) => (editData == type)
	const getInputClass = (type) => (editData == type) ? styles['edit-input'] : styles['info-input']
	
	return (
		<section>
			<div className={styles['data-fields']}>
				<label>
					<span>Почта</span>
					<input 	disabled={!isFocus("email")} value={user_data.email} id='email'
							className={`${styles.input} ${getInputClass("email")}`}/>
					<a 	href='#' className={styles['auth-link']} onClick={() => setEditData("email")}>Изменить</a>
				</label>
				<label>
					<span>Логин</span>
					<input 	disabled={!isFocus("login")} value={user_data.login} id='login'
							className={`${styles.input} ${getInputClass("login")}`}/>
					<a href='#' className={styles['auth-link']} onClick={() => setEditData("login")}>Изменить</a>
				</label>
				<label>
					<span>Пароль</span>
					<input 	disabled={!isFocus("password")} value={user_data.password} id='password'
							className={`${styles.input} ${getInputClass("password")}`}/>
					<a href='#' className={styles['auth-link']} onClick={() => setEditData("password")}>Изменить</a>
				</label>
			</div>
			<a href='#' className={styles['gate-link']}>Выйти</a>
		</section>
	);
}


export default AccountPage;