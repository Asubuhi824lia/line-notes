import styles from './NotesPage.module.css'

import { useState } from 'react'

import NoteList from '../../UI/notes/NoteList'
import NoteForm from '../../UI/form/NoteForm'
import SearchBar from '../../UI/notes/SearchBar/SearchBar'


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
	const [isInc, setIsInc] = useState(false)

	const createNote = (newNote) => {
		setNotes([...notes, newNote])
		setIsInc(!isInc)
	}

	const removeNote = (note) => {
		setNotes(notes.filter(n => n.id != note.id))
	}


	return (
		<div className={styles['NotesSection']}>
			<SearchBar/>
			<NoteList notes={notes} remove={removeNote} isInc={isInc} />
			<NoteForm notes={notes} create={createNote} />
		</div>
	);
}

export default NotesPage;