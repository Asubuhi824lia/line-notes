import styles from './LoginPage.module.css'
import { NavLink } from 'react-router-dom';


const LoginPage = () => {
	return (
		<section className={styles['auth-form']}>
			<div >
				<input className={styles['input']} placeholder="Почта"/>
				<input className={styles['input']} placeholder="Логин"/>
				<input className={styles['input']} placeholder="Пароль"/>
				<button className={styles['button']}>Войти</button>
			</div>
			<NavLink to="/auth" className={styles['gate-link']}>Зарегестрироваться</NavLink>
		</section>
	);
}


export default LoginPage;