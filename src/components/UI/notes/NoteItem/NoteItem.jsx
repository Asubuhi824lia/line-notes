import styles from './NoteItem.module.css'
 

import edit from '../../../../icons/edit-icon.png'
import del from '../../../../icons/delete-icon.png'


const NoteItem = ({note, remove, setEditNote, editState}) => {

    const [isEditing, setIsEditing] = editState

    return (
            <div className={styles.note}>
                <div className={styles.body}>
                    <strong><data>{note.date}</data></strong>
                    <p>{note.text}</p>
                </div>
                <div className={styles['note-options']}>
                    <button className={styles['note-item_btn']} onClick={() => remove(note)}>
                        <img alt="delete" src={del}/>
                    </button>
                    {!isEditing
                    ?   <button className={styles['note-item_btn']} onClick={() => {setIsEditing(true); setEditNote(note)}}>
                            <img alt="edit" src={edit}/>
                        </button>
                    :   <button className={styles['note-item_btn']} onClick={() => {setIsEditing(true); setEditNote(note)}}>
                            <img className={styles.hide} alt="edit" src={edit}/>
                        </button>}
                </div>
            </div>
    );
}


export default NoteItem;
