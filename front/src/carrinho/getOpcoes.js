import React from 'react';
import adicionarCarrinho from './adicionarCarrinho';
import adicionarFrete from './adicionarFrete';
import btnFinalizarCompra from './btnFinalizarCompra/btnFinalizarCompra';
import listarProdutos from './listarProdutos';

const getOpcoes = (context, prod, index, values, optRadio) => {

    if (typeof prod.opcoes === "undefined") return;

    let app = context.props.navbar.props.app;
    
    const optRetirada = (e) => {
        //e.preventDefault();
        e.stopPropagation();

        prod.opcoesUsuario = {
            retirada: true,
            entrega: false
        }
        
        adicionarCarrinho(app, prod);

        //console.log(values)

        //prod.valorTotal
        values.valoresTotais[index] = prod.valorTotal;

        adicionarFrete(context, context.state.freteSedex[index], index);
        listarProdutos(context, values);
        btnFinalizarCompra(context, values);
    }

    const optEntrega = (e) => {
        e.stopPropagation();

        if (prod.opcoesUsuario.entrega) return;

        prod.opcoesUsuario = {
            retirada: false,
            entrega: true
        }

        adicionarCarrinho(app, prod);

        //console.log(values)
        //console.log(context)
        //console.log(prod);

        values.valoresTotais[index] = prod.valorTotal;
        
        adicionarFrete(context, context.state.freteSedex[index], index);
        listarProdutos(context, values);
        btnFinalizarCompra(context, values);
    }

    let opcoes = [];
    let dfc1 = false;
    let dfc2 = false;

    // usuario ainda nao mexeu nas opcoes
    if (typeof prod.opcoesUsuario === "undefined") {

        if (prod.opcoes.retirada && prod.opcoes.entrega) dfc2 = true;
        else if (prod.opcoes.retirada && !prod.opcoes.entrega) dfc1 = true;
        else if (!prod.opcoes.retirada && prod.opcoes.entrega) dfc2 = true;

    } else {
        
        if (prod.opcoesUsuario.retirada) dfc1 = true;
        else if (prod.opcoes.entrega) dfc2 = true;

    }

    if (prod.opcoes.retirada) {

        opcoes.push(
        <label className="radio">
            <input 
                className="mr-2"
                type="radio" 
                name={"optradio" + optRadio + prod._id} 
                onClick={optRetirada} 
                defaultChecked={dfc1}
            />
                Retirar na Loja
        </label>);
    }

    if (prod.opcoes.entrega) {

        opcoes.push(
        <label className="radio">
            <input 
                className="mr-2"
                type="radio" 
                name={"optradio" + optRadio + prod._id} 
                onClick={optEntrega} 
                defaultChecked={dfc2}
            />
                Entregar no Endereço
        </label>);
    }

    return(
        <>
        {opcoes}
        </>
    );
}

export default getOpcoes;