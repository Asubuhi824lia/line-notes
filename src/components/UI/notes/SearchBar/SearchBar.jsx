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

    let sortedNotes;
    sortedNotes = useMemo(() => {
        if (isSearchText) {
            setIsSearchText(false);
            const searched = notes.filter(note => note.text.toLowerCase().includes(searchText))
            return searched
        }
    }, [isSearchText, notes])

    sortedNotes = useMemo(() => {
        let day = date.getDate()
        day = day < 10 ? '0'+String(day) : day

        let month = date.getMonth() + 1
        month = month < 10 ? '0'+String(month) : month

        const formed_date = day + '.' + month + '.' + date.getFullYear()

        const searched = notes.filter(note => note.date == formed_date)
        return searched
    }, [date, notes])
    
    
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
                    className={styles['date-picker']}
                    selected={date}
                    onChange={d => setDate(d)}
                />
                <img src={calendar_icon} className={styles.icon} width={size} height={size}/>
            </button>
            <button className={styles['search-btn']} onClick={e => setIsSearchText(true)}>Поиск</button>
            <button className={styles['cancel-btn']}>Сброс</button>
        </div>
    )
}

export default SearchBar;