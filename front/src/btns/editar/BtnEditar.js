
import React from 'react';
import checarEditar from './checarEditar';

class BtnEditar extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            btnEditar: null
        }
    }

    componentDidMount () {
        checarEditar(this);
    }

    btn = () => {

        if(this.props.cardLink) {

            return (
            <p className="card-text">
                {this.state.btnEditar}
            </p>
            );
        }
        
        return(
        <div className="col-12 col-md-5 mb-3">
            {this.state.btnEditar}
        </div>
        );
    }

    render(){
        return(
            <this.btn />
        );
    }
}

export default BtnEditar;