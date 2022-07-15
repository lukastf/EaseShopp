import React from 'react';

import {celularMask} from '../utilidades/masks';
import { customInputMsg } from '../cadastroResult';
import checkInputsCols from '../utilidades/checkInputsCols';

class InputCelular extends React.Component {

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
        this.checkCelular(this.props.context.state.celular);
    }

    checkCelular = (value) => {

        let error = "";
        let classError = "";

        if (value.length < 14) {
    
            error = customInputMsg("Celular Invalido");
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

        let value = celularMask(e.target.value);

        this.checkCelular(value);

        this.props.context.setState({
            celular: value
        });
    }

    render(){
        return(
            <div className={this.state.cols + " mt-3"}>
                <label htmlFor="celular">Celular</label>
                <input 
                    type="text" 
                    className={"form-control " + this.state.classError} 
                    id="celular" 
                    placeholder="Celular" 
                    maxLength="15" 
                    onChange={this.changeHandler} 
                    value={this.props.context.state.celular} 
                    required 
                />
                {this.state.error}
            </div>
        );
    }
}

export default InputCelular;