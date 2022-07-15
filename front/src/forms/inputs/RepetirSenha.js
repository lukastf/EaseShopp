import React from 'react';
import { customInputMsg } from '../cadastroResult';
import checkInputsCols from '../utilidades/checkInputsCols';

class InputRepetirSenha extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            cols: ""
        }
    }

    componentDidMount = () => {

        checkInputsCols(this);
        this.checkRepetirSenha(this.props.context.state.repetirSenha);
    }

    checkRepetirSenha = (value) => {

        let repetirSenhaError = "";
        let repetirSenhaclassError = "";
        
        if(this.props.context.state.senha !== value /*|| value.length === 0*/) {
        
            repetirSenhaError = customInputMsg("As senhas precisam ser iguais!");
            repetirSenhaclassError = "error";
        }

        if (value === "") {

            repetirSenhaError = ""
            repetirSenhaclassError = "";
        }

        this.props.context.setState({
            repetirSenhaError: repetirSenhaError,
            repetirSenhaclassError: repetirSenhaclassError
        });
    }

    changeHandler = (e) => {

        let value = e.target.value;

        this.checkRepetirSenha(value);

        this.props.context.setState({
            repetirSenha: value
        });
    }

    render(){
        return(
            <div className={this.state.cols + " mt-3"}>
                <label htmlFor="senha">Repetir Senha</label>
                <input 
                    type="password" 
                    className={"form-control " + this.props.context.state.repetirSenhaclassError} 
                    id="repetirSenha" 
                    placeholder="Repetir Senha" 
                    onChange={this.changeHandler} 
                    value={this.props.context.state.repetirSenha} 
                    maxLength="105" 
                    onPaste={(e)=>e.preventDefault()}
                    required 
                />
                {this.props.context.state.repetirSenhaError}
            </div>
        );
    }
}

export default InputRepetirSenha;