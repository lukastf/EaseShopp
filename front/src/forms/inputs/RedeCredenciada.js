import React from 'react';
import checkInputsCols from '../utilidades/checkInputsCols';

class InputRedeCredenciada extends React.Component {

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
            //this.checkRg(this.props.context.state.redeCredenciada);
    }

    changeHandler = (e) => {

        let value = e.target.value;

        this.props.context.setState({
            redeCredenciada: value
        });
    }

    render(){
        return(

            <div className={this.state.cols + " mt-3"}>
                <label htmlFor="Rede Credenciada">Rede Credenciada</label>
                <input 
                    type="text" 
                    className={"form-control "+ this.state.classError} 
                    id="redeCredenciada" 
                    placeholder="Rede Credenciada" 
                    onChange={this.changeHandler} 
                    value={this.props.context.state.redeCredenciada} 
                    required 
                />
                {this.state.error}
            </div>
        );
    }
}

export default InputRedeCredenciada;