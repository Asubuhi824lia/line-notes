import styles from './SendButton.module.css'

import send_icon from '../../../icons/send-icon.png'
import edit_icon from '../../../icons/check-mark.png'
import { useContext } from 'react'
import { IsEditingContext } from '../../../context'


const SendButton = ({onClick, isTextareaEmpty}) => {

    /* true - edit; false - send */
    const type = useContext(IsEditingContext)['isEditing']

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