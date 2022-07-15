import React from 'react';
import checkInputsCols from '../utilidades/checkInputsCols';

class InputEstado extends React.Component {

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
    }

    changeHandler = (e) => {

        let value = e.target.value;

        this.props.context.setState({
            estado: value
        });
    }

    render(){
        return(
            
            <div className={this.state.cols + " mt-3"}>
                <label htmlFor="estado">Estado</label>
                <select 
                    className={"form-control " + this.state.classError} 
                    onChange={this.changeHandler} 
                    value={this.props.context.state.estado} 
                    id="estado"
                >
                    <option value="AC">Acre</option>
                    <option value="AL">Alagoas</option>
                    <option value="AP">Amapá</option>
                    <option value="AM">Amazonas</option>
                    <option value="BA">Bahia</option>
                    <option value="CE">Ceará</option>
                    <option value="DF">Distrito Federal</option>
                    <option value="ES">Espírito Santo</option>
                    <option value="GO">Goiás</option>
                    <option value="MA">Maranhão</option>
                    <option value="MT">Mato Grosso</option>
                    <option value="MS">Mato Grosso do Sul</option>
                    <option value="MG">Minas Gerais</option>
                    <option value="PA">Pará</option>
                    <option value="PB">Paraíba</option>
                    <option value="PR">Paraná</option>
                    <option value="PE">Pernambuco</option>
                    <option value="PI">Piauí</option>
                    <option value="RJ">Rio de Janeiro</option>
                    <option value="RN">Rio Grande do Norte</option>
                    <option value="RS">Rio Grande do Sul</option>
                    <option value="RO">Rondônia</option>
                    <option value="RR">Roraima</option>
                    <option value="SC">Santa Catarina</option>
                    <option value="SP">São Paulo</option>
                    <option value="SE">Sergipe</option>
                    <option value="TO">Tocantins</option>
                </select>
                {this.state.error}
            </div>
        );
    }
}

export default InputEstado;