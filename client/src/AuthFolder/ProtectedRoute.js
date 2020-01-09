import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Context } from '..Provider';

function ProtectedRoute(props) {
    const { token } = useContext(Context)
    const { component: Component, ...rest } = props

    return(
        token ?
            <Route {...rest} component={Component} />
            :
            <Redirect to='/login' />
    )
}

export default ProtectedRoute;