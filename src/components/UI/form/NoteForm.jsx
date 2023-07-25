import styles from './NoteForm.module.css'

import { useState } from 'react'

import NoteTextarea from '../textarea/NoteTextarea'
import SendButton from '../button/SendButton'


const NoteForm = ({notes, create}) => {
    const [note, setNote] = useState({ id: 0, date: '', text: '' })

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


    return (
        <form className={styles['input-field']}>
            <NoteTextarea
                text={note.text}
                onChange={e => { setNote({ ...note, text: e.target.value }) }} />
            <SendButton onClick={addNewNote} />
        </form>
    );
}

export default NoteForm;