import styles from './SearchBar.module.css'

import search_icon from '../../../../icons/search-icon.png'
import calendar_icon from '../../../../icons/calendar-icon.png'

const SearchBar = () => {
    const size = 40;

    return (
        <div className={styles['search-field']}>
            <img src={search_icon} className={styles.icon} width={size} height={size}/>
            <input  className={styles['search-input']} 
                    type="text" 
                    placeholder='Поиск по истории заметок'/>
            <button className={styles['choose-date-btn']}>
                <img src={calendar_icon} className={styles.icon} width={size} height={size}/>
            </button>
            <button className={styles['search-btn']}>Поиск</button>
            <button className={styles['cancel-btn']}>Отмена</button>
        </div>
    )
}

export default SearchBar;