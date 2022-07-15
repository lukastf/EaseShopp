
import React from 'react';
import checkInputsCols from '../utilidades/checkInputsCols';

class InputDescricao extends React.Component {

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

        this.setState({cols: "col-md-8"});
    }

    changeHandler = (e) => {

        let value = e.target.value;

        this.props.context.setState({
            descricao: value
        });

    }

    render(){
        return(
            <div className={this.state.cols + " mt-3"}>
                <label htmlFor="descricao">Descricao</label>
                <textarea 
                    type="text" 
                    className={"form-control " + this.state.classError} 
                    id="descricao" 
                    rows="8"
                    placeholder="Descricao"
                    onChange={this.changeHandler} 
                    value={this.props.context.state.descricao} 
                    required 
                ></textarea>
                {this.state.error}
            </div>
        );
    }
}

export default InputDescricao;