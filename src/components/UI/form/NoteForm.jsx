import styles from './NoteForm.module.css'

import { useContext, useEffect, useState } from 'react'

import NoteTextarea from '../textarea/NoteTextarea'
import SendButton from '../SendButton/SendButton'
import EditHeader from './EditHeader/EditHeader'
import { ChangeNoteContext, EditNoteContext } from '../../../context'


const NoteForm = ({create, setFormHeight}) => {
    
    const change = useContext(ChangeNoteContext)
    const editNote      = useContext(EditNoteContext)['editNote'],
          setEditNote   = useContext(EditNoteContext)['setEditNote'],
          isEditing     = useContext(EditNoteContext)['isEditing']
    const [note, setNote] = useState(null)
    
    
    useEffect(() => {
        setNote(editNote)
    }, [editNote])


    const addNewNote = () => {
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

    const isEdited = (editedText, origText) => {
        return (editedText === origText) ? false : true;
    }
    const editIfChanged = () => {
        if (isEdited(editNote.text, note.text)) {
            change(editNote, note.text)
            return true;
        }
        else    
            return false;
    }
        

	useEffect(() => {
		if(!isEditing) {
			setFormHeight(115)
		} else {
			setFormHeight(150)
		}
	}, [isEditing])


    return (
        <div className={styles['note-form']}>
            <EditHeader/>
            <form className={styles['input-field']}>
                <NoteTextarea
                    text={note ? note.text: ''}
                    onChange={e => { setNote({ ...note, text: e.target.value }) }}/>
                <SendButton 
                    onClick={(e) => { 
                            e.preventDefault(); 
                            isEditing ? editIfChanged() : addNewNote(); 
                            setEditNote(null);
                        }}
                    note={note}/>
            </form>
        </div>
    );
}


export default NoteForm;