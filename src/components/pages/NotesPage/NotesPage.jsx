import styles from './NotesPage.module.css'

import { useState } from 'react'

import NoteList from '../../UI/notes/NoteList'
import NoteForm from '../../UI/form/NoteForm'
import SearchBar from '../../UI/notes/SearchBar/SearchBar'


const NotesPage = () => {
	const [notes, setNotes] = useState([
		{ id: 1, date: '08.07.2023', 	text: 'First note!' 	},
		{ id: 2, date: '08.07.2023', 	text: 'Second note!'	},
		{ id: 3, date: '09.07.2023', 	text: 'Third note!' 	},
		{ id: 4, date: '09.07.2023', 	text: 'Fourth note!'	},
		{ id: 5, date: '10.07.2023', 	text: 'Fifth note!' 	},
		{ id: 6, date: '11.07.2023', 	text: 'Sixth note!' 	},
		{ id: 7, date: '11.07.2023', 	text: 'Seventh note!'	},
		{ id: 8, date: '12.07.2023', 	text: 'Eighth note!' 	},
		{ id: 9, date: '13.07.2023', 	text: 'Ninth note!' 	},
		{ id: 10, date: '15.07.2023', 	text: 'Tenth note!' 	},
		{ id: 11, date: '15.07.2023', 	text: 'Eleventh note!' 	},
		{ id: 12, date: '18.07.2023', 	text: 'Twelfth note!' 	},
		{ id: 13, date: '19.07.2023', 	text: 'Thirteenth note!'},
		{ id: 14, date: '21.07.2023', 	text: 'Fourteenth note!'},
		{ id: 15, date: '23.07.2023', 	text: 'Fifteenth note!' },
	])
	const [isChangeList, setIsChangeList] = useState(false)

	const [filteredNoteList, setFilteredNoteList] = useState(notes)
	const changeNoteList = (sortedNotes) => {
		sortedNotes ? setFilteredNoteList(sortedNotes) : setFilteredNoteList(notes)
	}


	const createNote = (newNote) => {
		setNotes([...notes, newNote])
		setIsChangeList(!isChangeList)
	}

	const removeNote = (note) => {
		setNotes(notes.filter(n => n.id != note.id))
		setIsChangeList(!isChangeList)
	}


	return (
		<div className={styles['NotesSection']}>
			<SearchBar 	notes={notes} change={changeNoteList} isChangeList={isChangeList} />
			<NoteList 	notes={filteredNoteList} remove={removeNote} isInc={isChangeList} />
			<NoteForm 	notes={notes} create={createNote} />
		</div>
	);
}

export default NotesPage;