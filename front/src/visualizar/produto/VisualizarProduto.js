import React from 'react';

import checarQuantidade from './layout/checarQuantidade';
//import editarRemoverProduto from './admin/editarRemoverProduto';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowCircleLeft,
  faArrowCircleRight,
  faTshirt
} from '@fortawesome/free-solid-svg-icons';

import styles from './VisualizarProduto.module.css';
import imgLinkType from './layout/imgLinkType';
import selecionarCategoria from './layout/selecionarCategoria';
import changeImageView from './layout/changeImageView';
import seta from './layout/seta';
import Axios from 'axios';
import { serverUrl } from '../../config';
import routes from '../../navbar/routes/routes';
import setRoute from '../../navbar/routes/setRoute';

//import btnAdicionarRemoverCarrinho from '../../favoritos/btnAdicionarRemoverCarrinho';
import BtnAdicionarRemoverCarrinho from '../../btns/carrinho/BtnAdicionarRemoverCarrinho';
import objProduto from '../../carrinho/objProduto';
import BtnAdicionarRemoverFavoritos from '../../btns/favoritos/BtnAdicionarRemoverFavoritos';
import BtnComprar from '../../btns/comprar/BtnComprar';
import BtnEditar from '../../btns/editar/BtnEditar';
import BtnRemover from '../../btns/remover/BtnRemover';
import calcularFrete from '../../usuario/calcularFrete';
import checkTamanhoCalcados from './checkTamanhoCalcados';
import checkVoltagem from './checkVoltagem';
import checkTamanhoRoupas from './checkTamanhoRoupas';
//import { cnpjMask } from '../../../../back/classes/masks';

class VisualizarProduto extends React.Component {

    constructor(props){

        super(props);

        this.state = {

            hide: "",

            valor: this.props.produto.valor,
            quantidadeTotal: this.props.produto.quantidadeTotal,
            quantidadeCarrinho: this.props.produto.quantidadeCarrinho,

            voltagemUsuario: "",
            tamanhoRoupaUsuario: "",
            tamanhoCalcadoUsuario: "",
            //miau: false,

            error: "",

            inputQtd: "",

            imgSrc: ["","","","",""],
            displayImg: ["","","","",""],

            categoria: "",
            categoriaMobile: "",

            imgSrcSelected: "",
            parceiro: "",
            fretePac:"Não foi possivel calcular o frete",
            freteSedex:"Não foi possivel calcular o frete",

            prazoEntregaPac: "",
            prazoEntregaSedex: ""
        }
    }

    componentDidMount() {

        window.scrollTo(0, 0);

        checarQuantidade(this);
        imgLinkType(this);
        selecionarCategoria(this);

        this.getParceiro();
    }

    changeImageView = (e) => {
        changeImageView(this, e);
    }

    setaLeft = (e) => {

        e.preventDefault();

        seta(this, -1);
    }

    setaRight = (e) => {

        e.preventDefault();

        seta(this, +1);
    }

    setFretePac = (frete) => {
        
        this.setState({
            fretePac: frete.valor,
            prazoEntregaPac: frete.prazoEntrega
        })
    }

    setFreteSedex = (frete) => {
        
        this.setState({
            freteSedex: frete.valor,
            prazoEntregaSedex: frete.prazoEntrega
        })
    }

    getParceiro = async () => {

        let response = await Axios.get(serverUrl + "/parceiros/" + this.props.produto._idParceiro);

        calcularFrete({
            usuario: this.props.navbar.props.app.state, 
            setFretePac: this.setFretePac,
            setFreteSedex: this.setFreteSedex,
            produto: this.props.produto,
            parceiro: response.data
        });

        this.setState({
            parceiro: response.data
        });
    }

    visualizarParceiro = async () => {

        setRoute(this.props.navbar, "/visualizarParceiro/"+this.state.parceiro._id);
        routes(this.props.navbar, this.state.parceiro, "/visualizarParceiro");
    }

    visualizarProdutos = () => {

        setRoute(this.props.navbar, "/parceiroProdutos/"+this.state.parceiro._id);
        routes(this.props.navbar, this.state.parceiro, "/parceiroProdutos");
    }

