
import React from 'react';
import ListarProdutos from '../listarProdutosBase/ListarProdutos';

class MinhasCompras extends React.Component {

    render() {

        return(
            <div className="col-12">
                <ListarProdutos
                    title={"Minhas Compras"}
                    navbar={this.props.navbar}
                    route={"/usuario/"+ this.props.usuario._id + "/" + this.props.usuario.senha + "/compras"}
                />
            </div>
        );
    }

}

export default MinhasCompras;