import styles from './AccountPage.module.css'

import { useContext, useState, useEffect } from 'react'

import { AuthContext, UserContext } from '../../../context'
import Field from './Field/Field'


const AccountPage = () => {

	const user_data = useContext(UserContext)
	const user_id = localStorage.getItem("user_id")
	const user = user_data[user_id]

	const setIsAuth = useContext(AuthContext)['setIsAuth']

	const [editData, setEditData] = useState('')

	const [email, setEmail] 		= useState(user.email)
	const [login, setLogin] 		= useState(user.login)
	const [password, setPassword]	= useState(user.password)


	useEffect(() => {
		switch (editData) {
			case "email": document.getElementById('email').focus(); break;
			case "login": document.getElementById('login').focus(); break;
			case "password": document.getElementById('password').focus(); break;
			default: break;
		}
	}, [editData])


	const resetChanges = () => { 
		setEmail(user.email)
		setLogin(user.login)
		setPassword(user.password)
		setEditData("")
	}

	const editField = (type) => { 
		switch (type) {
			case "email": user[`${type}`] = email; break;
			case "login": user[`${type}`] = login; break;
			case "password": user[`${type}`] = password; break;
		}
		setEditData("");
	}

	const isFocus = (type) => (editData == type)
	

	return (
		<section>
			<div className={styles['data-fields']}>
				<label>
					<span className={styles.text}>Почта</span>
					<Field type = "email" state={[email, setEmail]} editField={editField} editData={editData} />
					{isFocus("email")
						? <a className={styles['auth-link']} onClick={resetChanges}>Отмена</a>
						: <a className={styles['auth-link']} onClick={() => {resetChanges(); setEditData("email")}}>Изменить</a>
					}
				</label>
				<label>
					<span className={styles.text}>Логин</span>
					<Field type = "login" state={[login, setLogin]} editField={editField} editData={editData} />
					{isFocus("login")
						? <a className={styles['auth-link']} onClick={resetChanges}>Отмена</a>
						: <a className={styles['auth-link']} onClick={() => {resetChanges(); setEditData("login")}}>Изменить</a>
					}
				</label>
				<label>
					<span className={styles.text}>Пароль</span>
					<Field type = "password" state={[password, setPassword]} editField={editField} editData={editData} />
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