
import React from 'react';
import checarComprar from './checarComprar';

class BtnComprar extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            btnComprar: null
        }
    }

    componentDidMount () {
        checarComprar(this);
    }

    btn = () => {

        if(this.props.cardLink) {

            return (
            <p className="card-text">
                {this.state.btnComprar}
            </p>
            );
        }
        
        return(
        <div className="col-12 col-md-4 mb-3">
            {this.state.btnComprar}
        </div>
        );
    }

    render(){
        return(
            <this.btn />
        );
    }
}

export default BtnComprar;