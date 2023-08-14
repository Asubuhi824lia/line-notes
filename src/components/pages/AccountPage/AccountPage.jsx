import styles from './AccountPage.module.css'


const user_data = {
	email: 'cocoa_mokoa*66@gmail.com',
	login: 'Cocoa_Micola',
	passw: 'JiJaJiJaJa',
}


const AccountPage = () => {
	return (
		<section>
			<div className={styles['data-fields']}>
				<label>
					<span>Почта</span>
					<input disabled className={styles.input} value={user_data.email}/>
					<a href='#' className={styles['auth-link']}>Изменить</a>
				</label>
				<label>
					<span>Логин</span>
					<input disabled className={styles.input} value={user_data.login}/>
					<a href='#' className={styles['auth-link']}>Изменить</a>
				</label>
				<label>
					<span>Пароль</span>
					<input disabled className={styles.input} value={user_data.passw}/>
					<a href='#' className={styles['auth-link']}>Изменить</a>
				</label>
			</div>
			<a href='#' className={styles['gate-link']}>Выйти</a>
		</section>
	);
}


export default AccountPage;