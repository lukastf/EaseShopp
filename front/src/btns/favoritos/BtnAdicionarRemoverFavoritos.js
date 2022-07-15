
import React from 'react';
import checarFavoritos from './checarFavoritos';

class BtnAdicionarRemoverFavoritos extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            btnAdicionarRemoverFavoritos: null
        }
    }

    componentDidMount () {
        checarFavoritos(this);
    }

    btn = () => {

        if(this.props.cardLink) {

            return (
            <p className="card-text">
                {this.state.btnAdicionarRemoverFavoritos}
            </p>
            );
        }
        
        return(
        <div className="col-12 col-md-4 mb-3">
            {this.state.btnAdicionarRemoverFavoritos}
        </div>
        );
    }

    render(){
        return(
            <this.btn />
        );
    }
}

export default BtnAdicionarRemoverFavoritos;