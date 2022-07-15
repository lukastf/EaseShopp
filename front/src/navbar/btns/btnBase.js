
import React from 'react';
import criarModificarBtn from './criarModificarBtn';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

import resetRoute from '../routes/resetRoute';
//import { currentDateTime } from '../../config';
import checkSessionTime from '../checkSessionTime';

import $ from 'jquery/dist/jquery.js';

const btnBase = (navbar, link, icon, nome, count = "", insertBegin = false, iconColor = "white", textColor = "white") => {

    let showBackTop = navbar.props.app.state.showBackTopFunc;

    const collapseNavbar = () => {
        $('.navbar .navbar-collapse').removeClass("show");
    }

    if (count !== "" && count !== 0) 
        count = <span className="badge badge-danger">{count}</span>;
    else 
        count = "";

    let btn = 
    <li key={link} className="nav-item">

        <Link className="nav-link" to={link}
        onClick={() => { 
            collapseNavbar(navbar); 
            checkSessionTime(navbar); 
            resetRoute(navbar); 
            showBackTop(true);
        }} >

            <FontAwesomeIcon icon={icon} style={{color:iconColor}} />
            {count}
            <p style={{color:textColor}}>{nome}</p>
        </Link>
    </li>;
    
    if (link.includes("http")) {

        btn = 
        <li key={link} className="nav-item">
            <a className="nav-link" href={link} target="_blank" rel="noopener noreferrer"
            onClick={() => { collapseNavbar(navbar); checkSessionTime(navbar); resetRoute(navbar); }} >

                <FontAwesomeIcon icon={icon} style={{color:"#c0ff00"}} />
                {count}
                <p style={{color:"#c0ff00"}}>{nome}</p>
            </a>
        </li>;
    }

    criarModificarBtn(navbar, btn, insertBegin);
}

export default btnBase;