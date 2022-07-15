import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileDownload } from '@fortawesome/free-solid-svg-icons';
import cadastrarMultiplos from '../multiplos/cadastrarMultiplos';
import switchBtnBase from './switchBtnBase';
import { siteUrl } from '../../../config';

const cadastrarMultiplosModal = (context) => {

    const cadastrarMultiplosClick = (e) => {

        cadastrarMultiplos(context, e);
    }

    const multiProdutosHandlerInput = (e) => {

        context.setState({

            multiProdutosValue: e.target.value,
            multiProdutos: e.target.files[0]
        });
    }

    const btnHideShowRegras = () => {

        const setHideFunc = (hideShowRegras) => {

            context.setState({
                hideShowRegras: hideShowRegras
            });
        }

        return switchBtnBase(setHideFunc, context.state.hideShowRegras, "Esconder regras", "Mostrar regras");
    }

    const btnHideShowCadMultiExample = () => {

        const setHideFunc = (hideShowCadMultiExample) => {

            context.setState({
                hideShowCadMultiExample: hideShowCadMultiExample
            });
        }

        return switchBtnBase(setHideFunc, context.state.hideShowCadMultiExample, "Esconder exemplo", "Mostrar exemplo");
    }



    return (
    <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLongTitle">Como Funciona?</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <p>1 - Primeiro baixe e abra o arquivo de exemplo com bloco de notas ou outro 
                        editor de texto de sua preferencia: 
                        <a className="btn btn-info mt-3" href={siteUrl + "/exemplo-produtos.json"} download>
                            exemplo-produtos.json <FontAwesomeIcon icon={faFileDownload} style={{color:"white"}} />
                        </a> 
                    </p>
                    <p>2 - Edite o arquivo conforme os seus produtos e salve de acordo com as regras</p>
                    <p>3 - Regras:</p>
                    {btnHideShowRegras()}
                    <div className={" " + context.state.hideShowRegras} >
                        <p className="ml-4"> "nome" menor que 50 caracteres</p>
                        <p className="ml-4"> "marca" menor que 50 caracteres</p>
                        <p className="ml-4"> "valor" deve ter "R$" e no maximo 10 digitos</p>
                        <p className="ml-4"> "quantidade" maximo 10 digitos</p>
                        <p className="ml-4"> "descricao" maximo 1000 digitos </p>
                        <p className="ml-4"> "imagens" maximo 5
                        coloque um link para cada imagem. Formatos aceitos png, jpeg e jpg
                        Não precisa preencher as imagens agora, você pode editar o produto depois</p>

                        <p className="ml-4"> "categoria" exatamente igual a uma dessas opções: </p>

                        {context.state.categoriasModalExamples}

                        <p className="ml-4"> "cor" maximo 25 digitos </p>
                        <p className="ml-4"> "tipoTamanho" exatamente igual a uma dessas opções: </p>
                        <p className="ml-5"> "Centimetros"</p>
                        <p className="ml-5"> "Metros"</p>

                        <p className="ml-4"> "comprimento" maximo 6 digitos </p>
                        <p className="ml-4"> "largura" maximo 6 digitos </p>
                        <p className="ml-4"> "altura" maximo 6 digitos </p>
                        <p className="ml-4"> "peso" em Kg maximo 6 digitos </p>
                        <p className="ml-4"> "diametro" maximo 6 digitos </p>

                        <p className="ml-4"> "formato" da embalagem para entrega: </p>
                        <p className="ml-5"> 1 = Formato caixa/pacote </p>
                        <p className="ml-5"> 2 = Formato rolo/prisma </p>
                        <p className="ml-5"> 3 = Envelope (peso maximo 1kg) </p>

                        <p className="ml-4"> "opcoesMedida" igual uma dessas opções:</p>
                        <p className="ml-5"> "Nenhuma" "Voltagem" "TamanhoRoupas" "TamanhoCalcados"</p>

                        <p className="ml-4"> "voltagem" igual nenhuma uma ou mais dessas opções:</p>
                        <p className="ml-5"> ["110v", "220v", "Bivolt (manual)", "Bivolt (automatico)"]</p>

                        <p className="ml-4"> "tamanhoRoupas" igual nenhuma uma ou mais dessas opções:</p>
                        <p className="ml-5"> ["PP", "P", "M", "G", "GG", "XG", "XGG", "EG", "EGG"]</p>

                        <p className="ml-4"> "tamanhoCalcados" igual nenhuma uma ou mais dessas opções:</p>
                        <p className="ml-5"> [14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30
                        31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50]</p>

                        <p className="ml-4"> "opcoes" exatamente igual a uma dessas opções: </p>
                        <p className="ml-5"> retirada (para retirada na loja) "true" ou "false"</p>
                        <p className="ml-5"> entrega "true" ou "false"</p>
                    </div>

                    <p>4 - Aqui temos um exemplo de como cadastrar 3 produtos: {btnHideShowCadMultiExample()} </p>
                    
                    <div className={"jumbotron " + context.state.hideShowCadMultiExample }>
                        <p>[</p>
                            <p className="m-0 ml-3">{"{"}</p>
                                <p className="m-0 ml-4">{`"nome": "nome do produto 1",`}</p>
                                <p className="m-0 ml-4">{`"marca": "marca do produto 1",`}</p>
                                <p className="m-0 ml-4">{`"valor": "R$ 23,25",`}</p>
                                <p className="m-0 ml-4">{`"quantidade": "14",`}</p>
                                <p className="m-0 ml-4">{`"descricao": "descrição do produto",`}</p>
                                <p className="m-0 ml-4">{`"imagens": [`}</p>
                                    <p className="m-0 ml-5">{`"http://exemplo.com.br/imagem1.png",`}</p>
                                    <p className="m-0 ml-5">{`"http://exemplo.com.br/imagem2.png",`}</p>
                                    <p className="m-0 ml-5">{`"http://exemplo.com.br/imagem3.png",`}</p>
                                    <p className="m-0 ml-5">{`"http://exemplo.com.br/imagem4.png",`}</p>
                                    <p className="m-0 ml-5">{`"http://exemplo.com.br/imagem5.png",`}</p>
                                <p className="m-0 ml-4">{`],`}</p>
                                <p className="m-0 ml-4">{`"categoria": "Calçados",`}</p>
                                <p className="m-0 ml-4">{`"cor": "Verde",`}</p>
                                <p className="m-0 ml-4">{`"tipoTamanho": "Metros",`}</p>
                                <p className="m-0 ml-4">{`"comprimento": "25",`}</p>
                                <p className="m-0 ml-4">{`"largura": "38,4",`}</p>
                                <p className="m-0 ml-4">{`"altura": "47",`}</p>
                                <p className="m-0 ml-4">{`"peso": "20,7",`}</p>
                                <p className="m-0 ml-4">{`"diametro": "28,7",`}</p>
                                <p className="m-0 ml-4">{`"formato": 1,`}</p>
                                <p className="m-0 ml-4">{`"opcoesMedida": "Nenhuma",`}</p>
                                <p className="m-0 ml-4">{`"voltagem": [],`}</p>
                                <p className="m-0 ml-4">{`"tamanhoRoupas": [],`}</p>
                                <p className="m-0 ml-4">{`"tamanhoCalcados": [],`}</p>
                                <p className="m-0 ml-4">{`"opcoes": {`}</p>
                                    <p className="m-0 ml-5">{`"retirada": true,`}</p>
                                    <p className="m-0 ml-5">{`"entrega": true,`}</p>
                                <p className="m-0 ml-4">{`}`}</p>
                            <p className="m-0 ml-3">{"},"}</p>

                            <p className="m-0 ml-3">{"{"}</p>
                                <p className="m-0 ml-4">{`"nome": "nome do produto 2",`}</p>
                                <p className="m-0 ml-4">{`"marca": "marca do produto 2",`}</p>
                                <p className="m-0 ml-4">{`"valor": "R$ 34,00",`}</p>
                                <p className="m-0 ml-4">{`"quantidade": "129",`}</p>
                                <p className="m-0 ml-4">{`"descricao": "descrição do produto 2",`}</p>
                                <p className="m-0 ml-4">{`"imagens": [`}</p>
                                    <p className="m-0 ml-5">{`"http://exemplo.com.br/imagem6.png",`}</p>
                                    <p className="m-0 ml-5">{`"http://exemplo.com.br/imagem7.png",`}</p>
                                    <p className="m-0 ml-5">{`"http://exemplo.com.br/imagem8.png",`}</p>
                                    <p className="m-0 ml-5">{`"",`}</p>
                                    <p className="m-0 ml-5">{`"",`}</p>
                                <p className="m-0 ml-4">{`],`}</p>
                                <p className="m-0 ml-4">{`"categoria": "Moda",`}</p>
                                <p className="m-0 ml-4">{`"cor": "Azul",`}</p>
                                <p className="m-0 ml-4">{`"tipoTamanho": "Numero",`}</p>
                                <p className="m-0 ml-4">{`"comprimento": "70,4",`}</p>
                                <p className="m-0 ml-4">{`"largura": "40,5",`}</p>
                                <p className="m-0 ml-4">{`"altura": "112",`}</p>
                                <p className="m-0 ml-4">{`"peso": "50,7",`}</p>
                                <p className="m-0 ml-4">{`"diametro": "40,7",`}</p>
                                <p className="m-0 ml-4">{`"formato": 1,`}</p>
                                <p className="m-0 ml-4">{`"opcoesMedida": "Voltagem",`}</p>
                                <p className="m-0 ml-4">{`"voltagem": ["110v", "220v"],`}</p>
                                <p className="m-0 ml-4">{`"tamanhoRoupas": [],`}</p>
                                <p className="m-0 ml-4">{`"tamanhoCalcados": [],`}</p>
                                <p className="m-0 ml-4">{`"opcoes": {`}</p>
                                    <p className="m-0 ml-5">{`"retirada": true,`}</p>
                                    <p className="m-0 ml-5">{`"entrega": true,`}</p>
                                <p className="m-0 ml-4">{`}`}</p>
                            <p className="m-0 ml-3">{"},"}</p>

                            <p className="m-0 ml-3">{"{"}</p>
                                <p className="m-0 ml-4">{`"nome": "nome do produto 3",`}</p>
                                <p className="m-0 ml-4">{`"marca": "marca do produto 3",`}</p>
                                <p className="m-0 ml-4">{`"valor": "R$ 14,99",`}</p>
                                <p className="m-0 ml-4">{`"quantidade": "14",`}</p>
                                <p className="m-0 ml-4">{`"descricao": "descrição do produto 3",`}</p>
                                <p className="m-0 ml-4">{`"imagens": [`}</p>
                                    <p className="m-0 ml-5">{`"http://exemplo.com.br/imagem9.png",`}</p>
                                    <p className="m-0 ml-5">{`"",`}</p>
                                    <p className="m-0 ml-5">{`"",`}</p>
                                    <p className="m-0 ml-5">{`"",`}</p>
                                    <p className="m-0 ml-5">{`"",`}</p>
                                <p className="m-0 ml-4">{`],`}</p>
                                <p className="m-0 ml-4">{`"categoria": "Casa e Eletrodomésticos",`}</p>
                                <p className="m-0 ml-4">{`"categoria": "Calçados",`}</p>
                                <p className="m-0 ml-4">{`"cor": "Amarelo",`}</p>
                                <p className="m-0 ml-4">{`"tipoTamanho": "Letra",`}</p>
                                <p className="m-0 ml-4">{`"comprimento": "10",`}</p>
                                <p className="m-0 ml-4">{`"largura": "20",`}</p>
                                <p className="m-0 ml-4">{`"altura": "60",`}</p>
                                <p className="m-0 ml-4">{`"peso": "10",`}</p>
                                <p className="m-0 ml-4">{`"diametro": "10",`}</p>
                                <p className="m-0 ml-4">{`"formato": 2,`}</p>
                                <p className="m-0 ml-4">{`"opcoesMedida": "TamanhoRoupas",`}</p>
                                <p className="m-0 ml-4">{`"voltagem": [],`}</p>
                                <p className="m-0 ml-4">{`"tamanhoRoupas": ["P", "M", "G", "GG"],`}</p>
                                <p className="m-0 ml-4">{`"tamanhoCalcados": [],`}</p>
                                <p className="m-0 ml-4">{`"opcoes": {`}</p>
                                    <p className="m-0 ml-5">{`"retirada": true,`}</p>
                                    <p className="m-0 ml-5">{`"entrega": true,`}</p>
                                <p className="m-0 ml-4">{`}`}</p>
                            <p className="m-0 ml-3">{"}"}</p>
                        <p>]</p>
                    </div>

                    <p>5 - Envie o aquivo de volta no botão abaixo</p>
                </div>
                <div className="modal-footer">

                    <button 
                        type="button" 
                        className="btn btn-secondary" 
                        data-dismiss="modal">
                            Fechar
                    </button>

                    <input 
                        type="file" 
                        id="multiProdutos" 
                        onChange={multiProdutosHandlerInput} 
                        value={context.state.multiProdutosValue}
                    />
                    
                    <button 
                        type="button" 
                        className="btn btn-primary" 
                        onClick={cadastrarMultiplosClick}>
                            Cadastrar Multiplos 
                    </button>

                    {context.state.cadastroResult}

                </div>
            </div>
        </div>
    </div>
    );
}

export default cadastrarMultiplosModal;