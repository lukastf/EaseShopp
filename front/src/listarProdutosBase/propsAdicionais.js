import React from 'react';
import converterDinheiro from '../carrinho/converterDinheiro';
import checarOpcoesUsuario from './checarOpcoesUsuario';
import setDisplayProduto from './setDisplayProduto';

const propsAdicionais = (context, index) => {

    let title = context.props.title;
    let produto = context.state.produtos[index];
    let display = context.state.displayDetalhesProduto[index];

    let d = new Date(produto.dia);
    let data = d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear();

    let result = [];

    if (title === "Minhas Compras") {

        result.push(
            <p className="card-text"> Quantidade: {produto.quantidadeVendida}</p>,
            <p className="card-text"> Total: {converterDinheiro(produto.valor, produto.quantidadeVendida)}</p>,
            <p className="card-text"> Dia: {data}</p>
        );
    }

    if (title === "Minhas Vendas") {

        let ocultar = "Ocultar ";
        if (display === "d-none") ocultar = "";

        let opcoesUsuario = "Você deve Entregar no Endereço";

        if (checarOpcoesUsuario(produto) === "retirada")
            opcoesUsuario = "Cliente vai Retirar na Loja";

        result.push(
            <p className="card-text"> Quantidade: {produto.quantidadeVendida}</p>,
            <p className="card-text"> Total: {converterDinheiro(produto.valor, produto.quantidadeVendida)}</p>,
            <p className="card-text"> Dia: {data}</p>,
            
            <button
                type="button"
                className="btn btn-primary"
                onClick={
                    (e) => {

                        e.stopPropagation();
                        e.preventDefault();

                        setDisplayProduto(context, index);
                    }
                }
            >
                {ocultar} Detalhes
            </button>,
            <p className={"card-text mt-3 " + display}> Comprador: {produto.usuario.nome}</p>,
            <p className={"card-text mt-3 " + display}> Opções: {opcoesUsuario}</p>,
            <p className={"card-text " + display}> Celular: {produto.usuario.celular}</p>,
            <p className={"card-text " + display}> Whatsapp: {produto.usuario.whatsapp}</p>,
            <p className={"card-text " + display}> Cep: {produto.usuario.cep}</p>,
            <p className={"card-text " + display}> Estado: {produto.usuario.estado}</p>,
            <p className={"card-text " + display}> Cidade: {produto.usuario.cidade}</p>,
            <p className={"card-text " + display}> Endereco: {produto.usuario.endereco}</p>,
            <p className={"card-text " + display}> Numero: {produto.usuario.numeroEndereco}</p>,
            <p className={"card-text " + display}>
                <a class="btn btn-link" 
                onClick={
                    (e) => {
                        e.stopPropagation();
                        //e.preventDefault();
                    }
                }
                rel="noopener noreferrer" target="_blank"
                href="http://www2.correios.com.br/enderecador/encomendas/default.cfm"
                >
                    Preencher etiquetas no site dos correios
                </a>
            </p>
        );
    }

    if (title === "Meus Produtos") {

        result.push(
            <p className="card-text">Quantidade Estoque: {produto.quantidade}</p>
        );
    }

    return result;
}

export default propsAdicionais;