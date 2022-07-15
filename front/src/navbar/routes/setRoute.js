
import React from 'react';
import {Redirect} from 'react-router-dom';

const setRoute = (navbar, link) => {

    navbar.setState({
        route: <Redirect to={link}></Redirect>
    });
}

export default setRoute;