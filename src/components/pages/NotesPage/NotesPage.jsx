import styles from './NotesPage.module.css'

import { useEffect, useState } from 'react'

import NoteList from '../../UI/notes/NoteList'
import NoteForm from '../../UI/form/NoteForm'
import SearchBar from '../../UI/notes/SearchBar/SearchBar'

import NoteService from '../../../API/NoteService'
import { ChangeNoteContext, EditNoteContext, EmitNoteIdContext } from '../../../context'


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


    const [emitNoteId, setEmitNoteId] = useState(0)


	return (
		<EmitNoteIdContext.Provider value={{
			emitNoteId, 
			setEmitNoteId,
		}}>
			<EditNoteContext.Provider value={{
				editNote,
				setEditNote,
				isEditing, 
				setIsEditing,
			}}>
				<ChangeNoteContext.Provider value={changeNote}>
					<div className={styles['NotesSection']}>
						<SearchBar 	notes={notes} change={changeNoteList} isChangeList={isChangeList} />
						<NoteList 	notes={filteredNoteList} remove={removeNote} isInc={isChangeList} />
						<NoteForm 	create={createNote} />
					</div>
				</ChangeNoteContext.Provider>
			</EditNoteContext.Provider>
		</EmitNoteIdContext.Provider>
	);
}


export default NotesPage;