    getProduto = () => {

        let produto = this.props.produto;

        let obj = objProduto(produto);

        obj.valorTotal = this.state.valor;
        obj.quantidadeTotal = this.state.quantidadeTotal;
        obj.quantidadeCarrinho = this.state.quantidadeCarrinho;

        obj.voltagemUsuario = this.state.voltagemUsuario;
        obj.tamanhoRoupaUsuario = this.state.tamanhoRoupaUsuario;
        obj.tamanhoCalcadoUsuario = this.state.tamanhoCalcadoUsuario;

        return obj;
    }

    pegarCaracteristicas = () => {

        let medida = " cm";
        if (this.props.produto.tipoTamanho === "Metros") medida = " m";
        let caracteristicas = [];

        //if (this.props.produto.tipoTamanho === "Centimetros" || this.props.produto.tipoTamanho === "Metros") {

            caracteristicas.push(
                <p key={0} style={{fontSize: "1.2rem", marginBottom: "0"}}>Peso {this.props.produto.peso} Kg</p>,
                <p key={1} style={{fontSize: "1.2rem", marginBottom: "0"}}>Comprimento {this.props.produto.comprimento + medida} </p>,
                <p key={2} style={{fontSize: "1.2rem", marginBottom: "0"}}>Largura {this.props.produto.largura + medida} </p>,
                <p key={3} style={{fontSize: "1.2rem", marginBottom: "0"}}>Altura {this.props.produto.altura + medida} </p>,
                <p key={4} style={{fontSize: "1.2rem", marginBottom: "0"}}>Diametro {this.props.produto.diametro + medida} </p>
            );
        //}

        if (this.props.produto.tipoTamanho === "Numero") {
            caracteristicas.push(
                <p key={5} style={{fontSize: "1.7rem"}}>Tamanho {this.props.produto.numero} </p>
            )
        }

        if (this.props.produto.tipoTamanho === "Letra") {
            caracteristicas.push(
                <p key={6} style={{fontSize: "1.7rem"}}>Tamanho {this.props.produto.letra} </p>
            )
        }

        return caracteristicas;
    }

    pegarOpcoes = () => {

        if (typeof this.props.produto.opcoes === "undefined") return;

        let retirada = "Sim";
        let entrega = "Sim";

        if (!this.props.produto.opcoes.retirada) retirada = "Não";
        if (!this.props.produto.opcoes.entrega) entrega = "Não";

        return(
            <>
                <p style={{fontSize: "1.4rem", marginBottom: 0}}> Retirada: {retirada} </p>
                <p style={{fontSize: "1.4rem"}}> Entrega: {entrega} </p>
            </>
        )
    }

    freteMsg = () => {

        if (this.props.produto.opcoes.freteGratis)
        return (
            <p>Frete Grátis</p>
        )

        return(
            <>
                <p>Frete Pac: {this.state.fretePac} em {this.state.prazoEntregaPac} dias úteis </p>
                <p>Frete Sedex: {this.state.freteSedex} em {this.state.prazoEntregaSedex} dias úteis </p>
            </>
        )
    }

