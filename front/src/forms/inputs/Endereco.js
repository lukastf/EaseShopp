import React from 'react';
import { customInputMsg } from '../cadastroResult';
import checkInputsCols from '../utilidades/checkInputsCols';

class InputEndereco extends React.Component {

    constructor(props) {

        super(props);

        this.state = {

            cols: ""
        }
    }

    componentDidMount = () => {

        checkInputsCols(this);
        this.checkEndereco(this.props.context.state.endereco);
    }

    checkEndereco = (value) => {

        let error = "";
        let classError = "";

        if((value.length < 15 || value.length > 100)) {

            error = customInputMsg("O endereço precisa ter no minimo 15 caracteres e maximo 100!");
            classError = "error";
        }

        if (value === "") {

            error = "";
            classError = "";
        }

        this.props.context.setState({

            enderecoError: error,
            enderecoClassError: classError
        });
    }

    changeHandler = (e) => {

        let value = e.target.value;

        this.checkEndereco(value);

        this.props.context.setState({
            endereco: value
        });
    }

    render(){
        return(

            <div className={this.state.cols + " mt-3"}>
                <label htmlFor="endereco">Endereço</label>
                <input 
                    type="text" 
                    className={"form-control " + this.props.context.state.enderecoClassError} 
                    id="endereco" 
                    placeholder="Endereço" 
                    maxLength="100" 
                    onChange={this.changeHandler} 
                    value={this.props.context.state.endereco} 
                    required 
                />
                {this.props.context.state.enderecoError}
            </div>
        );
    }
}

export default InputEndereco;