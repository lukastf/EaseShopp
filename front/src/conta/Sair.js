import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

import sairUsuario from '../usuario/sairUsuario';
import navbarDeslogado from '../navbar/deslogado/navbarDeslogado';
import setRoute from '../navbar/routes/setRoute';

class Sair extends React.Component {

    sair = (e) => {
        
        e.preventDefault();

        sairUsuario(this.props.navbar.props.app);
        navbarDeslogado(this.props.navbar);
        setRoute(this.props.navbar, "/entrarUsuario");
    }


    render() {
        return (
            <button 
                type="button" 
                onClick={this.sair} 
                className="btn btn-danger btn-lg">
                    Sair <FontAwesomeIcon icon={faSignOutAlt} style={{color:"white"}} />
            </button>  
        );
    }

}

export default Sair;