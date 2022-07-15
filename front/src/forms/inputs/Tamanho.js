
import React from 'react';
import checkInputsCols from '../utilidades/checkInputsCols';
import { moneyMask } from '../utilidades/masks';

class InputTamanho extends React.Component {

    constructor(props) {

        super(props);

        this.state = {

            cols: "",
            hideLarguraAltura: "",
            //hideNumero: "d-none",
            //hideLetra: "d-none"

            //categorias: []
        }
    }

    /*checarTipo = (value) => {

        if(
            value === "Centimetros" ||
            value === "Metros"
        ) {
            this.setState({
                //hideLarguraAltura: "",
                hideNumero: "d-none",
                hideLetra: "d-none"
            });

        } else if (
            value === "Numero"
        ) {
            this.setState({
                //hideLarguraAltura: "d-none",
                hideNumero: "",
                hideLetra: "d-none"
            });

        } else if (
            value === "Letra"
        ) {
            this.setState({
                //hideLarguraAltura: "d-none",
                hideNumero: "d-none",
                hideLetra: ""
            });

        } else {
            this.setState({
                //hideLarguraAltura: "d-none",
                hideNumero: "d-none",
                hideLetra: "d-none"
            });
        }

        this.props.context.setState({
            tipoTamanho: value
        });
    }*/

    changeTipo = (e) => {

        let value = e.target.value;

        this.props.context.setState({
            comprimento: "",
            largura: "",
            altura: "",
            //numero: "",
            //letra: "",
            diametro: ""
        });

        this.props.context.setState({
            tipoTamanho: value
        });

        //this.checarTipo(value);
    }

    componentDidMount = () => {

        checkInputsCols(this);
        //this.checarTipo(this.props.context.state.tipoTamanho);

        this.props.context.setState({
            tipoTamanho: this.props.context.state.tipoTamanho
        });
    }

    changeComprimento = (e) => {

        let value = moneyMask(e.target.value);

        this.props.context.setState({
            comprimento: value
        });
    }

    changeLargura = (e) => {

        let value = moneyMask(e.target.value);

        this.props.context.setState({
            largura: value
        });
    }

    changeAltura = (e) => {

        let value = moneyMask(e.target.value);

        this.props.context.setState({
            altura: value
        });
    }

    /*changeNumero = (e) => {

        //let value = numberMask(e.target.value);
        let value =e.target.value;

        this.props.context.setState({
            numero: value
        });
    }*/

    pesoEnvelope = (value, formato) => {

        if (formato === "3") {

            if (value.includes(",")) value = value.replace(",", ".");
            value = parseFloat(value);
            if (value > 1) value = 1;
            if (isNaN(value)) value = 0; 
            value = String(value);
            if (value.includes(".")) value = value.replace(".", ",");
        }

        return value;
    }

    changePeso = (e) => {

        let value = moneyMask(e.target.value);

        value = this.pesoEnvelope(value, this.props.context.state.formato);

        this.props.context.setState({
            peso: value
        });
    }

    changeDiametro = (e) => {

        let value = moneyMask(e.target.value);

        this.props.context.setState({
            diametro: value
        });
    }

    /*changeLetra = (e) => {

        let value = e.target.value;

        this.props.context.setState({
            letra: value
        });
    }*/

    changeFormato = (e) => {

        let value = e.target.value;

        this.props.context.setState({
            formato: value
        });

        if (value === "3") {

            let peso = this.pesoEnvelope(this.props.context.state.peso, value);
    
            this.props.context.setState({
                peso: peso
            });
        }
    }

