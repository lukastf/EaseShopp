

import React from 'react';
import ListarProdutos from '../listarProdutosBase/ListarProdutos';

class Loja extends React.Component {

    render() {

        return(

            <div className="col-12">

                <div id="carrossel" className="row carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100" src={ "Banner_1.jpg" } alt="" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={ "Banner_2.jpg" } alt="" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={ "Banner_3.jpg" } alt="" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={ "Banner_4.jpg" } alt="" />
                        </div>
                        {/*<div className="carousel-item">
                            <img className="d-block w-100" src={ "https://http2.mlstatic.com/storage/splinter-admin/1586199151106-home-slider_desktop.jpg" } alt="" />
                        </div>*/}
                    </div>
                    <a className="carousel-control-prev" href="#carrossel" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carrossel" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>

                <ListarProdutos
                    title={""}
                    navbar={this.props.navbar}
                    route={""}
                />

            </div>
        );
    }

}

export default Loja;