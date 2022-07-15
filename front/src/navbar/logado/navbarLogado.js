import welcomeMsg from './welcomeMsg';
import btns from '../btns/btns';
import routes from '../routes/routes';
import { redirectProdutoBaseUrl } from '../redirectProduto';
import { redirectParceiroBaseUrl } from '../redirectParceiro';
import checarBtnsUnicos from '../btns/checarBtnsUnicos';
import setRoute from '../routes/setRoute';
import React from 'react';

const navbarLogado = (navbar, route) => {

    navbar.setState({
        zap: <>
        <a style={{width: "3rem"}} href="https://wa.me/5517982092066" target="_blank" rel="noopener noreferrer">
            <img src="WhatsApp.png" alt="WhatsApp" style={{width:"3rem", height:"3rem"}}/>
            <span style={{color: "white", width: "6rem", display: "inline-block"}}>Fale conosco</span>
        </a>
        </>
    });

    navbar.state.btns = [];
    navbar.state.routes = [];

    btns(navbar, "/conta");
    routes(navbar, navbar.props.app.state, "/conta");

    //parceiro 
    if (localStorage.lojaVirtualEmail !== "undefined" && localStorage.lojaVirtualCodigo !== "undefined") {

        welcomeMsg(navbar, "parceiro");

        if (navbar.props.app.state.admin  === 1) {

            
            btns(navbar, "/resgates");
            routes(navbar, "", "/resgates");
            routes(navbar, "", "/produtosComprados");

            btns(navbar, "/usuarios");
            btns(navbar, "/parceiros");
            btns(navbar, "/indicacoes");
            btns(navbar, "/cadastroUsuario");
            btns(navbar, "/cadastroParceiro");

            routes(navbar, "", "/usuarios");
            routes(navbar, "", "/indicacoes");
            routes(navbar, "", "/parceiros");
            routes(navbar, navbar.props.app.state, "/cadastroUsuarioAdmin");
            routes(navbar, navbar.props.app.state, "/cadastroParceiro");

            routes(navbar, navbar.props.app.state, "/editarUsuario");

            routes(navbar, "", "/solicitacoesConvenio");
            routes(navbar, "", "/listaFaleConosco");
            routes(navbar, "", "/listaEsqueciMinhaSenha");

            //routes(navbar, "", "/cadastroCategoria");
            routes(navbar, "", "/editarCategoria");
            routes(navbar, "", "/listarCategorias");
            routes(navbar, "", "/solicitacoesParceiros");
        }

        routes(navbar, "", "/cadastroCategoria");

        routes(navbar, navbar.props.app.state, "/editarParceiro");
        routes(navbar, "", "/cadastroProduto");
        redirectProdutoBaseUrl(navbar, "editarProduto");
        redirectProdutoBaseUrl(navbar, "removerProduto");
        routes(navbar, navbar.props.app.state, "/minhasVendas");
        routes(navbar, navbar.props.app.state, "/meusProdutos");
    }

    // usuario
    else if ( localStorage.lojaVirtualEmail !== "undefined") {

        btns(navbar, "/carrinho");
        routes(navbar, "" , "/carrinho");

        btns(navbar, "/favoritos");
        routes(navbar, "", "/favoritos");
        
        btns(navbar, "/comoComprar");
        routes(navbar, "", "/comoComprar");

        btns(navbar, "/quemSomos");
        routes(navbar, "", "/quemSomos");

        welcomeMsg(navbar, "");
        routes(navbar, "", "/extrato");
        routes(navbar, "", "/extratoSaques");
        routes(navbar, "", "/faleConosco");
        routes(navbar, "", "/contaResgate");
        routes(navbar, "", "/sacar");
        routes(navbar, navbar.props.app.state, "/minhasCompras");
        routes(navbar, navbar.props.app.state, "/editarUsuario");

        btns(navbar, "/baixarApp");
        routes(navbar, "", "/baixarApp");
    }

    routes(navbar, "", "/mensagem");

    redirectProdutoBaseUrl(navbar, "visualizarProduto");
    redirectParceiroBaseUrl(navbar, "visualizarParceiro");

    btns(navbar, "/loja");
    routes(navbar, "", "/loja");

    checarBtnsUnicos(navbar);

    //let arr = navbar.props.app.state.url.split("/");
    let arr = window.location.href.split("/");
    let routeLink = arr.slice(-1)[0];
    let routeLinkFirst = arr[3];

    if (
        (route === "/parceiro" && routeLink === "entrarParceiro") ||
        (route === "/parceiro" && routeLink === "entrarUsuario") ||
        (routeLink === "entrarParceiro")
        //(route === "/parceiro" /*&& routeLink === ""*/)
    ) {
        setRoute(navbar, "/conta");
        return;
    }

    if (
        (route === "/usuario" && routeLink === "entrarUsuario") ||
        (routeLink === "entrarUsuario")
        //(route === "/usuario" /*&& routeLink === ""*/)
    ) {
        setRoute(navbar, "/loja");
        return;
    }

    if (routeLink === "politica-de-cookies-easeshopp") {

        setRoute(navbar, "/politica-de-cookies-easeshopp");
        routes(navbar, "", "/politica-de-cookies-easeshopp");
        return;
    }

    if (routeLink === "cadastroUsuario") {

        setRoute(navbar, "/cadastroUsuario");
        return;
    }

    if (routeLinkFirst === "validarEmail") {

        let validarEmailObj = {

            email: arr[4],
            codigoVerificacao: arr[5]
        }

        setRoute(navbar, "/validarEmail");
        routes(navbar, validarEmailObj, "/validarEmail");
        return;
    }


    if (routeLink === "") {
        
        setRoute(navbar, "/loja");
        return;
    }
}

export default navbarLogado;