    render() {
        return (
            <form className="row justify-content-center col-12 mt-5 m-0">

                <div className="row form-group justify-content-center col-12 col-md-7 text-center" >

                
                {this.state.categoria}

                    <img className={"img-fluid " + styles.imgSelected } 
                        src={ this.state.imgSrcSelected }
                        alt="" />

                        <div className="row col-12 col-md-6 mt-3 p-0">
                            <button 
                                type="button" 
                                onClick={this.visualizarProdutos} 
                                className="btn btn-primary btn-lg btn-block mx-auto">
                                    Produtos de {this.state.parceiro.nome} <FontAwesomeIcon icon={faTshirt} />
                            </button>
                            <h5 className="mt-3">Email: {this.state.parceiro.email}</h5>
                            <h5 className="mt-3">Cidade: {this.state.parceiro.cidade}</h5>
                        </div>

                        <div className="row form-group justify-content-start justify-content-md-center col-12 mt-5" >

                            <FontAwesomeIcon 
                                onClick={this.setaLeft}
                                className={"btn icone-principal d-none d-md-block " + styles.setasImg} 
                                icon={faArrowCircleLeft} />

                            <div className={"col-6 col-md-2 mt-3 " + this.state.displayImg[0] } >
                                <img className={styles.img + " img-fluid " + this.state.borderImg1 }
                                    onClick={this.changeImageView}
                                    src={ this.state.imgSrc[0] }
                                    alt="" width="256" height="256"/>
                            </div>
                            <div className={"col-6 col-md-2 mt-3 " + this.state.displayImg[1] } >
                                <img className={styles.img + " img-fluid " + this.state.borderImg2 }
                                    onClick={this.changeImageView}
                                    src={ this.state.imgSrc[1] }
                                    alt="" width="256" height="256"/>
                            </div>
                            <div className={"col-6 col-md-2 mt-3 " + this.state.displayImg[2] } >
                                <img className={styles.img + " img-fluid " + this.state.borderImg3 }
                                    onClick={this.changeImageView}
                                    src={ this.state.imgSrc[2] }
                                    alt="" width="256" height="256"/>
                            </div>
                            <div className={"col-6 col-md-2 mt-3 " + this.state.displayImg[3] } >
                                <img className={styles.img + " img-fluid " + this.state.borderImg4 }
                                    onClick={this.changeImageView}
                                    src={ this.state.imgSrc[3] }
                                    alt="" width="256" height="256"/>
                            </div>
                            <div className={"col-6 col-md-2 mt-3 " + this.state.displayImg[4] } >
                                <img className={styles.img + " img-fluid " + this.state.borderImg5 }
                                    onClick={this.changeImageView}
                                    src={ this.state.imgSrc[4] }
                                    alt="" width="256" height="256"/>
                            </div>
                        
                            <FontAwesomeIcon 
                                onClick={this.setaRight}
                                className={"btn icone-principal d-none d-md-block " + styles.setasImg} 
                                icon={faArrowCircleRight} />
                        </div>
                    {this.state.categoriaMobile}
                </div>
                <div className="row form-group justify-content-center col-12 col-md-5 text-left" >
                    <div className="col-12 col-md-12 my-3">
                        <h1> {this.props.produto.nome} </h1>  
                        <h5>Marca: {this.props.produto.marca}</h5> 
                        <p className={styles.valor} >{this.state.valor} </p>
                        {this.freteMsg()}
                        {this.state.inputQtd}
                        {checkVoltagem(this)}
                        {checkTamanhoRoupas(this)}
                        {checkTamanhoCalcados(this)}
                    </div>


                    <div className="row form-group justify-content-start col-12">

                        <BtnAdicionarRemoverCarrinho 
                            navbar={this.props.navbar}
                            produto={this.getProduto()}
                            
                            remover={false}
                        />

                        <BtnAdicionarRemoverFavoritos 
                            navbar={this.props.navbar}
                            produto={this.getProduto()}

                            remover={false}
                        />

                        <BtnComprar 
                            navbar={this.props.navbar}
                            produto={this.getProduto()}
                        />

                        <BtnEditar
                            navbar={this.props.navbar}
                            produto={this.getProduto()} 
                        />

                        <BtnRemover 
                            navbar={this.props.navbar}
                            produto={this.getProduto()}
                        />
                    </div>
                </div>
                <div className="row form-group justify-content-start col-12 col-md-10 text-left mt-5" >
                    <div className="col-12 col-md-5">
                        <h3>Descrição</h3>
                        <p style={{fontSize: "1.2rem"}}>{this.props.produto.descricao} </p>
                    </div>
                    <div className="col-12 col-md-2">
                        <h3>Cor</h3>
                        <p style={{fontSize: "1.7rem"}}>{this.props.produto.cor} </p>
                    </div>
                    <div className="col-12 col-md-3">
                        <h3>Caracteristicas ({this.props.produto.tipoTamanho})</h3>
                        {this.pegarCaracteristicas()}
                    </div>
                    <div className="col-12 col-md-2">
                        <h3>Opções</h3>
                        {this.pegarOpcoes()}
                    </div>
                </div>
            </form>
        );
    }

}

export default VisualizarProduto;