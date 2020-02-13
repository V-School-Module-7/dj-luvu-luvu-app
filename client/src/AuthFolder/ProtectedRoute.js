import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { ShowContext } from '../Components/Provider';

function ProtectedRoute(props) {
    const { token } = useContext(ShowContext)
    const { component: Component, ...rest } = props

    return(
        token ?
            <Route {...rest} component={Component} />
            :
            <Redirect to='/luvaluvaonly' />
    )
}

export default ProtectedRoute;