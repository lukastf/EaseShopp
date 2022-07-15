
import React from 'react';
import checarRemover from './checarRemover';

class BtnRemover extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            btnRemover: null
        }
    }

    componentDidMount () {
        checarRemover(this);
    }

    btn = () => {

        if(this.props.cardLink) {

            return (
            <p className="card-text">
                {this.state.btnRemover}
            </p>
            );
        }
        
        return(
        <div className="col-12 col-md-5 mb-3">
            {this.state.btnRemover}
        </div>
        );
    }

    render(){
        return(
            <this.btn />
        );
    }
}

export default BtnRemover;