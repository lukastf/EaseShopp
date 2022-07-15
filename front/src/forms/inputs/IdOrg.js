import React from 'react';
import checkInputsCols from '../utilidades/checkInputsCols';

class InputIdOrg extends React.Component {

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
            idOrg: value
        });
    }

    render(){
        return(

            <div className={this.state.cols + " mt-3"}>
                <label htmlFor="idOrg">IdOrg</label>
                <input 
                    type="text" 
                    className={"form-control "+ this.state.classError} 
                    id="idOrg" 
                    placeholder="IdOrg" 
                    onChange={this.changeHandler} 
                    value={this.props.context.state.idOrg} 
                    required 
                />
                {this.state.error}
            </div>
        );
    }
}

export default InputIdOrg;