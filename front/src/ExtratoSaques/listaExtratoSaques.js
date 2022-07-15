
import React from 'react';

const listaExtratoSaques = (extrato, saques) => {

    let temp = [];

    for (let i = 0; i < saques.length; i++) {

        let d = new Date(saques[i].dia);
        let data = d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear();

        temp.push(
          
                <tr>
                    <td>{data}</td>
                    <td>{saques[i].valorTotal}</td>
                </tr>
                
        );

    }


    extrato.setState({
        extrato: temp
    });
}

export default listaExtratoSaques;