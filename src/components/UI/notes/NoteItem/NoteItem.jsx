import styles from './NoteItem.module.css'

import { useContext } from 'react';

import edit from '../../../../icons/edit-icon.png'
import del from '../../../../icons/delete-icon.png'

import { EditNoteContext, EmitNoteIdContext } from '../../../../context'


const NoteItem = ({note = {id: '', date: '', text: ''}, remove}) => {
    
    const setEditNote   = useContext(EditNoteContext)['setEditNote']
    
    const emitNoteId    = useContext(EmitNoteIdContext)['emitNoteId']
    const isEmitNote    = (note.id == emitNoteId);
    
    const emitted = `${styles.note} ${styles.emitted}`


    return (
        <EditNoteContext.Consumer>
            {({ isEditing, setIsEditing }) => (
                <div className={isEmitNote ? emitted : styles.note}>
                    <div className={styles.body}>
                        <strong><data>{note.date}</data></strong>
                        <p>{note.text}</p>
                    </div>
                    <div className={styles['note-options']}>
                        <button className={styles['note-item_btn']} onClick={() => {remove(note)}}>
                            <img alt="delete" src={del}/>
                        </button>
                    {!isEditing
                    ?   <button className={styles['note-item_btn']} onClick={() => {setIsEditing(true); setEditNote(note)}}>
                            <img alt="edit" src={edit}/>
                        </button>
                    :   <div style={{width: 40}}></div>}
                    </div>
                </div>
            )}
        </EditNoteContext.Consumer>
    );
}


export default NoteItem;
