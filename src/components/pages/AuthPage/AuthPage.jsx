import styles from './AuthPage.module.css'


const AuthPage = () => {
	return (
		<section>
			<div className={styles['data-fields']}>
				<label>Почта
					<input />
				</label>
				<label>Логин
					<input />
				</label>
				<label>Пароль
					<input />
				</label>
			</div>
			<button>Зарегестрироваться</button>
		</section>
	);
}

export default AuthPage;