import React from 'react';
import checkInputsCols from '../utilidades/checkInputsCols';

class InputAdministrador extends React.Component {

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
            admin: value
        });
    }

    render(){
        return(
            <div className={this.state.cols + " mt-3"}>
                <label htmlFor="numeroEndereco">Administrador</label>
                <select 
                    className={"form-control " + this.state.classError} 
                    onChange={this.changeHandler} 
                    value={this.props.context.state.admin} 
                    id="admin"
                >
                    <option value={0}>Não</option>
                    <option value={1}>Sim</option>
                </select>
            </div>
        );
    }
}

export default InputAdministrador;