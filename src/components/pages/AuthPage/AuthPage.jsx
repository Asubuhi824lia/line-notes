import styles from './AuthPage.module.css'


const AuthPage = () => {
	return (
		<section className={styles['auth-form']}>
			<div className={styles['data-fields']}>
				<input id="email" placeholder="Почта"/>
				<input id="login" placeholder="Логин"/>
				<input id="password" placeholder="Пароль"/>
				<button>Зарегестрироваться</button>
			</div>
		</section>
	);
}


export default AuthPage;