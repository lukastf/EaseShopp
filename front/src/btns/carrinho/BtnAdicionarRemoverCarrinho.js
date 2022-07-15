
import React from 'react';
import checarCarrinho from './checarCarrinho';

class BtnAdicionarRemoverCarrinho extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            btnAdicionarRemoverCarrinho: null
        }
    }

    componentDidMount () {
        checarCarrinho(this);
    }

    btn = () => {

        if(this.props.cardLink) {

            return (
            <p className="card-text">
                {this.state.btnAdicionarRemoverCarrinho}
            </p>
            );
        }
        
        return(
        <div className="col-12 col-md-4 mb-3">
            {this.state.btnAdicionarRemoverCarrinho}
        </div>
        );
    }

    render(){
        return(
            <this.btn />
        );
    }
}

export default BtnAdicionarRemoverCarrinho;