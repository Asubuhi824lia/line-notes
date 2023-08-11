import { createContext } from "react"

export const IsEditingContext	= createContext(false)
export const EditNoteContext	= createContext(null)
export const ChangeNoteContext  = createContext()

export const EmitNoteIdContext  = createContext()