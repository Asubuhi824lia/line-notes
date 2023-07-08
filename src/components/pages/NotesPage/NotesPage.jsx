import Header from '../../common/Header/Header'

import NoteTextarea from '../../UI/textarea/NoteTextarea'

import styles from './NotesPage.module.css'
import send_icon from '../../../icons/send-icon.png'


const NotesPage = () => {
	return (
		<div className={styles['NotesSection']}>
			<section className={styles['notes-area']}>
				<div className="notes">
					<div className="note">
						<strong><data>06.07.23</data></strong>
						<br />
						<p>Заметка</p>
					</div>
					<div className="note">
						<strong><data>06.07.23</data></strong>
						<br />
						<p>Заметка</p>
					</div>
					<div className="note">
						<strong><data>06.07.23</data></strong>
						<br />
						<p>Заметка</p>
					</div>
					<div className="note">
						<strong><data>06.07.23</data></strong>
						<br />
						<p>Заметка</p>
					</div>
					<div className="note">
						<strong><data>06.07.23</data></strong>
						<br />
						<p>Заметка</p>
					</div>
					<div className="note">
						<strong><data>06.07.23</data></strong>
						<br />
						<p>Заметка</p>
					</div>
					<div className="note">
						<strong><data>06.07.23</data></strong>
						<br />
						<p>Заметка</p>
					</div>
					<div className="note">
						<strong><data>06.07.23</data></strong>
						<br />
						<p>Заметка</p>
					</div>
					<div className="note">
						<strong><data>06.07.23</data></strong>
						<br />
						<p>Заметка</p>
					</div>
					<div className="note">
						<strong><data>06.07.23</data></strong>
						<br />
						<p>Заметка</p>
					</div>
					<div className="note">
						<strong><data>06.07.23</data></strong>
						<br />
						<p>Заметка</p>
					</div>
					<div className="note">
						<strong><data>06.07.23</data></strong>
						<br />
						<p>Заметка</p>
					</div>
					<div className="note">
						<strong><data>06.07.23</data></strong>
						<br />
						<p>Заметка</p>
					</div>
					<div className="note">
						<strong><data>06.07.23</data></strong>
						<br />
						<p>Заметка</p>
					</div>
				</div>
			</section>
			<form className={styles['input-field']}>
				<NoteTextarea />
				<button className="send-btn">
					<img src={send_icon} height={24} width={24} />
				</button>
			</form>
		</div>
	);
}

export default NotesPage;