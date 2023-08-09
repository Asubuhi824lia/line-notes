import styles from './EditHeader.module.css'
import { useContext } from 'react';

import { EditNoteContext, IsEditingContext } from '../../../../context';


const EditHeader = () => {

    const isEditing     = useContext(IsEditingContext)['isEditing']
    const setEditNote   = useContext(EditNoteContext)['setEditNote']
    
    return (
        <div className={styles['editing-head']} style={isEditing ? {display: 'flex'} : {display: 'none'}}>
            <span>Редактирование <a href='#' className={styles['note-link']}>заметки</a></span>
            <button className={styles['close-edit-btn']} onClick={() => setEditNote(null)}>&#10005;</button>
        </div>
    )
}


export default EditHeader;