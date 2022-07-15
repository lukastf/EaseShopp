import React from 'react';
import checkInputsCols from '../utilidades/checkInputsCols';

class InputReceberStatusWhats extends React.Component {

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

    changeHandler = () => {

        let value = !this.props.context.state.receberStatusWhats;

        this.props.context.setState({
            receberStatusWhats: value
        });
    }

    render(){
        return(

            <div className={this.state.cols + " mt-3"}>
                <label className="checkbox-inline mt-4">
                    <input 
                        className="mr-2"
                        type="checkbox" 
                        defaultChecked={this.props.context.state.receberStatusWhats}
                        onClick={this.changeHandler} 
                    />
                    Receber status das operações ainda mais rápido pelo WhatsApp/Sms
                </label>
            </div>
        );
    }
}

export default InputReceberStatusWhats;