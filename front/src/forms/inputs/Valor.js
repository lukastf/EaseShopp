import React from 'react';
import { moneyMask } from '../utilidades/masks';

class InputValor extends React.Component {

    constructor(props) {

        super(props);

        this.state = {

            error: "",
            classError: ""
        }
    }

    changeHandler = (e) => {

        let value = moneyMask(e.target.value);

        this.props.context.setState({
            valor: value
        });

    }

    render(){
        return(
            <div className="col-md-2 mt-3">

                <label htmlFor="valor">Valor em R$</label>
                <input 
                    type="text" 
                    className={"form-control " + this.state.classError} 
                    placeholder="Valor" 
                    maxLength="10" 
                    onChange={this.changeHandler} 
                    value={this.props.context.state.valor} 
                    required 
                />

                {this.state.error}

            </div>
        );
    }
}

export default InputValor;