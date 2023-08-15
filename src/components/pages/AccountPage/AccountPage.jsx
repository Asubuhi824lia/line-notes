import styles from './AccountPage.module.css'

import { useContext, useState, useEffect } from 'react'

import { AuthContext, UserContext } from '../../../context'


const AccountPage = () => {

	const user_data = useContext(UserContext)
	const user_id = localStorage.getItem("user_id")
	const users = user_data[user_id]

	const setIsAuth = useContext(AuthContext)['setIsAuth']

	const [editData, setEditData] = useState('')

	const [email, setEmail] 		= useState(users.email)
	const [login, setLogin] 		= useState(users.login)
	const [password, setPassword]	= useState(users.password)


	useEffect(() => {
		switch (editData) {
			case "email": document.getElementById('email').focus(); break;
			case "login": document.getElementById('login').focus(); break;
			case "password": document.getElementById('password').focus(); break;
			default: break;
		}
	}, [editData])


	const changeUserData = (field, newData) => { users[`${field}`] = newData; }
	const resetChanges = () => { 
		setEmail(users.email)
		setLogin(users.login)
		setPassword(users.password)
		setEditData("")
	}

	const editField = (type) => { 
		switch (type) {
			case "email": users[`${type}`] = email; break;
			case "login": users[`${type}`] = login; break;
			case "password": users[`${type}`] = password; break;
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
						? <a className={styles['auth-link']} onClick={resetChanges}>Отмена</a>
						: <a className={styles['auth-link']} onClick={() => {resetChanges(); setEditData("email")}}>Изменить</a>
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
						? <a className={styles['auth-link']} onClick={resetChanges}>Отмена</a>
						: <a className={styles['auth-link']} onClick={() => {resetChanges(); setEditData("login")}}>Изменить</a>
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
						? <a className={styles['auth-link']} onClick={resetChanges}>Отмена</a>
						: <a className={styles['auth-link']} onClick={() => {resetChanges(); setEditData("password")}}>Изменить</a>
					}
				</label>
			</div>
			<a className={styles['gate-link']} onClick={() => setIsAuth(false)}>Выйти</a>
		</section>
	);
}


export default AccountPage;