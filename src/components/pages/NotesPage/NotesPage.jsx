import styles from './NotesPage.module.css'

import { useEffect, useState } from 'react'

import NoteList from '../../UI/notes/NoteList'
import NoteForm from '../../UI/form/NoteForm'
import SearchBar from '../../UI/notes/SearchBar/SearchBar'

import NoteService from '../../../API/NoteService'
import { ChangeNoteContext, EditNoteContext, IsEditingContext } from '../../../context'


const NotesPage = () => {
	const [notes, setNotes] = useState([])
	
	const [isChangeList, setIsChangeList] 			= useState(false)
	const [filteredNoteList, setFilteredNoteList] 	= useState(notes)	

	
	async function fetchNotes() {
		const response = await NoteService.getAll()		
		setNotes(response.data)
	}
		
	useEffect(() => {
		fetchNotes()
	}, [])
	

	const changeNoteList = (sortedNotes) => {
		sortedNotes ? setFilteredNoteList(sortedNotes) : setFilteredNoteList(notes)
	}


	const createNote = (newNote) => {
		setNotes([...notes, newNote])
		setIsChangeList(!isChangeList)
	}

	const removeNote = (note) => {
		setNotes(notes.filter(n => n.id !== note.id))
		setIsChangeList(!isChangeList)
	}


	const [isEditing, setIsEditing] = useState(false)
	const [editNote, setEditNote] 	= useState(null)
	
	useEffect(() => {
		if(!editNote) setIsEditing(false);
	}, [editNote])

	const changeNote = (editNote, newText) => {
		if (editNote.text == newText) {
			return false;
		} else {
			notes[editNote.id-1].text = newText
			return true;
		}
	}


	return (
		<IsEditingContext.Provider value={{
			isEditing, 
			setIsEditing,
		}}>
			<EditNoteContext.Provider value={{
				editNote,
				setEditNote
			}}>
				<ChangeNoteContext.Provider value={changeNote}>
					<div className={styles['NotesSection']}>
						<SearchBar 	notes={notes} change={changeNoteList} isChangeList={isChangeList} />
						<NoteList 	notes={filteredNoteList} remove={removeNote} isInc={isChangeList} />
						<NoteForm 	create={createNote} editNote={editNote} setEditNote={setEditNote} isEditing={isEditing} />
					</div>
				</ChangeNoteContext.Provider>

			</EditNoteContext.Provider>
		</IsEditingContext.Provider>
	);
}


export default NotesPage;