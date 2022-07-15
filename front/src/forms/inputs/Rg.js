import React from 'react';
import { rgMask } from '../utilidades/masks';
import checkInputsCols from '../utilidades/checkInputsCols';
import { customInputMsg } from '../cadastroResult';

class InputRg extends React.Component {

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

        //novo rg
        //if (!this.props.context.props.editar) 
            this.checkRg(this.props.context.state.rg);
    }

    checkRg = (value) => {

        let error = "";
        let classError = "";

        if (value.length < 12) {
    
            error = customInputMsg("Rg Invalido");
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

        let value = rgMask(e.target.value);

        this.checkRg(value);

        this.props.context.setState({
            rg: value
        });
    }

    showLabel = () => {

        if (this.props.hideLabel)
        return ""

        return <label htmlFor="rg">RG</label>
    }

    render(){
        return(
            <div className={this.state.cols + " mt-3"}>
                
                {this.showLabel()}
                <input 
                    type="text" 
                    className={"form-control " + this.state.classError} 
                    id="rg" 
                    placeholder="Digite seu RG" 
                    maxLength="12"
                    onChange={this.changeHandler} 
                    value={this.props.context.state.rg} 
                    required 
                />
                {this.state.error}
            </div>
        );
    }
}

export default InputRg;