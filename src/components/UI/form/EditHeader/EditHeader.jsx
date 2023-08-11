import styles from './EditHeader.module.css'

import { useContext } from 'react';

import { EditNoteContext, IsEditingContext, EmitNoteIdContext } from '../../../../context';


const EditHeader = () => {

    const isEditing     = useContext(IsEditingContext)['isEditing']
    const editNote      = useContext(EditNoteContext)['editNote']
    const setEditNote   = useContext(EditNoteContext)['setEditNote']

    const setEmitNoteId = useContext(EmitNoteIdContext)['setEmitNoteId']

    
    return (
        <div className={styles['editing-head']} style={isEditing ? {display: 'flex'} : {display: 'none'}}>
            <span>Редактирование <a href='#' className={styles['note-link']} onClick={() => {setEmitNoteId(editNote.id)}}>заметки</a>
            </span>
            <button className={styles['close-edit-btn']} onClick={() => {setEmitNoteId(0); setEditNote(null)}}>&#10005;</button>
        </div>
    )
}


export default EditHeader;