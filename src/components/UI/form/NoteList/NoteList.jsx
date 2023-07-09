import styles from './NotesList.module.css'

import NoteItem from './NoteItem/NoteItem'


const NoteList = ({notes}) => {
    return (
        <section className={styles['notes-area']}>
            {notes.map((note, index) => <NoteItem note={note} key={index.toString()} />)}
        </section>
    );
}

export default NoteList;