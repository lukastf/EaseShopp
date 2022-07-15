import React from 'react';
import checkInputsCols from '../utilidades/checkInputsCols';

class InputSituacao extends React.Component {

    constructor(props) {

        super(props);

        this.state = {

            cols: "",
            value: "",
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
            situacao: value
        });
    }

    render(){
        return(

            <div className={this.state.cols + " mt-3"}>
                <label htmlFor="situacao">Situação</label>
                <select 
                    className="form-control" 
                    onChange={this.changeHandler} 
                    value={this.props.context.state.situacao} 
                    id="situacao"
                >
                    <option value="Ativo">Ativo</option>
                    <option value="Inativo">Inativo</option>
                </select>
            </div>
        );
    }
}

export default InputSituacao;