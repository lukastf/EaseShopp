import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import checkInputsCols from '../utilidades/checkInputsCols';
import { customInputMsg } from '../cadastroResult';

class InputSenha extends React.Component {

    constructor(props) {

        super(props);

        this.state = {

            cols: "",
            error: "",
            classError: "",
            passType: "password"

        }
    }

    componentDidMount = () => {

        checkInputsCols(this);
        this.checkSenha(this.props.context.state.senha);
    }

    passSecurity = (value) => {

        let passSecurity = "";

        if (value.length > 5 && value.length < 9) 
            passSecurity = customInputMsg("Senha Fraca");

        if (value.length > 8) 
            passSecurity = customInputMsg("Senha Média", "orange");

        if (value.length > 11 && (
            value.includes("!") || 
            value.includes("@") || 
            value.includes("#") || 
            value.includes("$") || 
            value.includes("%") ||
            value.includes("¨") ||
            value.includes("&") ||   
            value.includes("*") ||
            value.length > 40
        ))
            passSecurity = customInputMsg("Senha Forte", "green");

        return passSecurity;
    }

    checkSenha = (value) => {

        let error = this.passSecurity(value);
        let classError = "";
    
        if(value.length > 100) {
    
            error = customInputMsg("Senha muito grande! Maximo de 100 caracteres");
            classError = "error";
        }
    
        if(value.length < 6) {
    
            error = customInputMsg("Senha muito pequena! Minimo de 6 caracteres");
            classError = "error";
        }

        if (value === "") {

            error = customInputMsg("Insira a senha", "blue");
            classError = "";
        }

        this.setState({
            error: error,
            classError: classError
        });

        let repetirSenhaError = "";
        let repetirSenhaclassError = "";

        if(this.props.context.state.repetirSenha !== value || value.length === 0) {
        
            repetirSenhaError = customInputMsg("As senhas precisam ser iguais!");
            repetirSenhaclassError = "error";
        }

        this.props.context.setState({
            repetirSenhaError: repetirSenhaError,
            repetirSenhaclassError: repetirSenhaclassError
        });
    }

    changeHandler = (e) => {

        let value = e.target.value;
        
        this.checkSenha(value);

        this.props.context.setState({
            senha: value
        });
    }

    changePassView = () => {

        let passType = this.state.passType;

        if (passType === "password")
            passType = "text";
        else if (passType === "text")
            passType = "password";

        this.setState ({passType: passType});
    }

    render(){
        return(
            <div className={this.state.cols + " mt-3 input-group"} >
                <label className="col-12 p-0" > Senha</label>
                <input 
                    
                    type={this.state.passType} 
                    className={"form-control col-12 " + this.state.classError} 
                    placeholder="Senha" style={{borderRadius:".25rem"}}
                    onChange={this.changeHandler} 
                    value={this.props.context.state.senha} 
                    maxLength="105" 
                    onPaste={(e)=>e.preventDefault()}
                    required 
                />

                    <div className="input-group-append">
                        <button 
                            className="btn"
                            type="button"
                            onClick={this.changePassView}
                            onMouseDown={this.changePassView}
                        >
                            <FontAwesomeIcon icon={faEye} style={{color:"black"}} />
                        </button>
                    </div>
                {this.state.error}
            </div>
        );
    }
}

export default InputSenha;