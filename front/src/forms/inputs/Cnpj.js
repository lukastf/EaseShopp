import React from 'react';
import { cnpjMask } from '../utilidades/masks';
import checkInputsCols from '../utilidades/checkInputsCols';
import { customInputMsg } from '../cadastroResult';

class InputCnpj extends React.Component {

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

        //novo cnpj
        //if (!this.props.context.props.editar) 
            this.checkCnpj(this.props.context.state.cnpj);
    }

    checkCnpj = (value) => {

        let error = "";
        let classError = "";

        if(value.length < 18) {
    
            error = customInputMsg("Cnpj Invalido");
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

        let value = cnpjMask(e.target.value);

        this.checkCnpj(value);

        this.props.context.setState({
            cnpj: value
        });
    }

    render(){
        return(
            <div className={this.state.cols + " mt-3"}>
                <label htmlFor="cnpj">CNPJ</label>
                <input 
                    type="text" 
                    className={"form-control " + this.state.classError} 
                    id="cnpj" 
                    placeholder="Digite seu CNPJ"
                    onChange={this.changeHandler} 
                    value={this.props.context.state.cnpj} 
                    required 
                />
                {this.state.error}
            </div>
        );
    }
}

export default InputCnpj;