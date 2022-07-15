import React from 'react';

import changeHandler from './changeHandler';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faSearch,
  faListAlt 
} from '@fortawesome/free-solid-svg-icons';

import Categorias from '../categorias/Categorias';
import { serverUrl } from '../config';

import Paginacao from '../paginacao/Paginacao';
import ListaEstilo from '../listaEstilo/ListaEstilo';
import SideNavbarParceiro from '../sideNavbarParceiro/SideNavbarParceiro';

class ListarProdutos extends React.Component {

  _isMounted = false;

  itensPage = 20;
  pageId = 0;

  constructor(props) {

    super(props);

    this.state = {

      produtos: "",
      listaProdutos: "",
      btnEditar:"",
      btnExcluir:"",
      pesquisaError: "",
      pesquisaString: "",
      categoria: "Todos",
      sort: "-_id-a",

      orderStyle: "col-md-2 cardStyle1",
      iconOrderStyle: faListAlt,
      cardImgTopStyle: "card-img-top",

      displayDetalhesProduto: [],
      displayCodigoRastreio: [],
      displayEnderecoRetirada: [],
      status: [],
      codigoRastreio: [],
      enderecoRetirada: [],

      paginacao: 
      <Paginacao 
        url={serverUrl + "/produtos" +
        this.props.route +
        "/itensPage/"+ 
        this.itensPage +"/categoria/Todos/pesquisaString/undefined/sort/-_id"}
        itensPage={this.itensPage}
        atualizarObjs={this.getProdutos}
        changePageId={this.changePageId}
      />
    }
  }

  componentWillUnmount() {

    this._isMounted = false;
  }

  componentDidMount () {

    window.scrollTo(0, 0);
    this._isMounted = true;
    this.getProdutos(this.itensPage, this.pageId);
  }

  changeHandler = (e) => {

    this.resetPaginacao();

    let pesquisaString = e.target.value; 

    this.setState({
      pesquisaString: pesquisaString
    });

    changeHandler(this, this.state.categoria, pesquisaString, this.itensPage, this.pageId, this.state.sort);
  }

  getProdutos = (itensPage, pageId) => {

    changeHandler(this, this.state.categoria, this.state.pesquisaString, itensPage, pageId, this.state.sort);
  }

  changeSort = (e) => {

    let sort = e.target.value;

    this.setState({
      sort: sort
    });

    changeHandler(this, this.state.categoria, this.state.pesquisaString, this.itensPage, this.pageId, sort);
  }

  resetPaginacao = () => {

    this.setState({
      paginacao: ""
    });
  }

  paginacao = (url) => {

    this.setState({
      paginacao: 
      <Paginacao 
        url={url}
        itensPage={this.itensPage}
        atualizarObjs={this.getProdutos}
        changePageId={this.changePageId}
      />
    });
  }

  changePageId = (id) => {

    this.pageId = id;
  }

  showSort = () => {

    if (this.props.title === "Minhas Vendas") return;
    return (
    <>
      <label htmlFor="ordenar">Ordenar por:</label>
      <select 
        className={"form-control "} 
        onChange={this.changeSort} 
        id="ordenar"
      >
        <option value="-_id-a">Relevante</option>
        <option value="-_id">Cadastros Novos</option>
        {/*<option value="+_id">Cadastros Antigos</option>*/}
        <option value="+valorNum">Maior Valor</option>
        <option value="-valorNum">Menor Valor</option>
        <option value="+favoritos">Mais Favoritados</option>
        <option value="+vendidos">Mais Vendidos</option>
      </select>
    </>
    );
  }

  sideNavbar = () => {

    if (this.props.title !== "Minhas Vendas") return;
    return <SideNavbarParceiro navbar={this.props.navbar} />;
  }


  render() {

    return(
      <div className="col-12 mt-4">

        {this.sideNavbar()}

        <div className="col-12 text-center">
          <h1>{this.props.title}</h1>
        </div>

        <Categorias 
          changeHandler={changeHandler}
          context={this}
        />

        {this.state.paginacao}

        <div className="row col-12">

          <div className="justify-content-start col-12 col-md-2">
            {this.showSort()}
          </div>

          <div className="justify-content-center col-12 col-md-8">
            <div className="input-group input-group-lg col-12 col-md-6 mt-4 mx-auto">
                <input type="text" className="form-control" aria-label="Large" placeholder="Pesquisar" aria-describedby="inputGroup-sizing-sm"
                id="pesquisar"
                onChange={this.changeHandler} />
                <div className="input-group-append">
                    <span className="input-group-text" id="inputGroup-sizing-lg"><FontAwesomeIcon icon={faSearch} /></span>
                </div>
            </div>
          </div>

          <ListaEstilo 
          changeHandler={changeHandler}
          context={this} />
        </div>

        <div className="row justify-content-center mt-5">
          {this.state.listaProdutos} 
        </div>

        {this.state.paginacao}
      </div>
    );
  }
}

export default ListarProdutos;