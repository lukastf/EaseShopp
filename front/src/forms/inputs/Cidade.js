import React from 'react';
import checkInputsCols from '../utilidades/checkInputsCols';
import { customInputMsg } from '../cadastroResult';

class InputCidade extends React.Component {

    constructor(props) {

        super(props);

        this.state = {

            cols:"",
            //error: "",
            //classError: ""
        }
    }

    componentDidMount = () => {

        checkInputsCols(this);

        //if (!this.props.context.props.editar) 
            this.checkCidade(this.props.context.state.cidade);
    }

    checkCidade = (value) => {

        let error = "";
        let classError = "";

        if (value.length < 4) {
    
            error = customInputMsg("Cidade Invalida");
            classError = "error";
        }

        if (value === "") {

            error = "";
            classError = "";
        }

        this.props.context.setState({

            cidadeError: error,
            cidadeClassError: classError
        });
    }

    changeHandler = (e) => {

        let value = e.target.value;

        this.checkCidade(value);

        this.props.context.setState({
            cidade: value
        });
    }

    render(){
        return(

            <div className={this.state.cols + " mt-3"}>
                <label htmlFor="cidade">Cidade</label>
                <input 
                    type="text" 
                    className={"form-control "+ this.props.context.state.cidadeClassError} 
                    id="cidade" 
                    placeholder="Cidade" 
                    maxLength="50" 
                    onChange={this.changeHandler} 
                    value={this.props.context.state.cidade} 
                    required 
                />
                {this.props.context.state.cidadeError}
            </div>
        );
    }
}

export default InputCidade;