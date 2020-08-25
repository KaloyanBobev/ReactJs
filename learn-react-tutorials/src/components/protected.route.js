import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import auth from './auth';

export const ProtectedRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={
                (props) => {
                    console.log(auth.isAutenticated());

                    if (auth.isAutenticated()) {
                        return <Component {...props} />;
                    } else {
                        return <Redirect to={
                            {
                                pathname: "/",
                                state: {
                                    from: props.location
                                }
                            }
                        } />
                    }
                }
            } />
    )
}