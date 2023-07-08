import styles from './NotesPage.module.css'

import NoteTextarea from '../../UI/textarea/NoteTextarea'
import SendButton	from '../../UI/button/SendButton'


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
				<SendButton />
			</form>
		</div>
	);
}

export default NotesPage;