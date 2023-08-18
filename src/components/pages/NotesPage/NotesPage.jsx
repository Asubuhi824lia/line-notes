import styles from './NotesPage.module.css'

import { useEffect, useState } from 'react'
import { FixedSizeList } from 'react-window'
import { useWindowSize } from '@uidotdev/usehooks'

import NoteForm from '../../UI/form/NoteForm'
import SearchBar from '../../UI/notes/SearchBar/SearchBar'
import NoteService from '../../../API/NoteService'
import NoteItem from '../../UI/notes/NoteItem/NoteItem'

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
	

	// get window height
	const height_w = useWindowSize().height

	// get css properties
	const getProp = (name) => Number(getComputedStyle(document.body).getPropertyValue(name).slice(0, -2));


	const [formHeight, setFormHeight] = useState(getProp('--note-form__height'))
	
	const occupied_h = getProp('--header__height')
						+ getProp('--search-field__height')
						+ getProp('--notes-section__margin-y')
						+ formHeight

	
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

						<FixedSizeList
							className={styles['notes-list']}
							height={height_w - occupied_h}
							width={552}
							itemSize={120}
							itemCount={filteredNoteList.length} 
						>
							{({ index, style }) => {
								const rev_ind = filteredNoteList.length-1 - index
								return <div style={style}>
									<NoteItem note={filteredNoteList[rev_ind]} key={index.toString()} remove={removeNote}/>
								</div>
							}}
						</FixedSizeList>

						<NoteForm create={createNote} setFormHeight={setFormHeight}/>
					</div>
				</ChangeNoteContext.Provider>
			</EditNoteContext.Provider>
		</EmitNoteIdContext.Provider>
	);
}


export default NotesPage;