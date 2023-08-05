import styles from './SendButton.module.css'

import send_icon from '../../../icons/send-icon.png'
import edit_icon from '../../../icons/check-mark.png'


const SendButton = (props) => {
    return (
        <button disabled={props.isTextareaEmpty} onClick={props.onClick} className={styles['send-button']}>
            {props.isTextareaEmpty
                ? <img src={props.type ? edit_icon : send_icon} height={24} width={24} className={styles.disabled} />
                : <img src={props.type ? edit_icon : send_icon} height={24} width={24} />
            }
        </button>
    );
}

export default SendButton;