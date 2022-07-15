import React from 'react';
import checkInputsCols from '../utilidades/checkInputsCols';

class InputDataInclusao extends React.Component {

    constructor(props) {

        super(props);

        this.state = {

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
            dataInclusao: value
        });
    }

    render(){
        return(

            <div className={this.state.cols + " mt-3"}>
                <label htmlFor="dataInclusao">Data da Inclusão na Org</label>
                <input 
                    type="text" 
                    className={"form-control "+ this.state.classError} 
                    id="dataInclusao" 
                    placeholder="Data da Inclusão na Org" 
                    onChange={this.changeHandler} 
                    value={this.props.context.state.dataInclusao} 
                    required 
                />
                {this.state.error}
            </div>
        );
    }
}

export default InputDataInclusao;