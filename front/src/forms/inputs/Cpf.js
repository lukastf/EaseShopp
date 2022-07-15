import React from 'react';
import { cpfMask } from '../utilidades/masks';
import checkInputsCols from '../utilidades/checkInputsCols';
import { customInputMsg } from '../cadastroResult';

class InputCpf extends React.Component {

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

        //novo cpf
        //if (!this.props.context.props.editar) {}
        //console.log(this.props.context.usuario);
        this.checkCpf(this.props.context.state.cpf);
    }

    checkCpf = (value) => {

        let error = "";
        let classError = "";

        if(value.length < 14) {
    
            error = customInputMsg("Cpf Invalido");
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

        let value = cpfMask(e.target.value);
        
        this.checkCpf(value);

        this.props.context.setState({
            cpf: value
        });
    }

    showLabel = () => {

        if (this.props.hideLabel)
        return ""

        return <label htmlFor="cpf">CPF</label>
    }

    render(){
        return(
            <div className={this.state.cols + " mt-3"}>
                {this.showLabel()}
                <input 
                    type="text" 
                    className={"form-control " + this.state.classError} 
                    id="cpf" 
                    placeholder="Digite seu CPF"
                    onChange={this.changeHandler} 
                    value={this.props.context.state.cpf} 
                    required 
                />
                    {this.state.error}
            </div>
        );
    }
}

export default InputCpf;