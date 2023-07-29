import styles from './SearchBar.module.css'

import search_icon from '../../../../icons/search-icon.png'
import calendar_icon from '../../../../icons/calendar-icon.png'

import ReactDatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.module.css'

import { useMemo, useState } from 'react'


const SearchBar = ({notes, change, isChangeList}) => {
    const [date, setDate] = useState(new Date())
    const [searchText, setSearchText] = useState('')

    const [selectedSearch, setSelectedSearch] = useState('')
    const [isInputChanged, setIsInputChanged] = useState(false)

    
    const filterByInput = () => {
        // setDate(new Date())
        return notes.filter(note => note.text.toLowerCase().includes(searchText))
    }
    const filterByDate = () => {
        setSearchText('')

        let day = date.getDate()
        day = day < 10 ? '0'+String(day) : day

        let month = date.getMonth() + 1
        month = month < 10 ? '0'+String(month) : month

        const formed_date = day + '.' + month + '.' + date.getFullYear()

        return notes.filter(note => note.date === formed_date)
    }

    const filteredNotes = useMemo(() => {
        if(selectedSearch === 'date')    return filterByDate();
        if(selectedSearch === 'input')   return filterByInput();
        return notes;
    }, [selectedSearch, isInputChanged, date, isChangeList])
    change(filteredNotes)

    const reset = () => {
        setDate(new Date());
        setSearchText('')
        setSelectedSearch('')
    }
    
    
    const size = 40;
    return (
        <div className={styles['search-field']}>
            <img alt='loupe' src={search_icon} className={styles.icon} width={size} height={size}/>
            <input  className={styles['search-input']} 
                    type="text"
                    placeholder='Поиск по истории заметок'
                    onChange={e => {setSearchText(e.target.value)}}
                    value={searchText}
            />
            <button className={styles['choose-date-btn']}>
                <ReactDatePicker
                    className={styles['date-picker']}
                    onChange={d => {setDate(d); setSelectedSearch('date')}}
                    selected={date}
                />
                <img alt='calendar-icon' src={calendar_icon} className={styles.icon} width={size} height={size}/>
            </button>
            <button 
                className={styles['search-btn']} 
                onClick={() => {setSelectedSearch('input'); setIsInputChanged(!isInputChanged)}}>Поиск</button>
            <button className={styles['reset-btn']}  onClick={reset}>Сброс</button>
        </div>
    )
}

export default SearchBar;