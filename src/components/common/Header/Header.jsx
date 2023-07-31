import styles from './Header.module.css'

import notes		from '../../../icons/notes-icon.png'
import user 		from '../../../icons/user-icon.png'
import copyright 	from '../../../icons/copyright-icon.png'

import { Link } from 'react-router-dom';


const Header = () => {
	return (
		<header>
			<nav>
				<Link to='/notes'>
					<button className={styles['header-item']}>
						<img src={notes} />
					</button>
				</Link>

				<div>
					<Link to='/auth'>
						<button className={styles['header-item']}>
							<img src={copyright} />
						</button>
					</Link>
					<Link to='/account'>
						<button className={styles['header-item']}>
							<img src={user} />
						</button>
					</Link>
				</div>
			</nav>
		</header>
	);
}

export default Header;