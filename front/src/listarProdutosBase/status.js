import React from 'react';
import { serverUrl } from '../config';
import listaProdutoss from "./listaProdutos";
import axios from 'axios';
import setDisplayCodigoRastreio from './setDisplayCodigoRastreio';
import setDisplayEnderecoRetirada from './setDisplayEnderecoRetirada';
import checarOpcoesUsuario from './checarOpcoesUsuario';

const status = (context, index) => {

    // atribuições iniciais

    let title = context.props.title;
    let produto = context.state.produtos[index];
    let parceiro = context.props.navbar.props.app.state;

    let st = context.state.status;
    let cr = context.state.codigoRastreio;
    let er = context.state.enderecoRetirada;

    let dcr = context.state.displayCodigoRastreio;
    let der = context.state.displayEnderecoRetirada;

    if (typeof st[index] === "undefined" || typeof cr[index] === "undefined" || typeof er[index] === "undefined") {

        st[index] = produto.status;
        cr[index] = produto.codigoRastreio;
        er[index] = produto.enderecoRetirada;

        if(typeof st[index] === "undefined") st[index] = ""; 
        if(typeof cr[index] === "undefined") cr[index] = "";
        if(typeof er[index] === "undefined") er[index] = "";

        context.setState({
            status: st,
            codigoRastreio: cr,
            enderecoRetirada: er
        });

        listaProdutoss(context);
    }

    if (title === "Minhas Compras") {

        let opcoesUsuario = <p className="card-text"> Codigo de Rastreio: {produto.codigoRastreio}</p>

        if (checarOpcoesUsuario(produto) === "retirada") 
            opcoesUsuario = <p className="card-text"> Endereco Retirada: {produto.enderecoRetirada}</p>

        return (
            <>
            <p className="card-text"> Status: {produto.status}</p>
            {opcoesUsuario}
            </>
        );
    }

    if (title === "Minhas Vendas") {

        if (typeof dcr[index] === "undefined") setDisplayCodigoRastreio(context, index, "d-none");
        if (typeof der[index] === "undefined") setDisplayEnderecoRetirada(context, index, "d-none");
        if (st[index] === "Enviado" && dcr[index] === "d-none") setDisplayCodigoRastreio(context, index, "");
        if (st[index] === "Aguardando Retirada" && der[index] === "d-none") setDisplayEnderecoRetirada(context, index, "");

        const mudarStatus = (e) => {

            let v = e.target.value;
            let status = context.state.status;

            status[index] = v;

            context.setState({ status: status });

            if (v === "Enviado") setDisplayCodigoRastreio(context, index, "");
            else setDisplayCodigoRastreio(context, index, "d-none");

            if (v === "Aguardando Retirada") setDisplayEnderecoRetirada(context, index, "");
            else setDisplayEnderecoRetirada(context, index, "d-none");

            axios.put(serverUrl + "/produtos/status/"+ produto._idProdutoComprado + "/" + parceiro._id, {
                senha: parceiro.senha, 
                status: v
            }).then((response) => {}).catch((error) => {
                console.log(error);
            });
        }

        const mudarCodigoRastreio = (e) => {

            let cod = e.target.value;
            //let codigoRastreio = context.state.codigoRastreio;

            cr[index] = cod;

            context.setState({
                codigoRastreio: cr
            });

            axios.put(serverUrl + "/produtos/codigoRastreio/"+ produto._idProdutoComprado + "/" + parceiro._id, {
                senha: parceiro.senha, 
                codigoRastreio: cod
            }).then((response) => {}).catch((error) => {
                console.log(error);
            });

            listaProdutoss(context);
        }

        const mudarEnderecoRetirada = (e) => {

            let endereco = e.target.value;
            //let enderecoRetirada = context.state.enderecoRetirada;

            er[index] = endereco;

            context.setState({
                enderecoRetirada: er
            });

            axios.put(serverUrl + "/produtos/enderecoRetirada/"+ produto._idProdutoComprado + "/" + parceiro._id, {
                senha: parceiro.senha,
                enderecoRetirada: endereco
            }).then((response) => {}).catch((error) => {
                console.log(error);
            });

            listaProdutoss(context);
        }

        let opcoesUsuario = <option value="Enviado">Enviado</option>;

        if (checarOpcoesUsuario(produto) === "retirada") 
            opcoesUsuario = <option value="Aguardando Retirada">Aguardando Retirada</option>;   

        return (
        <>
            <p className="card-text">Status:</p>
            
            <select 
                className={"mb-3 form-control mt-4"} 
                onChange={mudarStatus} 
                value={context.state.status[index]} 
                onClick={
                    (e) => {
                        e.stopPropagation();
                        e.preventDefault();
                    }
                }
            >
                <option value="Aguardando Confirmação">Aguardando Confirmação</option>
                <option value="Confirmado">Confirmado</option>
                {opcoesUsuario}
                <option value="Finalizado">Finalizado</option>
            </select>

            <input 
                type="text" 
                className={"form-control " + context.state.displayCodigoRastreio[index]}
                placeholder="Codigo de Rastreio" 
                maxLength="100"
                onClick={
                    (e) => {
                        e.stopPropagation();
                        e.preventDefault();
                    }
                }
                onChange={mudarCodigoRastreio} 
                value={context.state.codigoRastreio[index]}  
            />

            <input 
                type="text" 
                className={"form-control " + context.state.displayEnderecoRetirada[index]}
                placeholder="Endereço de Retirada" 
                maxLength="100"
                onClick={
                    (e) => {
                        e.stopPropagation();
                        e.preventDefault();
                    }
                }
                onChange={mudarEnderecoRetirada} 
                value={context.state.enderecoRetirada[index]}  
            />
            
        </>
        );
    }
}

export default status;