
import React from 'react';

import {
    Route,
    Redirect
  } from "react-router-dom";

export const PrivateRouteCadastroUsuario = ({ children, ...rest }) => {
    return (
    <Route
        {...rest}
        render={({ location }) =>
        rest.cadastroPermission ? (
            children
        ) : (
            <Redirect
            to={{
                pathname: "/preCadastro",
                state: { from: location }
            }}
            />
        )
        }
    />
    );
}