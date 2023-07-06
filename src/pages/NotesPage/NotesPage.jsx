import styles from './NotesPage.module.css'


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
				<textarea name='note' 
					maxLength={80} cols={40} rows={4} 
					wrap='hard' placeholder='Ваша заметка...' autoFocus/>
				<button>Добавить</button>
			</section>
		</main>
	);
}

export default NotesPage;