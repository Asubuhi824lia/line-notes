import styles from './EditHeader.module.css'


const EditHeader = ({note, isEditing, setEditNote}) => {
    
    return (
        <div className={styles['editing-head']} style={isEditing ? {display: 'flex'} : {display: 'none'}}>
            <span>Редактирование <a href='#' className={styles['note-link']}>заметки</a></span>
            <button className={styles['close-edit-btn']} onClick={() => setEditNote(null)}>&#10005;</button>
        </div>
    )
}


export default EditHeader;