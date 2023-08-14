import styles from './SendButton.module.css'

import send_icon from '../../../icons/send-icon.png'
import edit_icon from '../../../icons/check-mark.png'
import { useContext } from 'react'
import { EditNoteContext } from '../../../context'


const SendButton = ({onClick, note}) => {

    /* true - edit; false - send */
    const type = useContext(EditNoteContext)['isEditing']

    const isEmpty = (text) => {
        return (text == '') ? true : (text.match(/[^\s]/g) ? false : true);
    }
    const isTextareaEmpty = note ? isEmpty(note.text) : true;


    return (
        <button disabled={isTextareaEmpty} onClick={onClick} className={styles['send-button']}>
            {isTextareaEmpty
                ? <img src={type ? edit_icon : send_icon} height={24} width={24} className={styles.disabled} />
                : <img src={type ? edit_icon : send_icon} height={24} width={24} />
            }
        </button>
    );
}


export default SendButton;