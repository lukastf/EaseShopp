import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Link,
} from "react-router-dom";

import getSession from './getSession';
import navbarDeslogado from './deslogado/navbarDeslogado';
import getRoutes from './routes/getRoutes';
import resetRoute from './routes/resetRoute';
import CookieConsent from '../cookieConsent/CookieConsent';


class Navbar extends React.Component {

    constructor(props) {

        super(props);

        // initial state
        this.state = {

            route: "",
            btns: [],
            routes: [],

            welcomeMsg: "",

            favoritosCount: 0,
            carrinhoCount: 0,
            zap: <></>
        }
    }

    componentDidMount() {
        navbarDeslogado(this);
        getSession(this);
    }

    checkHomeLogado = () => {

        if (localStorage.lojaVirtualEmail === "undefined" || this.props.app.state.email === "") return "/";

        return "/loja";
    }

    render() {
        return (
            <Router>
                <nav className="navbar navbar-expand-lg navbar-light navbar-bg justify-content-center">    

                    <Link className="navbar-brand col-1 col-md-1 mr-auto" to={this.checkHomeLogado()} onClick={() => { resetRoute(this); }}>
                        <img src="/logo/EaseShopp_Logo_Branco.svg" alt="Loja Logo" style={{width:"13rem", height:"7rem"}} />
                    </Link>

                    {this.state.zap}

                    
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>              
                    
                    <div className="collapse navbar-collapse col-md-9 ml-5" id="navbarToggler">
                        
                        <ul className="navbar-nav ml-auto">

                            {this.state.btns}

                        </ul>

                    </div>
                    <CookieConsent navbar={this} />
                </nav>

                {this.state.route}

                <Switch>
                    {getRoutes(this)}
                </Switch>
            </Router>
            
        );
    }
}

export default Navbar;