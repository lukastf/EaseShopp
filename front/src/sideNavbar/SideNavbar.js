
import React from 'react';

import $ from 'jquery/dist/jquery.js';

import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    //faDollarSign,
    faBars, 
    //faLock, 
    faCog, 
    faPhoneAlt, 
    faUser
} from '@fortawesome/free-solid-svg-icons';

import styles from './SideNavbar.module.css';

class sideNavbar extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            scrollState: styles.sidebarScroll,
            userId: "",
            hideSidebar: "",
            btnHideShowSideBar: styles.btnHideShowSideBar,
            btnHideShowSideBarBot: styles.btnHideShowSideBarBot,
            dBtnBot: " d-none"
        }
    }

    componentDidMount () {
        $(document).scroll(() => {
      
            if($(window).scrollTop() > 100) {
      
              this.setState({
                scrollState: "",
                //btnHideShowSideBar: styles.btnHideShowSideBarBot
                dBtnBot: ""
              });
      
            } else if($(window).scrollTop() < 100) {
    
                this.setState({
                    scrollState: styles.sidebarScroll,
                    //btnHideShowSideBar: styles.btnHideShowSideBar
                    dBtnBot: " d-none"
                });

            } /*else if($(window).scrollTop() > 200) {
    
                this.setState({
                    btnHideShowSideBar: styles.btnHideShowSideBarBot
                });
            }*/
        });
    }

    hideSidebar = () => {

        let hideSidebar = this.state.hideSidebar;
        let btnHideShowSideBar = this.state.btnHideShowSideBar;
        let btnHideShowSideBarBot = this.state.btnHideShowSideBarBot;

        if (hideSidebar === "") {

            hideSidebar = styles.hideSidebar;
            btnHideShowSideBar = styles.btnHideShowSideBarHide;
            btnHideShowSideBarBot = styles.btnHideShowSideBarBotHide;

        }
        else if (hideSidebar === styles.hideSidebar) {

            hideSidebar = "";
            btnHideShowSideBar = styles.btnHideShowSideBar;
            btnHideShowSideBarBot = styles.btnHideShowSideBarBot;
        }

        this.setState({
            hideSidebar: hideSidebar,
            btnHideShowSideBar: btnHideShowSideBar,
            btnHideShowSideBarBot: btnHideShowSideBarBot
        });
    }

    render(){
        return(
            <nav className={styles.sidebar + " " + this.state.scrollState + " " + this.state.hideSidebar}>
                <button 
                    className={"btn btn-success " + this.state.btnHideShowSideBar} 
                    onClick={this.hideSidebar}>{"<<"}
                </button>
                <ul className="list-unstyled components">
                    <li className="active">
                        <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="true" className="dropdown-toggle">Meu Cartão</a>
                        <ul className="collapse list-unstyled show" id="homeSubmenu">
                            {/*<li>
                                <Link to="">
                                    <FontAwesomeIcon icon={faDollarSign} />
                                    Adicionar Recarga
                                </Link>
                            </li>*/}
                            <li>
                                <Link to="/contaResgate">
                                    <FontAwesomeIcon icon={faUser} />
                                    Conta de Resgate
                                </Link>
                            </li>
                            <li>
                                <Link to="/extrato">
                                    <FontAwesomeIcon icon={faBars} />
                                    Extrato
                                </Link>
                            </li>
                            <li>
                                <Link to="/extratoSaques">
                                    <FontAwesomeIcon icon={faBars} />
                                    Extrato dos Resgates
                                </Link>
                            </li>
                            {/*<li>
                                <Link to="">
                                    <FontAwesomeIcon icon={faLock} />
                                    Alterar Senha Cartão
                                </Link>
                            </li>*/}
                            <li>
                                <Link to={"/editarUsuario/" + this.props.navbar.props.app.state._id}>
                                    <FontAwesomeIcon icon={faCog} />
                                    Alterar Dados Pessoais
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="true" className="dropdown-toggle">Dúvidas</a>
                        <ul className="collapse list-unstyled show" id="pageSubmenu">
                            <li>
                                <Link to="/faleConosco">
                                    <FontAwesomeIcon icon={faPhoneAlt} />
                                    Fale Conosco
                                </Link>
                            </li>
                        </ul>
                    </li>
                </ul>
                <button 
                    className={"btn btn-success " + this.state.btnHideShowSideBarBot + this.state.dBtnBot} 
                    onClick={this.hideSidebar}>{"<<"}
                </button>
            </nav>
        );
    }
}

export default sideNavbar;