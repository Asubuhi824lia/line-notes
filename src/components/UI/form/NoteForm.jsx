import styles from './NoteForm.module.css'

import { useState } from 'react'

import NoteTextarea from '../textarea/NoteTextarea'
import SendButton from '../button/SendButton'


const NoteForm = ({notes, create}) => {
    const [note, setNote] = useState({ id: 0, date: '', text: '' })

    const addNewNote = (e) => {
        e.preventDefault()
        const cur_date = new Date()

        const newNote = {
            ...note, id: Date.now(),
            date: cur_date.getDate() + '.' + cur_date.getMonth() + '.' + cur_date.getFullYear()
        }

        create(newNote)
    }


    return (
        <form className={styles['input-field']}>
            <NoteTextarea
                value={notes}
                onChange={e => { setNote({ ...note, text: e.target.value }) }} />
            <SendButton onClick={addNewNote} />
        </form>
    );
}

export default NoteForm;