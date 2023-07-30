import styles from './NotesPage.module.css'

import { useEffect, useState } from 'react'

import NoteList from '../../UI/notes/NoteList'
import NoteForm from '../../UI/form/NoteForm'
import SearchBar from '../../UI/notes/SearchBar/SearchBar'

import NoteService from '../../../API/NoteService'


const NotesPage = () => {
	const [notes, setNotes] = useState([])
	const [isChangeList, setIsChangeList] = useState(false)
	const [filteredNoteList, setFilteredNoteList] = useState(notes)
	
	useEffect(() => {
		fetchNotes()
	}, [])


	async function fetchNotes() {
		const response = await NoteService.getAll()
		setNotes(response)
	}

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