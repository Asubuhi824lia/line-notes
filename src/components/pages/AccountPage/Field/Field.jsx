import styles from './Field.module.css'


const Field = ({type = '', state, editField, editData}) => {

    const [field, setField] = state

	const isFocus = (type) => (editData === type)
	const getInputClass = (type) => (editData === type) ? styles['edit-input'] : styles['info-input']

    
    return (
        <div>
            <input 	disabled={!isFocus(type)} id={type} value={field} onChange={(e) => setField(e.target.value)}
                    className={`${styles.input} ${getInputClass(type)}`}/>
            {isFocus(type)
            ? <button className={`${styles['edit-btn']} ${styles['text']}`} onClick={() => editField(type)}>Изменить {type}</button> : ''}
        </div>
    )
}


export default Field