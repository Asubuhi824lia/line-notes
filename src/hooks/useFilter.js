import { useMemo } from "react"

const formDate = (date) => {
    let day = date.getDate()
    day = day < 10 ? '0'+String(day) : day

    let month = date.getMonth() + 1
    month = month < 10 ? '0'+String(month) : month

    return day + '.' + month + '.' + date.getFullYear();
}
const filterByDate = (notes, date) => {
    return notes.filter(note => note.date === date)
}

const filterByInput = (notes, searchText) => {
    return notes.filter(note => note.text.toLowerCase().includes(searchText.toLowerCase()))
}


const useFilter = (notes, filter, date, searchText, isTextChanged) => {
    return useMemo(() => {
        if(filter === 'date')   return filterByDate(notes, formDate(date));
        if(filter === 'input')  return filterByInput(notes, searchText);
        return notes;
    }, [notes, date, isTextChanged])
}


export default useFilter