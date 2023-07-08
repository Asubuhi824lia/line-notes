import NoteItem from './NoteItem'


const NoteList = ({notes, ...props}) => {
    return (
        <section {...props}>
            {notes.map((note, index) => <NoteItem note={note} key={index.toString()} />)}
        </section>
    );
}

export default NoteList;