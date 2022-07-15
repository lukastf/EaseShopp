import React from 'react';
import produtoProps from './produtoProps';
import uploadImage from './uploadImage';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import InputNome from '../inputs/Nome';
import InputValor from '../inputs/Valor';
import InputQuantidade from '../inputs/Quantidade';
import InputCategoria from '../inputs/Categoria';
import InputDescricao from '../inputs/Descricao';
import cadastrarMultiplosModal from './multiplos/cadastrarMultiplosModal';

import objProduto from '../../carrinho/objProduto';
import InputImagem from '../inputs/Imagem';

import Axios from 'axios';
import { serverUrl } from '../../config';
import InputCor from '../inputs/Cor';
import InputTamanho from '../inputs/Tamanho';
import InputOpcoes from '../inputs/Opcoes';
import setRoute from '../../navbar/routes/setRoute';
import InputMarca from '../inputs/Marca';
import InputOpcoesMedida from '../inputs/OpcoesMedida';

class CadastroProduto extends React.Component {

    constructor(props){

        super(props);

        this.obj = objProduto(false);
        this.title = <h1>Cadastro de Produto</h1>;
        this.produtoProps = produtoProps(this);

        if (props.editar) {

            this.obj = objProduto(props.produto);
            this.title = <h1>Edição de {this.obj.nome}</h1>;
        }

        this.state = {

            title: this.title,

            _id: this.obj._id,
            nome: this.obj.nome,
            marca: this.obj.marca,
            valor: this.obj.valor,
            quantidade: this.obj.quantidade,
            categoria: this.obj.categoria,
            cor: this.obj.cor,
            tipoTamanho: this.obj.tipoTamanho,
            comprimento:this.obj.comprimento,
            largura: this.obj.largura,
            altura: this.obj.altura,
            peso: this.obj.peso,
            diametro: this.obj.diametro,
            formato: this.obj.formato,
            opcoesMedida: this.obj.opcoesMedida,
            voltagem: this.obj.voltagem,
            tamanhoRoupas: this.obj.tamanhoRoupas,
            tamanhoCalcados: this.obj.tamanhoCalcados,
            descricao: this.obj.descricao,
            imagens: this.obj.imagens,
            opcoes: this.obj.opcoes,

            img: [null, null, null, null, null],
            imgValue: ["", "", "", "", ""],

            imgUrl: this.produtoProps.imgUrl,
            linkExterno: this.produtoProps.linkExterno,

            cadastroResult: "",
            buttonDisabled: "",

            hideShowRegras: "d-none",
            hideShowCadMultiExample: "d-none",

            multiProdutosValue: "",
            multiProdutos: null,

            categoriasModalExamples: [],

            hideCadCategoria1: "",
            hideCadCategoria2: "d-none"
        }
    }

    componentDidMount() {
        
        window.scrollTo(0, 0);
        this.getCategorias();
    }

    uploadImage = (e) => {
        uploadImage(this, e);
    }

    getCategorias = async () => {

        let categorias = [];
        let response = await Axios.get(serverUrl + "/produtos/categorias/listar");

        for (let i = 0; i < response.data.length; i++) {
            categorias.push(<p key={i} className="ml-5"> "{response.data[i].nome}" </p>);
        }

        this.setState({
            categoriasModalExamples: categorias
        });
    }

    cadastrarCategoria = (e) => {
        e.preventDefault();

        setRoute(this.props.navbar, "/cadastroCategoria");
    }

    hideCadCategoria = () => {

        this.setState({
            hideCadCategoria1: "d-none",
            hideCadCategoria2: "",
        })
    }

    render() {

        return (
            <form className="row col-12 mx-auto mt-4">
                <div className="col-12 text-center">
                    {this.state.title}
                </div>
                <div className="row form-group justify-content-center col-12">
                    <InputNome context={this} />
                </div>
                <div className="row form-group justify-content-center col-12">
                    <InputMarca context={this} />
                </div>
                <div className="row form-group justify-content-center col-12">
                    <InputValor context={this} />
                    <InputQuantidade context={this} />
                </div>
                <div className="row form-group justify-content-center col-12">
                    <InputCategoria context={this} />
                </div>
                <div className="row form-group justify-content-center col-12">
                    <button className={"btn btn-link " + this.state.hideCadCategoria1 } 
                    type="button" onClick={this.hideCadCategoria}
                    >O produto não se encaixa em nenhuma categoria? </button>
                    <button 
                        className={"btn btn-success " + this.state.hideCadCategoria2 }
                        type="button" 
                        onClick={this.cadastrarCategoria}
                    >Cadastrar Nova Categoria <FontAwesomeIcon icon={faPlus} style={{color:"white"}} /> </button>
                </div>
                <div className="row form-group justify-content-center col-12">
                    <InputOpcoesMedida context={this} />
                </div>
                <div className="row form-group justify-content-center col-12">
                    <InputCor context={this} />
                </div>
                <div className="row form-group justify-content-center col-12">
                    <InputTamanho context={this} />
                </div>
                <div className="row form-group justify-content-center col-12">
                    <InputDescricao context={this} />
                </div>
                <div className="row form-group justify-content-center col-12">
                    <div className=" text-center col-12">
                        <h3>Opções</h3>
                    </div>
                    <InputOpcoes context={this}/>
                </div>
                
                <div className="row col-12">
                    <div className="col-12 text-center">
                        <h3>Imagens</h3>
                        <p className="m-0"> Coloque o caminho da imagem apontando para um site externo </p>
                        <p className=""> ex: http://meusite/linkDaImagem.png ou selecione uma imagem </p>
                    </div>
                </div>

                <div className="row form-group justify-content-center col-12">
                    <div className="row justify-content-center col-12">
                        <InputImagem context={this} imagemId={0} />
                        <InputImagem context={this} imagemId={1} />
                        <InputImagem context={this} imagemId={2} />
                    </div>
                    <div className="row justify-content-center col-12">
                        <InputImagem context={this} imagemId={3} />
                        <InputImagem context={this} imagemId={4} />
                    </div>
                </div>

                {this.state.cadastroResult}

                <div className="row justify-content-center col-12 mt-3">

                    <button className="btn btn-success btn-lg m-4" type="button" onClick={this.uploadImage} 
                    disabled={this.state.buttonDisabled} >Cadastrar <FontAwesomeIcon icon={faPlus} style={{color:"white"}} /> </button>

                    <button 
                        className="btn btn-primary btn-lg m-4" type="button"
                        data-toggle="modal" data-target="#exampleModalCenter"
                    > Cadastrar Multiplos <FontAwesomeIcon icon={faPlus} style={{color:"white"}} /> </button>

                    {cadastrarMultiplosModal(this)}

                </div>
            </form>
        );
    }
}

export default CadastroProduto;