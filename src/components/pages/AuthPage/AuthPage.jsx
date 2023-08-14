import styles from './AuthPage.module.css'


const AuthPage = () => {
	return (
		<section className={styles['auth-form']}>
			<div className={styles['data-fields']}>
				<input className={styles['input']} placeholder="Почта"/>
				<input className={styles['input']} placeholder="Логин"/>
				<input className={styles['input']} placeholder="Пароль"/>
				<button className={styles['button']}>Зарегестрироваться</button>
			</div>
		</section>
	);
}


export default AuthPage;