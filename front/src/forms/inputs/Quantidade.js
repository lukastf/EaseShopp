import React from 'react';

import {numberMask} from '../utilidades/masks';

class InputQuantidade extends React.Component {

    constructor(props) {

        super(props);

        this.state = {

            error: "",
            classError: ""
        }
    }

    changeHandler = (e) => {

        let value = numberMask(e.target.value);

        this.props.context.setState({
            quantidade: value
        });

    }

    render(){
        return(
            <div className="col-md-2 mt-3">
                <label htmlFor="quantidade">Quantidade</label>
                <input type="text" className={"form-control " + this.state.classError} 
                id="quantidade" placeholder="Quantidade" maxLength="10"
                onChange={this.changeHandler} value={this.props.context.state.quantidade} required />
                {this.state.error}
            </div>
        );
    }
}

export default InputQuantidade;