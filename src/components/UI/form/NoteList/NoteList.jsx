import styles from './NotesList.module.css'

import NoteItem from './NoteItem/NoteItem'
import { useEffect } from 'react'


const NoteList = ({notes, remove, isInc}) => {

    useEffect(() => {
        const section = document.querySelector('#note_list')
        section.scrollTo(0, section.scrollHeight)
    }, [isInc])

    

    return (
        <section className={styles['notes-area']} id='note_list'>
            {notes.map((note, index) => <NoteItem note={note} key={index.toString()} remove={remove} />)}
        </section>
    );
}

export default NoteList;