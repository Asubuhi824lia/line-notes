import styles from './NoteTextarea.module.css'


const NoteTextarea = (props) => {
	return (
		<textarea onChange={props.onChange}
			name='note' maxLength={80} rows={4}
            wrap='hard' placeholder='Ваша заметка...' autoFocus />
	);
}

export default NoteTextarea;