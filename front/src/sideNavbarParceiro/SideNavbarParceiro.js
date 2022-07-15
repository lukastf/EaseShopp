
import React from 'react';

import $ from 'jquery/dist/jquery.js';

import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faBars,
    faCog
} from '@fortawesome/free-solid-svg-icons';

import styles from './SideNavbarParceiro.module.css';

class sideNavbarParceiro extends React.Component {

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
                  dBtnBot: ""
              });
      
            } else if($(window).scrollTop() < 100) {
    
                this.setState({
                    scrollState: styles.sidebarScroll,
                    dBtnBot: " d-none"
                });
            }
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
                        <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="true" className="dropdown-toggle">Minhas Vendas</a>
                        <ul className="collapse list-unstyled show" id="homeSubmenu">
                            <li>
                                <a
                                target="_blank" 
                                rel="noopener noreferrer"
                                href="https://portal.orgcard.com.br/sindplus/CW_REL_LOGINCOMERCIO_TIPO_CARTAO.php?externo=s">
                                    <FontAwesomeIcon icon={faBars} />
                                    Extrato
                                </a>
                            </li>
                            <li>
                                <Link to={"/editarParceiro/" + this.props.navbar.props.app.state._id}>
                                    <FontAwesomeIcon icon={faCog} />
                                    Alterar Dados Pessoais
                                </Link>
                            </li>
                        </ul>
                    </li>
                    {/*<li>
                        <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="true" className="dropdown-toggle">Dúvidas</a>
                        <ul className="collapse list-unstyled show" id="pageSubmenu">
                            <li>
                                <Link to="/faleConosco">
                                    <FontAwesomeIcon icon={faPhoneAlt} />
                                    Fale Conosco
                                </Link>
                            </li>
                        </ul>
                    </li>*/}
                </ul>
                <button 
                    className={"btn btn-success " + this.state.btnHideShowSideBarBot + this.state.dBtnBot} 
                    onClick={this.hideSidebar}>{"<<"}
                </button>
            </nav>
        );
    }
}

export default sideNavbarParceiro;