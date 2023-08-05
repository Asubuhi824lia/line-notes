import styles from './NoteForm.module.css'

import { useEffect, useState } from 'react'

import NoteTextarea from '../textarea/NoteTextarea'
import SendButton from '../button/SendButton'


const NoteForm = ({create, editNote, setEditNote, change, isEditing}) => {
    
    const [note, setNote] = useState(null)
    
    useEffect(() => {
        setNote(editNote)
    }, [editNote])


    const addNewNote = (e) => {
        e.preventDefault()
        const cur_date = new Date()

        let date = cur_date.getDate()
        date = date < 10 ? '0'+String(date) : date

        let month = cur_date.getMonth() + 1
        month = month < 10 ? '0'+String(month) : month

        const newNote = {
            ...note, id: Date.now(),
            date: date + '.' + month + '.' + cur_date.getFullYear()
        }

        create(newNote)
        setNote({ id: 0, date: '', text: '' })
    }

    const isEmpty = (text) => {
        return (text == '') ? true : (text.match(/[^\s]/g) ? false : true);
    }

    const isEdited = (editedText, origText) => {
        return (editedText === origText) ? false : true;
    }


    const editIfChanged = (e) => {
		e.preventDefault()
        if (isEdited(editNote.text, note.text)) {
            change(editNote, note.text)
            return true;
        }
        else    
            return false;
    }


    return (
        <form className={styles['input-field']}>
            <NoteTextarea
                text={note ? note.text: ''}
                onChange={e => { setNote({ ...note, text: e.target.value }) }}/>
            <SendButton 
                type={isEditing} /* true - edit; false - send */
                onClick={(e) => { isEditing ? editIfChanged(e) : addNewNote(e); setEditNote(null) }}
                isTextareaEmpty={ note ? isEmpty(note.text) : true } />
        </form>
    );
}


export default NoteForm;