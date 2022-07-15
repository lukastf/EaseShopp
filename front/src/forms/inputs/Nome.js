import React from 'react';
import checkInputsCols from '../utilidades/checkInputsCols';
import { customInputMsg } from '../cadastroResult';

class InputNome extends React.Component {

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
        this.checkNome(this.props.context.state.nome);
    }

    checkNome = (value) => {

        let error = "";
        let classError = "";

        if(value.length < 4) {
    
            error = customInputMsg("Nome muito pequeno! Minimo de 4 caracteres");
            classError = "error";
        }

    
        if(value.length > 50) {
    
            error = customInputMsg("Nome muito grande! Maximo de 50 caracteres");
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

        let value = e.target.value;
        
        this.checkNome(value);

        this.props.context.setState({
            nome: value
        });
    }

    render(){
        return(
            <div className={this.state.cols + " mt-3"}>
                <label htmlFor="nome">Nome</label>
                <input 
                    type="text" 
                    className={"form-control " + this.state.classError} 
                    id="nome" placeholder="Nome"
                    onChange={this.changeHandler} 
                    value={this.props.context.state.nome} 
                    maxLength="55"
                    required
                />
                {this.state.error}
            </div>
        );
    }
}

export default InputNome;