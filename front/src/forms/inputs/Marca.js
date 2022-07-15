import React from 'react';
import checkInputsCols from '../utilidades/checkInputsCols';
import { customInputMsg } from '../cadastroResult';

class InputMarca extends React.Component {

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
        this.checkMarca(this.props.context.state.marca);
    }

    checkMarca = (value) => {

        let error = "";
        let classError = "";
    
        if(value.length > 50) {
    
            error = customInputMsg("Marca muito grande! Maximo de 50 caracteres");
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
        
        this.checkMarca(value);

        this.props.context.setState({
            marca: value
        });
    }

    render(){
        return(
            <div className={this.state.cols + " mt-3"}>
                <label htmlFor="marca">Marca</label>
                <input 
                    type="text" 
                    className={"form-control " + this.state.classError} 
                    id="marca" placeholder="Marca"
                    onChange={this.changeHandler} 
                    value={this.props.context.state.marca} 
                    maxLength="55"
                    required
                />
                {this.state.error}
            </div>
        );
    }
}

export default InputMarca;