import React from 'react';
import ListarProdutos from '../listarProdutosBase/ListarProdutos';

class MeusProdutos extends React.Component {

    render() {

        return(
            <div className="col-12">

                <ListarProdutos
                    title={"Meus Produtos"}
                    navbar={this.props.navbar}
                    route={"/parceiro/"+ this.props.parceiro._id}
                />
            </div>
        );
    }

}

export default MeusProdutos;