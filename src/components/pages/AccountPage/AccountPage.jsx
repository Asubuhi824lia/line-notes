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

	const [email, setEmail] = useState(user_data.email)
	const [login, setLogin] = useState(user_data.login)
	const [password, setPassword] = useState(user_data.password)

	useEffect(() => {
		switch (editData) {
			case "email": document.getElementById('email').focus(); break;
			case "login": document.getElementById('login').focus(); break;
			case "password": document.getElementById('password').focus(); break;
			default: break;
		}
	}, [editData])


	const changeUserData = (field, newData) => { user_data[`${field}`] = newData; }
	const resetChanges = () => { 
		setEmail(user_data.email)
		setLogin(user_data.login)
		setPassword(user_data.password)
		setEditData("")
	}

	const editField = (type) => { 
		switch (type) {
			case "email": user_data[`${type}`] = email; break;
			case "login": user_data[`${type}`] = login; break;
			case "password": user_data[`${type}`] = password; break;
		}
		setEditData(""); 
	}

	const isFocus = (type) => (editData == type)
	const getInputClass = (type) => (editData == type) ? styles['edit-input'] : styles['info-input']
	

	return (
		<section>
			<div className={styles['data-fields']}>
				<label>
					<span className={styles.text}>Почта</span>
					<div>
						<input 	disabled={!isFocus("email")} id='email' value={email} onChange={(e) => setEmail(e.target.value)}
								className={`${styles.input} ${getInputClass("email")}`}/>
						{isFocus("email") 
						? <button className={`${styles['edit-btn']} ${styles.text}`} onClick={() => editField("email")}>Изменить почту</button> : ''}
					</div>
					{isFocus("email")
						? <a href='#' className={styles['auth-link']} onClick={resetChanges}>Отмена</a>
						: <a href='#' className={styles['auth-link']} onClick={() => {resetChanges(); setEditData("email")}}>Изменить</a>
					}
				</label>
				<label>
					<span className={styles.text}>Логин</span>
					<div>
						<input 	disabled={!isFocus("login")} id='login' value={login} onChange={(e) => setLogin(e.target.value)}
								className={`${styles.input} ${getInputClass("login")}`}/>
						{isFocus("login") 
						? <button className={`${styles['edit-btn']} ${styles.text}`} onClick={() => editField("login")}>Изменить логин</button> : ''}
					</div>
					{isFocus("login")
						? <a href='#' className={styles['auth-link']} onClick={resetChanges}>Отмена</a>
						: <a href='#' className={styles['auth-link']} onClick={() => {resetChanges(); setEditData("login")}}>Изменить</a>
					}
				</label>
				<label>
					<span className={styles.text}>Пароль</span>
					<div>
						<input 	disabled={!isFocus("password")} id='password' value={password} onChange={(e) => setPassword(e.target.value)}
								className={`${styles.input} ${getInputClass("password")}`}/>
						{isFocus("password") 
						? <button className={`${styles['edit-btn']} ${styles['text']}`} onClick={() => editField("password")}>Изменить пароль</button> : ''}
					</div>
					{isFocus("password")
						? <a href='#' className={styles['auth-link']} onClick={resetChanges}>Отмена</a>
						: <a href='#' className={styles['auth-link']} onClick={() => {resetChanges(); setEditData("password")}}>Изменить</a>
					}
				</label>
			</div>
			<a href='#' className={styles['gate-link']}>Выйти</a>
		</section>
	);
}


export default AccountPage;