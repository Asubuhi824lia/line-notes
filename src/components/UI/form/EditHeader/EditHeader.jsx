import styles from './EditHeader.module.css'


const EditHeader = ({note}) => {
    return (
        <div className={styles['editing-head']}>
            <span>Редактирование <a href='#' className={styles['note-link']}>заметки</a></span>
            <span>&#10005;</span>
        </div>
    )
}


export default EditHeader;