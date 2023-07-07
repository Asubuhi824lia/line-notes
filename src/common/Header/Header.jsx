import styles from './Header.module.css'

import user from '../../icons/user-icon.png'
import copyright from '../../icons/copyright-icon.png'


const Header = () => {
	return (
		<header>
			<button>
				<img src={copyright} />
			</button>
			<button>
				<img src={user} />
			</button>
		</header>
	);
}

export default Header;