    render(){
        return(
            <>
            <div className={this.state.cols + " mt-3"}>
                <label htmlFor="tamanho"> Tamanho <label style={{color: "red"}}>* embalado *</label></label>
                <select 
                    className={"form-control "} 
                    onChange={this.changeTipo} 
                    value={this.props.context.state.tipoTamanho} 
                    id="tamanho"
                >
                    <option value="">Selecione o tipo de tamanho</option>
                    <option value="Centimetros">Centimetros</option>
                    <option value="Metros">Metros</option>
                    {/*<option value="Numero">Numero</option>
                    <option value="Letra">Letra</option>*/}
                </select>
            </div>
            <div className={"row form-group justify-content-center col-12 " + this.state.hideLarguraAltura}>
                <div className="col-md-2 mt-3">
                    <label htmlFor="comprimento"> Comprimento </label>
                    <input 
                        type="text" 
                        className="form-control"
                        id="comprimento" 
                        placeholder="Comprimento" 
                        onChange={this.changeComprimento} 
                        value={this.props.context.state.comprimento} 
                        maxLength="6"
                        required 
                    />
                </div>
                <div className="col-md-2 mt-3">
                    <label htmlFor="largura"> Largura </label>
                    <input 
                        type="text" 
                        className="form-control"
                        id="largura" 
                        placeholder="Largura" 
                        onChange={this.changeLargura} 
                        value={this.props.context.state.largura} 
                        maxLength="6"
                        required 
                    />
                </div>
                <div className="col-md-2 mt-3">
                    <label htmlFor="altura"> Altura </label>
                    <input 
                        type="text" 
                        className="form-control"
                        id="altura" 
                        placeholder="Altura" 
                        onChange={this.changeAltura} 
                        value={this.props.context.state.altura} 
                        maxLength="6"
                        required 
                    />
                </div>
            </div>
            <div className="row form-group justify-content-center col-12 ">
                <div className="col-md-2 mt-3">
                    <label htmlFor="peso"> Peso (em Kg) </label>
                    <input 
                        type="text" 
                        className="form-control"
                        id="peso" 
                        placeholder="Peso (em Kg)" 
                        onChange={this.changePeso} 
                        value={this.props.context.state.peso} 
                        maxLength="6"
                        required 
                    />
                </div>
                <div className="col-md-2 mt-3">
                    <label htmlFor="diametro"> Diametro </label>
                    <input 
                        type="text" 
                        className="form-control"
                        id="diametro" 
                        placeholder="Diametro" 
                        onChange={this.changeDiametro} 
                        value={this.props.context.state.diametro} 
                        maxLength="6"
                        required 
                    />
                </div>
                <div className="col-md-2 mt-3">
                    <label htmlFor="formato"> Formato </label>
                    <select 
                        className="form-control"
                        onChange={this.changeFormato} 
                        value={this.props.context.state.formato} 
                        id="formato"
                    >
                        <option value="">Selecione o formato da encomenda</option>
                        <option value="1">Caixa/Pacote</option>
                        <option value="2">Rolo/Prisma</option>
                        <option value="3">Envelope</option>
                    </select>
                </div>
            </div>
            {/*<div className={"row form-group justify-content-center col-12" + this.state.hideNumero}>
                <div className="col-md-2 mt-3">
                    <input 
                        type="text" 
                        className={"form-control mt-4 " + this.state.hideNumero} 
                        id="numero" 
                        placeholder="Numero" 
                        onChange={this.changeNumero} 
                        value={this.props.context.state.numero} 
                        maxLength="10"
                        required 
                    />
                </div>
            </div>
            <div className={"row form-group justify-content-center col-12 " + this.state.hideLetra}>
                <div className="col-md-2 mt-3">
                    <select 
                        className={"form-control mt-4"} 
                        onChange={this.changeLetra} 
                        value={this.props.context.state.letra} 
                        id="letra"
                    >
                        <option value="">Selecione o tamanho</option>
                        <option value="U">U</option>
                        <option value="P">P</option>
                        <option value="M">M</option>
                        <option value="G">G</option>
                        <option value="GG">GG</option>
                        <option value="XGG">XGG</option>
                    </select>
                </div>
            </div>*/}
            </>
        );
    }
}

export default InputTamanho;