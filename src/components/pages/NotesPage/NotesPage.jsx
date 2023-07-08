import styles from './NotesPage.module.css'

import NoteTextarea from '../../UI/textarea/NoteTextarea'
import SendButton from '../../UI/button/SendButton'
import { useState } from 'react'
import NoteList from '../../UI/NoteList'


const NotesPage = () => {
	const [notes, setNotes] = useState([
		{ id: 1, date: '08.07.2023', text: 'One more note!' },
		{ id: 2, date: '08.07.2023', text: 'One more note!' },
		{ id: 3, date: '08.07.2023', text: 'One more note!' },
		{ id: 4, date: '08.07.2023', text: 'One more note!' },
		{ id: 5, date: '08.07.2023', text: 'One more note!' },
		{ id: 6, date: '08.07.2023', text: 'One more note!' },
		{ id: 7, date: '08.07.2023', text: 'One more note!' },
		{ id: 8, date: '08.07.2023', text: 'One more note!' },
		{ id: 9, date: '08.07.2023', text: 'One more note!' },
		{ id: 10, date: '08.07.2023', text: 'One more note!' },
		{ id: 11, date: '08.07.2023', text: 'One more note!' },
		{ id: 12, date: '08.07.2023', text: 'One more note!' },
		{ id: 13, date: '08.07.2023', text: 'One more note!' },
		{ id: 14, date: '08.07.2023', text: 'One more note!' },
		{ id: 15, date: '08.07.2023', text: 'One more note!' },
	])


	return (
		<div className={styles['NotesSection']}>
			<NoteList notes={notes} className={styles['notes-area']} />
			<form className={styles['input-field']}>
				<NoteTextarea />
				<SendButton />
			</form>
		</div>
	);
}

export default NotesPage;