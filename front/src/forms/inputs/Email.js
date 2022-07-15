import React from 'react';
import checkInputsCols from '../utilidades/checkInputsCols';
import { customInputMsg } from '../cadastroResult';

class InputEmail extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            
            cols: "",
            error: "",
            error2: "",
            classError: ""
        }
    }

    componentDidMount = () => {

        checkInputsCols(this);

        //novo email
        //if (!this.props.context.props.editar) 
            this.checkEmail(this.props.context.state.email);
    }

    checkEmail = (value) => {
        
        let error = "";
        let error2 = "";
        let classError = "";
        
        if(value.length > 50) {
    
            error = customInputMsg("Email muito grande! Maximo de 50 caracteres");
            classError = "error";
        }
    
        if(!value.includes("@")) {
    
            error2 = customInputMsg("Email inválido");
            classError = "error";
        }

        if (value === "") {

            error = "";
            error2 = "";
            classError = "";
        }

        this.setState({
            error: error,
            error2: error2,
            classError: classError
        });
    }

    changeHandler = (e) => {

        let value = e.target.value;

        this.checkEmail(value);

        this.props.context.setState({
            email: value
        });
    }

    render(){
        return(
            <div className={this.state.cols + " mt-3"}>
                <label htmlFor="email">Email</label>
                <input 
                    type="email" 
                    className={"form-control " + this.state.classError} 
                    id="email" 
                    placeholder="Email" 
                    maxLength="55"
                    onChange={this.changeHandler} 
                    value={this.props.context.state.email} 
                    required 
                />
                {this.state.error}
                {this.state.error2}
            </div>
        );
    }
}

export default InputEmail;