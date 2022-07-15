import React from 'react';
import { numberMask } from '../utilidades/masks';
import checkInputsCols from '../utilidades/checkInputsCols';
import { customInputMsg } from '../cadastroResult';

class InputNumeroEndereco extends React.Component {

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

        this.checkNumber(this.props.context.state.numeroEndereco);
    }

    checkNumber = (value) => {

        let error = "";
        let classError = "";

        if (value.length < 3) {
    
            error = customInputMsg("Digite pelo menos três numeros do endereço");
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
            numeroEndereco: value
        });
    }

    render(){
        return(

            <div className={this.state.cols + " mt-3"}>
                <label htmlFor="numeroEndereco">Numero</label>
                <input 
                    type="text" 
                    className={"form-control " + this.state.classError} 
                    id="numeroEndereco" 
                    placeholder="Numero" 
                    maxLength="10"
                    onChange={this.changeHandler} 
                    value={this.props.context.state.numeroEndereco} 
                    required 
                />
                {this.state.error}
            </div>
        );
    }
}

export default InputNumeroEndereco;