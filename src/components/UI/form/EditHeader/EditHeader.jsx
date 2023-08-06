import styles from './EditHeader.module.css'


const EditHeader = ({note, isEditing}) => {
    return (
        <div className={styles['editing-head']} style={isEditing ? {display: 'flex'} : {display: 'none'}}>
            <span>Редактирование <a href='#' className={styles['note-link']}>заметки</a></span>
            <span>&#10005;</span>
        </div>
    )
}


export default EditHeader;