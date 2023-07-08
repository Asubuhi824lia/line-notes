import styles from './Header.module.css'

import user 		from '../../../icons/user-icon.png'
import copyright 	from '../../../icons/copyright-icon.png'


const Header = () => {
	return (
		<header>
			<nav>
				<button className={styles['header-item']}>
					<img src={copyright} />
				</button>
				<button to='/account' className={styles['header-item']}>
					<img src={user} />
				</button>
			</nav>
		</header>
	);
}

export default Header;