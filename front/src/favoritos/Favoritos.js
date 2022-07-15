import React from 'react';
import { resetFavoritosCount } from '../navbar/btns/btnFavoritos';
import getFavoritos from '../usuario/getFavoritos';
import listarProdutos from './listarProdutos';

class Favoritos extends React.Component {

    constructor(props) {

        super(props);

        this.state = {

            produtos: []
        }
    }

    checar = async () => {

        let fav = this.props.navbar.props.app.state.favoritos;
        let responseFavoritos = this.props.navbar.props.app.state.responseFavoritos;

        //console.log(responseFavoritos);

        if (fav.length < 1) {

            if (responseFavoritos.length > 0) {

                fav = await getFavoritos(responseFavoritos)
                this.props.navbar.props.app.setState({
                    favoritos: fav
                });

                listarProdutos(this);
            }
            
        }
    }

    componentDidMount() {

        this.checar();

        resetFavoritosCount(this.props.navbar);
        listarProdutos(this);
    }
 
    render() {

        return (
            <div className="col-12 mt-4">
                <div className="col-12">
                    <h1 className="text-center">Favoritos</h1>
                </div>
                <div className="row justify-content-center mt-5">
                    {this.state.produtos}
                </div>
            </div>
        );
    }
}

export default Favoritos;