import styles from './AccountPage.module.css'


const AccountPage = () => {
	return (
		<section>
			<div className={styles['data-fields']}>
				<label>Почта
					<input disabled/>
					<button>Изменить</button>
				</label>
				<label>Логин
					<input disabled/>
					<button>Изменить</button>
				</label>
				<label>Пароль
					<input disabled/>
					<button>Изменить</button>
				</label>
			</div>
			<button>Выйти</button>
		</section>
	);
}


export default AccountPage;