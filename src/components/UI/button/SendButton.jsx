import styles from './SendButton.module.css'

import send_icon from '../../../icons/send-icon.png'


const SendButton = () => {
    return (
        <button>
            <img src={send_icon} height={24} width={24} />
        </button>
    );
}

export default SendButton;