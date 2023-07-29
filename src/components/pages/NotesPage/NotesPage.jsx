import styles from './NotesPage.module.css'

import { useEffect, useState } from 'react'

import NoteList from '../../UI/notes/NoteList'
import NoteForm from '../../UI/form/NoteForm'
import SearchBar from '../../UI/notes/SearchBar/SearchBar'

import axios from 'axios'


const NotesPage = () => {
	const [notes, setNotes] = useState([])
	const [isChangeList, setIsChangeList] = useState(false)
	const [filteredNoteList, setFilteredNoteList] = useState(notes)


	async function fetchPosts() {
		const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
			.then(response => response.data.map(post => {
					const cur_date = new Date()
		
					let day = post.userId + 10
					day = day < 10 ? '0'+String(day) : day
		
					let month = cur_date.getMonth() + 1
					month = month < 10 ? '0'+String(month) : month
		
					return {
						id: post.id,
						date: day + '.' + month + '.' + cur_date.getFullYear(),
						text: post.title
					}	
				})
			)
		setNotes(response)
	}

	useEffect(() => {
		fetchPosts()
	}, [])


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