import styles from './NoteItem.module.css' 

import edit from '../../../../icons/edit-icon.png'
import del from '../../../../icons/delete-icon.png'

const NoteItem = (props) => {
    return (
        <div className={styles.note}>
            <div className={styles.body}>
                <strong><data>{props.note.date}</data></strong>
                <p>{props.note.text}</p>
            </div>
            <div className={styles['note-options']}>
                <button className={styles['note-item_btn']}>
                    <img alt="edit" src={edit}/>
                </button>
                <button className={styles['note-item_btn']} onClick={() => props.remove(props.note)}>
                    <img alt="delete" src={del}/>
                </button>
            </div>
        </div>
    );
}

export default NoteItem;
