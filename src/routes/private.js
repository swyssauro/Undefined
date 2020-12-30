import React from 'react'
import { Route, Redirect } from 'react-router'

const PrivateRoute = props => {
    const isLogged = !!localStorage.getItem('crypto')
    return isLogged ? <Route {...props}/> : <Redirect to="/sign-in"/>
}

export default PrivateRoute