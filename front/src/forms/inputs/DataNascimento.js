import React from 'react';

import {dataNascMask} from '../utilidades/masks';
import checkInputsCols from '../utilidades/checkInputsCols';
import { customInputMsg } from '../cadastroResult';

class InputDataNascimento extends React.Component {

    constructor(props) {

        super(props);

        this.state = {

            cols: "",
            error: "",
            classError: ""
        }
    }

    componentDidMount = () => {

        checkInputsCols(this);

        //novo celular
        //if (!this.props.context.props.editar) 
            this.checkDataNasc(this.props.context.state.dataNasc);
    }

    checkDataNasc = (value) => {

        let error = "";
        let classError = "";

        let tempArr = value.split("/");
        let dia = tempArr[0];
        let mes = tempArr[1];
        let ano = tempArr[2];

        if (value.length < 10 || dia > 31 || mes > 12 || ano > this.props.context.props.navbar.props.app.state.year) {
    
            error = customInputMsg("Data de Nascimento Invalida");
            classError = "error";
        }

        if (value === "") {

            error = "";
            classError = "";
        }

        this.setState({

            error: error,
            classError: classError
        });
    }

    changeHandler = (e) => {

        let value = dataNascMask(e.target.value);

        this.checkDataNasc(value);

        this.props.context.setState({
            dataNasc: value
        });
    }

    render(){
        return(
            
            <div className={this.state.cols +" mt-3"}>
                <label htmlFor="dataNasc">Data de Nascimento</label>
                <input 
                    type="text" 
                    className={"form-control " + this.state.classError} 
                    id="dataNasc" 
                    placeholder="Data de Nascimento" 
                    maxLength="10" 
                    onChange={this.changeHandler} 
                    value={this.props.context.state.dataNasc} 
                    required 
                />
                {this.state.error}
            </div>
        );
    }
}

export default InputDataNascimento;