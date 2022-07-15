
import React from 'react';
import checkInputsCols from '../utilidades/checkInputsCols';

class InputCor extends React.Component {

    constructor(props) {

        super(props);

        this.state = {

            cols: "",
            error: "",
            classError: "",
            hideInput: ""
        }
    }

    checarcor = (value) => {

        this.setState({
            hideInput: ""
        });

        if(
            value === "Branco" ||
            value === "Preto" ||
            value === "Verde" ||
            value === "Vermelho" ||
            value === "Amarelo" ||
            value === "Azul"
        ) {
            this.setState({
                hideInput: "d-none"
            });
        }

        this.props.context.setState({
            cor: value
        });
    }

    changeHandler = (e) => {

        let value = e.target.value;
        this.checarcor(value);
    }

    componentDidMount = () => {

        checkInputsCols(this);
        this.checarcor(this.props.context.state.cor);
    }

    render(){
        return(
            <div className={this.state.cols + " mt-3"}>
                <label htmlFor="cor">Cor</label>
                <select 
                    className={"form-control " + this.state.classError} 
                    onChange={this.changeHandler} 
                    value={this.props.context.state.cor} 
                    id="cor"
                >
                    <option value="">Digite ou selecione uma cor</option>
                    <option value="Branco">Branco</option>
                    <option value="Preto">Preto</option>
                    <option value="Verde">Verde</option>
                    <option value="Vermelho">Vermelho</option>
                    <option value="Amarelo">Amarelo</option>
                    <option value="Azul">Azul</option>
                </select>
                <div className={"row form-group justify-content-center col-12 " + this.state.hideLetra}>
                    <input 
                        type="text" 
                        className={"col-md-4 form-control mt-4 " + this.state.hideInput} 
                        id="cor2" 
                        placeholder="Cor" 
                        onChange={this.changeHandler} 
                        value={this.props.context.state.cor} 
                        maxLength="25"
                        required 
                    />
                </div>

                {this.state.error}
            </div>
        );
    }
}

export default InputCor;