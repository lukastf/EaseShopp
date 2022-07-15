import React from 'react';
import { numberMask } from '../utilidades/masks';
import checkInputsCols from '../utilidades/checkInputsCols';
import { customInputMsg } from '../cadastroResult';

class InputCodigoIndicacao extends React.Component {

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

        this.checkNumber(this.props.context.state.codigoIndicacao);
    }

    checkNumber = (value) => {

        let error = "";
        let classError = "";

        if (value.length > 10) {
    
            error = customInputMsg("Codigo muito grande");
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

        let value = numberMask(e.target.value);

        this.checkNumber(value);

        this.props.context.setState({
            codigoIndicacao: value
        });
    }

    render(){
        return(

            <div className={this.state.cols + " mt-3"}>
                <label htmlFor="codigoIndicacao">Codigo de Indicação</label>
                <input 
                    type="text" 
                    className={"form-control " + this.state.classError} 
                    id="codigoIndicacao" 
                    placeholder="Numero" 
                    maxLength="10"
                    onChange={this.changeHandler} 
                    value={this.props.context.state.codigoIndicacao} 
                    required 
                />
                {this.state.error}
            </div>
        );
    }
}

export default InputCodigoIndicacao;