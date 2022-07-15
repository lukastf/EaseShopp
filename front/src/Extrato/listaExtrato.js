
import React from 'react';

const listaExtrato = (extrato,produtosComprados) => {

    let temp = [];

    for (let i = 0; i < produtosComprados.length; i++) {

        let d = new Date(produtosComprados[i].dia);
        let data = d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear();

        temp.push(
          
                <tr>
                    <td>{data}</td>
                    <td>{produtosComprados[i].parceiro}</td>
                    <td>{produtosComprados[i].produto}</td>
                    <td>{produtosComprados[i].quantidade}</td>
                    <td>{produtosComprados[i].valorUnitario}</td>
                </tr>
                
        );

    }


    extrato.setState({
        extrato: temp
    });
}

export default listaExtrato;