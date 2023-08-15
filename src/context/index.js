import { createContext } from "react"


export const EditNoteContext	= createContext(null)
export const ChangeNoteContext  = createContext()

export const EmitNoteIdContext  = createContext()

export const AuthContext = createContext()
export const UserContext = createContext(
    [
        {
            email: 'cocoa_mokoa*66@gmail.com',
            login: 'Cocoa_Micola',
            password: 'JiJaJiJaJa',
        },
    ]
)