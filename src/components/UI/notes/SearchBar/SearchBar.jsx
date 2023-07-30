import styles from './SearchBar.module.css'

import search_icon from '../../../../icons/search-icon.png'
import calendar_icon from '../../../../icons/calendar-icon.png'

import ReactDatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.module.css'

import { useState } from 'react'
import useFilter from '../../../../hooks/useFilter'


const SearchBar = ({notes, change}) => {
    const [date, setDate] = useState()
    const [searchText, setSearchText] = useState('')

    const [selectedSearch, setSelectedSearch] = useState('')
    const [isInputChanged, setIsInputChanged] = useState(false)

    
    const filteredNotes = useFilter( notes, selectedSearch, 
        date, searchText, isInputChanged )
    change(filteredNotes)


    const reset = () => {
        setDate('');
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
                    onChange={d => {setDate(d); setSelectedSearch('date'); setSearchText('')}}
                    selected={date}
                />
                <img alt='calendar-icon' src={calendar_icon} className={styles.icon} width={size} height={size}/>
            </button>
            <button 
                className={styles['search-btn']} 
                onClick={() => {setSelectedSearch('input'); setIsInputChanged(!isInputChanged); setDate('')}}>Поиск</button>
            <button 
                className={styles['reset-btn']}  
                onClick={reset}>Сброс</button>
        </div>
    )
}

export default SearchBar;