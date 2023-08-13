import AccountPage  from "../components/pages/AccountPage/AccountPage"
import AuthPage     from "../components/pages/AuthPage/AuthPage"
import NotesPage    from "../components/pages/NotesPage/NotesPage"


export const publicRoutes  = [
    {path: '/account', 	element: <AccountPage/>,   exact: true},
    {path: '/notes', 	element: <NotesPage/>,     exact: true},
]

export const privateRoutes = [
    {path: '/auth', 	element: <AuthPage/>,      exact: true},
]