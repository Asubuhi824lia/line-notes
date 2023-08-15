import AccountPage  from "../components/pages/AccountPage/AccountPage"
import NotesPage    from "../components/pages/NotesPage/NotesPage"

import AuthPage     from "../components/pages/AuthPage/AuthPage"
import LoginPage    from "../components/pages/LoginPage/LoginPage"


export const publicRoutes  = [
    {path: '/account',  element:<AccountPage/>, exact: true},
    {path: '/notes', 	element:<NotesPage/>,   exact: true},
]

export const privateRoutes = [
    {path: '/auth', 	element:<AuthPage/>,    exact: true},
    {path: '/login', 	element:<LoginPage/>,   exact: true},
]