import React from 'react';

import {celularMask} from '../utilidades/masks';
import checkInputsCols from '../utilidades/checkInputsCols';
import { customInputMsg } from '../cadastroResult';

class InputTelefone extends React.Component {

    constructor(props) {

        super(props);

        this.state = {

            cols: "",
            error: "",
            classError: "",

        }
    }

    componentDidMount = () => {

        checkInputsCols(this);

        //novo tel
        //if (!this.props.context.props.editar) 
            this.checkTelefone(this.props.context.state.telefone);
    }

    checkTelefone = (value) => {

        let error = "";
        let classError = "";

        if(value.length < 14) {
    
            error = customInputMsg("Telefone muito curto");
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

        this.checkTelefone(value);

        this.props.context.setState({
            telefone: value
        });

    }

    render(){
        return(
            <div className={this.state.cols + " mt-3"}>
                <label htmlFor="telefone">Telefone</label>
                <input 
                    type="text" 
                    className={"form-control " + this.state.classError} 
                    id="telefone" 
                    placeholder="Telefone" 
                    maxLength="15" 
                    onChange={this.changeHandler} 
                    value={this.props.context.state.telefone} 
                    required 
                />
                {this.state.error}
            </div>
        );
    }
}

export default InputTelefone;