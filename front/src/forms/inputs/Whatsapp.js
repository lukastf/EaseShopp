import React from 'react';

import {celularMask} from '../utilidades/masks';
import checkInputsCols from '../utilidades/checkInputsCols';
import { customInputMsg } from '../cadastroResult';
import $ from 'jquery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

class InputWhatsapp extends React.Component {

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

        //novo celular
        //if (!this.props.context.props.editar) 
            this.checkZap(this.props.context.state.whatsapp);
        
        $('[data-toggle="tooltip"]').tooltip(); 
    }

    checkZap = (value) => {

        let error = "";
        let classError = "";

        if (value.length < 15) {
    
            error = customInputMsg("Whatsapp Invalido");
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

        let value = celularMask(e.target.value);

        this.checkZap(value);

        this.props.context.setState({
            whatsapp: value
        });

    }

    render(){
        return(
            <div className={this.state.cols + " mt-3"}>
                <label htmlFor="whatsapp">Whatsapp</label>
                
                <button 
                    style={{marginTop :"-1rem", boxShadow: "none"}}
                    className="btn"
                    data-toggle="tooltip" 
                    data-placement="top" 
                    title="Para receber notificações no seu celular"
                    onClick={(e)=>{e.preventDefault()}}>
                        <FontAwesomeIcon icon={faInfoCircle} />
                </button>
                <input 
                    type="text" 
                    className={"form-control " + this.state.classError} 
                    id="whatsapp" 
                    placeholder="Whatsapp" 
                    maxLength="15" 
                    onChange={this.changeHandler} 
                    value={this.props.context.state.whatsapp} 
                    required 
                />
                {this.state.error}
            </div>
        );
    }
}

export default InputWhatsapp;