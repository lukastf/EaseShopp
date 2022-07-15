
import React from 'react';
import ListarProdutos from '../listarProdutosBase/ListarProdutos';

class MinhasVendas extends React.Component {

    render() {

        return(
            <div className="col-12">
                <ListarProdutos
                    title={"Minhas Vendas"}
                    navbar={this.props.navbar}
                    route={"/parceiro/"+ this.props.parceiro._id + "/" + this.props.parceiro.senha + "/vendas"}
                />
            </div>
        );
    }

}

export default MinhasVendas;