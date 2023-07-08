// import styles from './NoteList.module.css'


const NoteItem = (props) => {
    return (
        <div>
            <strong><data>{props.note.date}</data></strong>
            <br />
            <p>{props.note.text}</p>
        </div>
    );
}

export default NoteItem;
