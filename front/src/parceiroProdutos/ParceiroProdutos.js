import React from 'react';
import ListarProdutos from '../listarProdutosBase/ListarProdutos';

class ParceiroProdutos extends React.Component {

    render() {

        return(
            <div className="col-12">

                <ListarProdutos
                    title={"Produtos de " + this.props.parceiro.nome}
                    navbar={this.props.navbar}
                    route={"/parceiro/"+ this.props.parceiro._id}
                />
            </div>
        );
    }

}

export default ParceiroProdutos;