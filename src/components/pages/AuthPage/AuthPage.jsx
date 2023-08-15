import styles from './AuthPage.module.css'
import { NavLink } from 'react-router-dom';


const AuthPage = () => {
	return (
		<section className={styles['auth-form']}>
			<div >
				<input className={styles['input']} placeholder="Почта"/>
				<input className={styles['input']} placeholder="Логин"/>
				<input className={styles['input']} placeholder="Пароль"/>
				<button className={styles['button']}>Зарегестрироваться</button>
			</div>
			<NavLink to="/login" className={styles['gate-link']}>Войти</NavLink>
		</section>
	);
}


export default AuthPage;