import styles from './NoteItem.module.css' 


const NoteItem = (props) => {
    return (
        <div className={styles.note}>
            <div className={styles.body}>
                <strong><data>{props.note.date}</data></strong>
                <p>{props.note.text}</p>
            </div>
            <button onClick={() => props.remove(props.note)}>Удалить</button>
        </div>
    );
}

export default NoteItem;
