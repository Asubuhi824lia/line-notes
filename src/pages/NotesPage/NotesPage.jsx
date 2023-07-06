import styles from './NotesPage.module.css'
import send_icon from '../../send-icon.png'


const NotesPage = () => {
	return (
		<main>
			<section className={styles['notes-area']}>
				<div className="notes">
					<h2>Заметка</h2>
					<h2>Заметка</h2>
					<h2>Заметка</h2>
					<h2>Заметка</h2>
					<h2>Заметка</h2>
					<h2>Заметка</h2>
					<h2>Заметка</h2>
					<h2>Заметка</h2>
					<h2>Заметка</h2>
					<h2>Заметка</h2>
					<h2>Заметка</h2>
					<h2>Заметка</h2>
					<h2>Заметка</h2>
					<h2>Заметка</h2>
				</div>
			</section>
			<section className={styles['input-field']}>
				<textarea name='note' maxLength={80} cols={40} rows={4}
					wrap='hard' placeholder='Ваша заметка...' autoFocus />
				<button className="send-btn">
					<img src={send_icon} height={24} width={24} />
				</button>
			</section>
		</main>
	);
}

export default NotesPage;