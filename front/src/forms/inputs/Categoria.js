
import React from 'react';
import checkInputsCols from '../utilidades/checkInputsCols';
import { serverUrl } from '../../config';
import Axios from 'axios';

class InputCategoria extends React.Component {

    constructor(props) {

        super(props);

        this.state = {

            cols: "col-md-3",
            error: "",
            classError: "",

            categorias: []
        }
    }

    componentDidMount = () => {

        checkInputsCols(this);
        this.getCategorias();
    }

    changeHandler = (e) => {

        let value = e.target.value;

        this.props.context.setState({
            categoria: value
        });

    }

    getCategorias = async () => {

        let categorias = [];

        let response = await Axios.get(serverUrl + "/produtos/categorias/listar");

        for (let i = 0; i < response.data.length; i++) {

            categorias.push(<option key={i} value={response.data[i].nome}> {response.data[i].nome} </option>);
        }

        this.setState({
            categorias: categorias
        })
    }

    render(){
        return(
            <div className={"col-md-4 mt-3"}>
                <label htmlFor="categoria">Categoria</label>
                <select 
                    className={"form-control " + this.state.classError} 
                    onChange={this.changeHandler} 
                    value={this.props.context.state.categoria} 
                    id="categoria"
                >
                    <option value="Selecione">Selecione uma categoria</option>
                    {this.state.categorias}
                </select>

                {this.state.error}
            </div>
        );
    }
}

export default InputCategoria;