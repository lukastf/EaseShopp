import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  fas
} from '@fortawesome/free-solid-svg-icons';

import { serverUrl } from '../config';
import Axios from 'axios';

class Categorias extends React.Component {

  constructor(props) {

    super(props);

    this.state = {

      categorias: [],
      sqrSelecionado: []
    }
  }

  componentDidMount = async () => {

    let response = await Axios.get( serverUrl + "/produtos/categorias/listar");

    this.setState({
      categorias: response.data
    });

    this.state.sqrSelecionado[0] = "sqr-selecionado";
  }

  click = (e, i) => {

    let sqrSelecionado = [];
    sqrSelecionado[i] = "sqr-selecionado";

    this.setState({  
      sqrSelecionado: sqrSelecionado
    });

    let categoria = e.currentTarget.id;

    this.props.context.setState({
        categoria: categoria
    });

    this.props.changeHandler(
      
      this.props.context, 
      categoria, 
      this.props.context.state.pesquisaString,
      this.props.context.itensPage,
      this.props.context.pageId
    );

    this.props.context.resetPaginacao();
  }

  categorias = () => {

    const categoriaConstructor = (nome, icone, position) => {

      let f = (e) => this.click(e, position);

      return (
      <div key={position}
        className={"sqr col-4 col-md-1 mt-3 mx-3 " + this.state.sqrSelecionado[position]} 
        id={nome} 
        onClick={f}>
          <FontAwesomeIcon className="icone-principal" icon={fas[icone]} />
          <p> {nome} </p>
      </div>
      );
    }

    let categorias = [
      categoriaConstructor("Todos", "faAddressBook", 0)
    ];

    for (let i = 0; i < this.state.categorias.length; i ++) {

      categorias.push(
        categoriaConstructor(
          this.state.categorias[i].nome, 
          this.state.categorias[i].icone,
          i+1
        )
      );
    }

    return categorias;
  }

  render () {

    return (

      <div className="row justify-content-center m-2 categorias">

        <div className="col-12 text-center">
          <h2>Categorias</h2>
        </div>

        <div className="row col-12 justify-content-center">
          {this.categorias()}
        </div>
      </div>
    );
  }
}

export default Categorias;