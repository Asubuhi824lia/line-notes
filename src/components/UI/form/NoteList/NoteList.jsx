import styles from './NotesList.module.css'

import NoteItem from './NoteItem/NoteItem'
import { useEffect } from 'react'


const NoteList = ({notes, remove, isInc}) => {

    useEffect(() => {
        const section = document.querySelector('#note_list')
        section.scrollTo(0, section.scrollHeight)
    }, [isInc])

    

    return (
        <section id='note_list' className={ `${styles['notes-area']} 
            ${notes.length != 0 ? styles['notes-area-fill'] : styles['notes-area-empty']}` }>
            { notes.length != 0
                ? notes.map((note, index) => <NoteItem note={note} key={index.toString()} remove={remove} />)
                : <span style={{color: "gray"}}>"Пока что заметок здесь нет!"</span>
            }
        </section>
    );
}

export default NoteList;