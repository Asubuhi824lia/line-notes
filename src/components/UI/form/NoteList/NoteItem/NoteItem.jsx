
const NoteItem = (props) => {
    return (
        <div>
            <strong><data>{props.note.date}</data></strong>
            <p>{props.note.text}</p>
        </div>
    );
}

export default NoteItem;
