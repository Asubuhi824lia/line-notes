import styles from './NoteTextarea.module.css'


const NoteTextarea = ({text, onChange}) => {
	return (
		<textarea className={styles['note-textarea']}
			onChange={onChange}
			value={text}
			name='note' maxLength={80} rows={4}
			wrap='hard' placeholder='Ваша заметка...' autoFocus />
	);
}


export default NoteTextarea;