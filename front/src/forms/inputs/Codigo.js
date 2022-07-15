import React from 'react';
import { numberMask } from '../utilidades/masks';
import { customInputMsg } from '../cadastroResult';
import checkInputsCols from '../utilidades/checkInputsCols';

class InputCodigo extends React.Component {

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

        //novo codigo
        //if (!this.props.context.props.editar) 
            this.checkCodigo(this.props.context.state.codigo);
    }

    checkCodigo = (value) => {

        let error = "";
        let classError = "";

        if(value.length < 4) {
    
            error = customInputMsg("Codigo muito curto");
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

        this.checkCodigo(value);

        this.props.context.setState({
            codigo: value
        });
    }

    render(){
        return(

            <div className={this.state.cols + " mt-3"} >
                <label htmlFor="codigo">Codigo</label>
                <input 
                    type="text" 
                    className={"form-control " + this.state.classError} 
                    id="codigo" 
                    placeholder="Codigo"
                    maxLength="10"
                    onChange={this.changeHandler} 
                    value={this.props.context.state.codigo} 
                    required 
                />
                {this.state.error}
            </div>
        );
    }
}

export default InputCodigo;