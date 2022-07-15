
import React from 'react';
import { serverUrl } from '../config';
import changeQtds from './changeQtds';
//import visualizarProduto from './visualizarProduto';
import BtnAdicionarRemoverCarrinho from '../btns/carrinho/BtnAdicionarRemoverCarrinho';
import getOpcoes from './getOpcoes';
import getFretes from './getFretes';
import axios from 'axios';

const getVendedor = async(produto) =>{

    let response = await axios.get(serverUrl + "/parceiros/" + produto._idParceiro);
    if (response == null) return ""
    return response.data.nome
}

const limitarDescricao = (descricao) => {

    let d = descricao

    if (descricao.length > 100) {

        d = d.substr(0, 100);
        d += "..."
    }

    return d

}

const opcoesMedida = (produto) => {

    if (produto.opcoesMedida === "Nenhum") return;
    if (produto.opcoesMedida === "Voltagem") return(
        <p><b>Voltagem:</b> {produto.voltagemUsuario}</p>
    );
    if (produto.opcoesMedida === "TamanhoRoupas") return(
        <p><b>Tamanho da Roupa:</b> {produto.tamanhoRoupaUsuario}</p>
    );
    if (produto.opcoesMedida === "TamanhoCalcados") return(
        <p><b>Tamanho do Calçado:</b> {produto.tamanhoCalcadoUsuario}</p>
    );
}

const opcoesMedidaMobile = (produto) => {

    if (produto.opcoesMedida === "Nenhum") return;
    if (produto.opcoesMedida === "Voltagem") return(
        <p className="card-text">Voltagem: {produto.voltagemUsuario}</p>
    );
    if (produto.opcoesMedida === "TamanhoRoupas") return(
        <p className="card-text">Tamanho da Roupa: {produto.tamanhoRoupaUsuario}</p>
    );
    if (produto.opcoesMedida === "TamanhoCalcados") return(
        <p className="card-text">Tamanho do Calçado: {produto.tamanhoCalcadoUsuario}</p>
    );
}

const listarProdutos = async (context, values) => {

    /*const visualizarProdutoF = (e) => {
        visualizarProduto(context, e);
    }*/

    const changeQtdsF = (e) => {
        changeQtds(context, e);
    }
    

    let carrinho = context.props.navbar.props.app.state.carrinho;
    let produtos = [];
    let produtosMobile = [];

    if (carrinho.length > 0) {

        for (let i=0; i < carrinho.length; i++) {

            if (typeof carrinho[i] === "undefined") continue;

            let imgSrc = serverUrl + "/images/" + carrinho[i].imagens[0];

            if (carrinho[i].imagensLinkExterno[0]) {
                
                imgSrc = carrinho[i].imagens[0];
            }

            let vendedor = await getVendedor(carrinho[i])

            produtos.push(
            <tr>
                <td style={{width: "10rem"}}>
                    <img className="card-img-top" 
                    style={{width:"10rem", height:"10rem"}}
                    src={ imgSrc } 
                    alt={carrinho[i].imagens[0]}/>
                </td>
                <td style={{width: "25rem"}}>
                    <h4><b>{carrinho[i].nome}</b></h4>
                    <p>{limitarDescricao(carrinho[i].descricao)}</p>
                    <p style={{marginBottom: "0rem"}}><b>Vendedor:</b> {vendedor}</p>
                    <p style={{marginBottom: "0rem"}}><b>Marca:</b> {carrinho[i].marca}</p>

                    {opcoesMedida(carrinho[i])}

                    {/*<p><b>Voltagem:</b> {carrinho[i].voltagemUsuario}</p>
                    <p><b>Tamanho roupa:</b> {carrinho[i].tamanhoRoupaUsuario}</p>
                    <p><b>Tamanho calçado:</b> {carrinho[i].tamanhoCalcadoUsuario}</p>*/}
                </td>
                <td style={{width: "10rem"}}>
                    <div onClick={changeQtdsF} className={" mt-3"}>

                        <p style={{textAlign:"center"}}><b>Quantidade:</b></p>
                        <input type="text" className={"form-control " + context.state.classError} 
                        id={"quantidade"+i} placeholder="Quantidade" maxLength="10"
                        onChange={changeQtdsF} value={values.qtds[i]} required />
                        {context.state.errors[i]}

                        <div className="mt-3">
                            <BtnAdicionarRemoverCarrinho
                                cardLink={"card-link"}
                                navbar={context.props.navbar}
                                produto={carrinho[i]}
                                btnSize={"btn-sm"}
                                remover={true}
                            />
                        </div>
                    </div>
                </td>
                <td style={{width: "15rem"}}>
                    <h4 style={{textAlign:"center", marginTop: "3rem"}}>
                        <b>
                            {
                                carrinho[i].valorTotal
                            }
                        </b>
                    </h4>
                    <p style={{textAlign:"center"}}>
                        ({carrinho[i].valor} unidade)
                    </p>
                </td>
                <td style={{width: "15rem", borderStyle: "groove", borderWidth: "0.02rem"}}>
                    {getFretes(context, carrinho[i], i, values, "Desktop")}
                    {getOpcoes(context, carrinho[i], i, values, "Desktop")}
                </td>
            </tr>
            );

            produtosMobile.push(
            <div key={i} className="card col-12 col-md-2 p-0 " id={carrinho[i]._id} >

                <img className="card-img-top" 
                src={ imgSrc } 
                alt={carrinho[i].imagens[0]} />

                <div className="card-body text-center">
                    <p className="card-text">Nome: {carrinho[i].nome}</p>
                    <p className="card-text">Marca: {carrinho[i].marca}</p>
                    {opcoesMedidaMobile(carrinho[i])}
                    <p className="card-text">Valor Unidade: {carrinho[i].valor}</p>
                    {getFretes(context, carrinho[i], i, values, "Mobile")}
                    {/*<p className="card-text">Valor Total: {values.valoresTotais[i]}</p>*/}
                    <p className="card-text">Valor Total: {carrinho[i].valorTotal}</p>
                    {getOpcoes(context, carrinho[i], i, values, "Mobile")}
                    <p className="card-text">Quantidade: {values.qtds[i]}</p>


                    <div onClick={changeQtdsF} className={" mt-3"}>
                        <input type="text" className={"form-control " + context.state.classError} 
                        id={"quantidade"+i} placeholder="Quantidade" maxLength="10"
                        onChange={changeQtdsF} value={values.qtds[i]} required />
                        {context.state.errors[i]}
                    </div>

                    <BtnAdicionarRemoverCarrinho
                        cardLink={"card-link"}
                        navbar={context.props.navbar}
                        produto={carrinho[i]}

                        remover={true}
                    />
                </div>
            </div>
            );
        }
    }

    context.setState({
        produtos: produtos,
        produtosMobile: produtosMobile
    });
}

export default listarProdutos;