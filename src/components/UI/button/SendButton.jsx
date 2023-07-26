import styles from './SendButton.module.css'

import send_icon from '../../../icons/send-icon.png'


const SendButton = (props) => {
    return (
        <button onClick={props.onClick} 
                disabled={props.isTextareaEmpty}>
            {props.isTextareaEmpty
                ? <img src={send_icon} height={24} width={24} className={styles.disabled} />
                : <img src={send_icon} height={24} width={24} />
            }
        </button>
    );
}

export default SendButton;