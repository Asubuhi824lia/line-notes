import styles from './SearchBar.module.css'

import search_icon from '../../../../icons/search-icon.png'
import calendar_icon from '../../../../icons/calendar-icon.png'

import ReactDatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.module.css'

import { useMemo, useState } from 'react'


const SearchBar = ({notes}) => {
    const [date, setDate] = useState(new Date())
    
    const [searchText, setSearchText]       = useState('')
    const [isSearchText, setIsSearchText]   = useState(false)

    const sortedNotes = useMemo(() => {
        if (isSearchText) {
            setIsSearchText(false);
            const searched = notes.filter(note => note.text.toLowerCase().includes(searchText))
            console.log(searched)
            return searched
        }
    }, [isSearchText, notes])
    
    
    const size = 40;
    return (
        <div className={styles['search-field']}>
            <img src={search_icon} className={styles.icon} width={size} height={size}/>
            <input  className={styles['search-input']} 
                    type="text" 
                    placeholder='Поиск по истории заметок'
                    onChange={e => setSearchText(e.target.value)}
            />
            <button className={styles['choose-date-btn']}>
                <ReactDatePicker
                    selected={date}
                    onChange={d => setDate(d)}
                    className={styles['date-picker']}
                />
                <img src={calendar_icon} className={styles.icon} width={size} height={size}/>
            </button>
            <button className={styles['search-btn']} onClick={e => setIsSearchText(true)}>Поиск</button>
            <button className={styles['cancel-btn']}>Сброс</button>
        </div>
    )
}

export default SearchBar;