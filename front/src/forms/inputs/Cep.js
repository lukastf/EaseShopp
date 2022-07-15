import React from 'react';

import {cepMask} from '../utilidades/masks';
import axios from 'axios';
import checkInputsCols from '../utilidades/checkInputsCols';
import { customInputMsg } from '../cadastroResult';

class InputCep extends React.Component {

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
        this.getCep(this.props.context.state.cep);
    }

    resetEndereco = () => {

        this.props.context.setState({
            estado: "",
            cidade: "",
            endereco: "",
            numeroEndereco: "",

            cidadeError: customInputMsg("Cidade Invalida"),
            cidadeClassError: "error",

            enderecoError: customInputMsg("O endereço precisa ter no minimo 15 caracteres e maximo 50!"),
            enderecoClassError: "error",
        });
    }

    getCepErrorState = () => {

        this.resetEndereco();

        this.setState({
    
            error: <p style={{color:"red"}}>Cep Invalido!</p>,
            classError: "error"
        });
    }
    
    getCep = (cep) => {

        if (cep === "") {

            this.setState({
                error: "",
                classError: ""
            });

            return;
        }
    
        if (cep.length < 9) {
    
            this.getCepErrorState();
            return;
        }
    
        this.setState({
            error: <p style={{color:"blue"}}>carregando...</p>
        });
        
        axios.get('https://viacep.com.br/ws/'+cep+'/json/unicode/')
        .then((response) => {
    
            if (response.data.erro) {
                console.log("erro");
                this.getCepErrorState();
                return;
            }
    
            this.setState({
    
                error: "",
                classError: ""
            });

            this.props.context.setState({

                estado: response.data.uf,
                cidade: response.data.localidade,
                endereco: response.data.logradouro + "  " + response.data.bairro,

                cidadeError: "",
                cidadeClassError: "",

                enderecoError: "",
                enderecoClassError: ""
            });
        });
    }

    changeHandler = (e) => {

        let value = cepMask(e.target.value);

        this.setState({
            error: ""
        });
    
        this.getCep(value);

        this.props.context.setState({
            cep: value
        });
    }

    render(){
        return(
            
            <div className={this.state.cols + " mt-3"}>
                <label htmlFor="cep">CEP</label>
                <input 
                    type="text" 
                    className={"form-control " + this.state.classError} 
                    id="cep" 
                    placeholder="Cep" 
                    maxLength="9" 
                    onChange={this.changeHandler} 
                    value={this.props.context.state.cep} 
                    required 
                />
                {this.state.error}
            </div>
        );
    }
}

export default InputCep;