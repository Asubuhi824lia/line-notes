import styles from './NoteTextarea.module.css'


const NoteTextarea = (props) => {
	return (
		<textarea className={styles['note-textarea']}
			onChange={props.onChange}
			value={props.text}
			name='note' maxLength={80} rows={4}
			wrap='hard' placeholder='Ваша заметка...' autoFocus />
	);
}


export default NoteTextarea;