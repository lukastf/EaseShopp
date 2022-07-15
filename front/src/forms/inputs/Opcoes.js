
import React from 'react';
import checkInputsCols from '../utilidades/checkInputsCols';
import { customInputMsg } from '../cadastroResult';

class InputOpcoes extends React.Component {

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
        this.setState({cols: "col-md-5"});
    }

    changeRetirada = () => {

        let op = this.props.context.state.opcoes;

        let opcoes = {
            retirada: !op.retirada,
            entrega: op.entrega,
            freteGratis: op.freteGratis
        }

        this.checkError(opcoes);

        this.props.context.setState({
            opcoes: opcoes
        });
    }

    changeEntrega = () => {

        let op = this.props.context.state.opcoes;

        let opcoes = {
            retirada: op.retirada,
            entrega: !op.entrega,
            freteGratis: op.freteGratis
        }

        this.checkError(opcoes);

        this.props.context.setState({
            opcoes: opcoes
        });
    }

    changeFreteGratis = () => {

        let op = this.props.context.state.opcoes;

        let opcoes = {
            retirada: op.retirada,
            entrega: op.entrega,
            freteGratis: !op.freteGratis
        }

        this.checkError(opcoes);

        this.props.context.setState({
            opcoes: opcoes
        });
    }

    checkError = (opcoes) => {

        this.setState({error: ""});

        let error = customInputMsg("Selecione uma opção! (retirada na loja ou entrega)");

        if (!opcoes.retirada && !opcoes.entrega)
            this.setState({error: error});
    }

    render(){
        return(
            <div className={this.state.cols + " mt-3"}>

                <label className="checkbox-inline">
                    <input 
                        className="mr-2"
                        type="checkbox" 
                        defaultChecked={this.props.context.state.opcoes.retirada}
                        onClick={this.changeRetirada} 
                    />
                    Retirada na Loja
                </label>
                <label className="checkbox-inline">
                    <input 
                        className="mr-2 ml-5"
                        type="checkbox" 
                        defaultChecked={this.props.context.state.opcoes.entrega}
                        onChange={this.changeEntrega} 
                    />
                    Entrega
                </label>
                <label className="checkbox-inline">
                    <input 
                        className="mr-2 ml-5"
                        type="checkbox" 
                        defaultChecked={this.props.context.state.opcoes.freteGratis}
                        onChange={this.changeFreteGratis} 
                    />
                    Frete Grátis
                </label>
                {this.state.error}
            </div>
        );
    }
}

export default InputOpcoes;