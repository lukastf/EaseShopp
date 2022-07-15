

import btns from '../btns/btns';
import checarBtnsUnicos from '../btns/checarBtnsUnicos';
//import resetRoute from '../routes/resetRoute';
import routes from '../routes/routes';
import setRoute from '../routes/setRoute';
//import setRoute from '../routes/setRoute';
import React from 'react';

const navbarDeslogado = (navbar) => {

    navbar.setState({
        zap: <></>
    });

    navbar.state.btns = [];
    navbar.state.routes = [];

    //btns(navbar, "/");

    btns(navbar, "/entrarUsuario");
    routes(navbar, "", "/entrarUsuario");

    routes(navbar, "", "/preCadastro");
    btns(navbar, "/cadastroUsuario");

    btns(navbar, "/entrarParceiro");
    routes(navbar, "", "/entrarParceiro");

    btns(navbar, "/quemSomos");
    routes(navbar, "", "/quemSomos");

    routes(navbar, "", "/politica-de-cookies-easeshopp");
    routes(navbar, "", "/sejaUmParceiro");

    //routes(navbar, "", "/validarEmail");

    routes(navbar, "", "/");

    checarBtnsUnicos(navbar);

    //let arr = navbar.props.app.state.url.split("/");
    let arr = window.location.href.split("/");
    //let routeLink = arr.slice(-1)[0];

    /*console.log(routeLink);

    if (routeLink === "") {
        console.log("sexo");
        resetRoute(navbar);
        setRoute(navbar, "/");
    }*/

    let routeLinkFirst = arr[3];

    if (routeLinkFirst === "validarEmail") {

        let validarEmailObj = {

            email: arr[4],
            codigoVerificacao: arr[5]
        }

        setRoute(navbar, "/validarEmail");
        routes(navbar, validarEmailObj, "/validarEmail");
    }

}

export default navbarDeslogado;