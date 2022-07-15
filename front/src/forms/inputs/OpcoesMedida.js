
import React from 'react';
import checkInputsCols from '../utilidades/checkInputsCols';
//import { moneyMask } from '../utilidades/masks';

class InputOpcoesMedida extends React.Component {

    constructor(props) {

        super(props);

        this.state = {

            cols: "",
            hideVoltagem: "d-none",
            hideTamRoupas: "d-none",
            hideTamCalcados: "d-none"
            //opcoesMedida: "",
            //voltagem: "",
            //tamanhoRoupas: "",
            //tamanhoCalcados: ""
        }
    }

    changeTipo = (e) => {

        let opcoesMedida = e.target.value;

        this.setState({ 
            hideVoltagem: "d-none",
            hideTamRoupas: "d-none",
            hideTamCalcados: "d-none"
        });

        if (opcoesMedida === "Voltagem") this.setState({ hideVoltagem: "" });
        if (opcoesMedida === "TamanhoRoupas") this.setState({ hideTamRoupas: "" });
        if (opcoesMedida === "TamanhoCalcados") this.setState({ hideTamCalcados: "" });

        //resetar outros valores
        //this.props.context.setState({
        //});

        this.props.context.setState({
            opcoesMedida: opcoesMedida
        });
    }

    componentDidMount = () => {

        checkInputsCols(this);

        let opcoesMedida = this.props.context.state.opcoesMedida;

        if (opcoesMedida === "Voltagem") this.setState({ hideVoltagem: "" });
        if (opcoesMedida === "TamanhoRoupas") this.setState({ hideTamRoupas: "" });
        if (opcoesMedida === "TamanhoCalcados") this.setState({ hideTamCalcados: "" });

        //this.props.context.setState({
        //    opcoesMedida: this.props.context.state.opcoesMedida
        //});
    }

    changeVoltagem = (val) => {

        let voltagem = this.props.context.state.voltagem;

        if (voltagem.includes(val)) {

            for (let i = 0; i < voltagem.length; i++) {

                if (voltagem[i] === val) {
            
                    voltagem.splice(i, 1);
                }
            }

        } else {

            voltagem.push(val);
        }

        this.props.context.setState({
            voltagem: voltagem
        });
    }

    changeTamRoupas = (val) => {

        let tamanhoRoupas = this.props.context.state.tamanhoRoupas;

        if (tamanhoRoupas.includes(val)) {

            for (let i = 0; i < tamanhoRoupas.length; i++) {

                if (tamanhoRoupas[i] === val) {
            
                    tamanhoRoupas.splice(i, 1);
                }
            }

        } else {

            tamanhoRoupas.push(val);
        }

        this.props.context.setState({
            tamanhoRoupas: tamanhoRoupas
        });
    }

    changeTamCalcados = (val) => {

        let tamanhoCalcados = this.props.context.state.tamanhoCalcados;

        if (tamanhoCalcados.includes(val)) {

            for (let i = 0; i < tamanhoCalcados.length; i++) {

                if (tamanhoCalcados[i] === val) {
            
                    tamanhoCalcados.splice(i, 1);
                }
            }

        } else {

            tamanhoCalcados.push(val);
        }

        this.props.context.setState({
            tamanhoCalcados: tamanhoCalcados
        });
    }

    checkVoltagem = (val) => {

        let voltagem = this.props.context.state.voltagem;

        if (voltagem.includes(val)) {
            return true
        }

        return false
    }

    checkTamRoupas = (val) => {

        let tamanhoRoupas = this.props.context.state.tamanhoRoupas;

        if (tamanhoRoupas.includes(val)) {
            return true
        }

        return false
    }

    checkTamCalcados = (val) => {

        let tamanhoCalcados = this.props.context.state.tamanhoCalcados;

        if (tamanhoCalcados.includes(val)) {
            return true
        }

        return false
    }

    render(){
        return(
            <>
            <div className={this.state.cols + " mt-3"}>
                <label htmlFor="opcoesMedida"> Opções de Medida </label>
                <select 
                    className={"form-control "} 
                    onChange={this.changeTipo} 
                    value={this.props.context.state.opcoesMedida} 
                    id="opcoesMedida"
                >
                    <option value="Nenhuma">Nenhuma</option>
                    <option value="Voltagem">Voltagem</option>
                    <option value="TamanhoRoupas">Tamanho (Roupas)</option>
                    <option value="TamanhoCalcados">Tamanho (Calçados)</option>
                </select>
            </div>

            <div className={"row form-group justify-content-center col-12 " + this.state.hideVoltagem}>
                <div className={"col-md-6 mt-3"}>
                    <label className="checkbox-inline">
                        <input 
                            className="mr-2"
                            type="checkbox" 
                            defaultChecked={this.checkVoltagem("110v")}
                            onClick={()=>{this.changeVoltagem("110v")}}
                            //checked={true}
                        />
                        110v
                    </label>
                    <label className="checkbox-inline">
                        <input 
                            className="mr-2 ml-5"
                            type="checkbox" 
                            defaultChecked={this.checkVoltagem("220v")}
                            onChange={()=>{this.changeVoltagem("220v")}}
                        />
                        220v
                    </label>
                    <label className="checkbox-inline">
                        <input 
                            className="mr-2 ml-5"
                            type="checkbox" 
                            defaultChecked={this.checkVoltagem("Bivolt (manual)")}
                            onChange={()=>{this.changeVoltagem("Bivolt (manual)")}}
                        />
                        Bivolt (manual)
                    </label>
                    <label className="checkbox-inline">
                        <input 
                            className="mr-2 ml-5"
                            type="checkbox" 
                            defaultChecked={this.checkVoltagem("Bivolt (automatico)")}
                            onChange={()=>{this.changeVoltagem("Bivolt (automatico)")}}
                        />
                        Bivolt (automatico)
                    </label>
                </div>
            </div>

            <div className={"row form-group justify-content-center col-12 " + this.state.hideTamRoupas}>
                <div className={"col-md-5 mt-3"}>
                    <label className="checkbox-inline">
                        <input 
                            className="mr-2"
                            type="checkbox" 
                            defaultChecked={this.checkTamRoupas("PP")}
                            onClick={()=>{this.changeTamRoupas("PP")}}
                        />
                        PP
                    </label>
                    <label className="checkbox-inline">
                        <input 
                            className="mr-2 ml-5"
                            type="checkbox" 
                            defaultChecked={this.checkTamRoupas("P")}
                            onChange={()=>{this.changeTamRoupas("P")}}
                        />
                        P
                    </label>
                    <label className="checkbox-inline">
                        <input 
                            className="mr-2 ml-5"
                            type="checkbox" 
                            defaultChecked={this.checkTamRoupas("M")}
                            onChange={()=>{this.changeTamRoupas("M")}}
                        />
                        M
                    </label>
                    <label className="checkbox-inline">
                        <input 
                            className="mr-2 ml-5"
                            type="checkbox" 
                            defaultChecked={this.checkTamRoupas("G")}
                            onChange={()=>{this.changeTamRoupas("G")}}
                        />
                        G
                    </label>
                    <label className="checkbox-inline">
                        <input 
                            className="mr-2 ml-5"
                            type="checkbox" 
                            defaultChecked={this.checkTamRoupas("GG")}
                            onChange={()=>{this.changeTamRoupas("GG")}}
                        />
                        GG
                    </label>
                    <label className="checkbox-inline">
                        <input 
                            className="mr-2 ml-5"
                            type="checkbox" 
                            defaultChecked={this.checkTamRoupas("XG")}
                            onChange={()=>{this.changeTamRoupas("XG")}}
                        />
                        XG
                    </label>
                    <label className="checkbox-inline">
                        <input 
                            className="mr-2 ml-5"
                            type="checkbox" 
                            defaultChecked={this.checkTamRoupas("XGG")}
                            onChange={()=>{this.changeTamRoupas("XGG")}}
                        />
                        XGG
                    </label>
                    <label className="checkbox-inline">
                        <input 
                            className="mr-2 ml-5"
                            type="checkbox" 
                            defaultChecked={this.checkTamRoupas("EG")}
                            onChange={()=>{this.changeTamRoupas("EG")}}
                        />
                        EG
                    </label>
                    <label className="checkbox-inline">
                        <input 
                            className="mr-2 ml-5"
                            type="checkbox" 
                            defaultChecked={this.checkTamRoupas("EGG")}
                            onChange={()=>{this.changeTamRoupas("EGG")}}
                        />
                        EGG
                    </label>
                </div>
            </div>

            <div className={"row form-group justify-content-center col-12 " + this.state.hideTamCalcados}>
                <div className={"row col-md-6 mt-3"}>
                    <label className="checkbox-inline">
                        <input 
                            className="mr-2"
                            type="checkbox" 
                            defaultChecked={this.checkTamCalcados(14)}
                            onClick={()=>{this.changeTamCalcados(14)}}
                        />
                        14
                    </label>
                    <label className="checkbox-inline">
                        <input 
                            className="mr-2 ml-5"
                            type="checkbox" 
                            defaultChecked={this.checkTamCalcados(15)}
                            onChange={()=>{this.changeTamCalcados(15)}}
                        />
                        15
                    </label>
                    <label className="checkbox-inline">
                        <input 
                            className="mr-2 ml-5"
                            type="checkbox" 
                            defaultChecked={this.checkTamCalcados(16)}
                            onChange={()=>{this.changeTamCalcados(16)}}
                        />
                        16
                    </label>
                    <label className="checkbox-inline">
                        <input 
                            className="mr-2 ml-5"
                            type="checkbox" 
                            defaultChecked={this.checkTamCalcados(17)}
                            onChange={()=>{this.changeTamCalcados(17)}}
                        />
                        17
                    </label>
                    <label className="checkbox-inline">
                        <input 
                            className="mr-2 ml-5"
                            type="checkbox" 
                            defaultChecked={this.checkTamCalcados(18)}
                            onChange={()=>{this.changeTamCalcados(18)}}
                        />
                        18
                    </label>
                    <label className="checkbox-inline">
                        <input 
                            className="mr-2 ml-5"
                            type="checkbox" 
                            defaultChecked={this.checkTamCalcados(19)}
                            onChange={()=>{this.changeTamCalcados(19)}}
                        />
                        19
                    </label>
                {/*</div>
                <div className={"row col-md-5 mt-3"}>*/}
                    <label className="checkbox-inline">
                        <input 
                            className="mr-2 ml-5"
                            type="checkbox" 
                            defaultChecked={this.checkTamCalcados(20)}
                            onChange={()=>{this.changeTamCalcados(20)}}
                        />
                        20
                    </label>
                    <label className="checkbox-inline">
                        <input 
                            className="mr-2 ml-5"
                            type="checkbox" 
                            defaultChecked={this.checkTamCalcados(21)}
                            onChange={()=>{this.changeTamCalcados(21)}}
                        />
                        21
                    </label>
                    <label className="checkbox-inline">
                        <input 
                            className="mr-2 ml-5"
                            type="checkbox" 
                            defaultChecked={this.checkTamCalcados(22)}
                            onChange={()=>{this.changeTamCalcados(22)}}
                        />
                        22
                    </label>
                    <label className="checkbox-inline">
                        <input 
                            className="mr-2 ml-5"
                            type="checkbox" 
                            defaultChecked={this.checkTamCalcados(23)}
                            onChange={()=>{this.changeTamCalcados(23)}}
                        />
                        23
                    </label>
                    <label className="checkbox-inline">
                        <input 
                            className="mr-2 ml-5"
                            type="checkbox" 
                            defaultChecked={this.checkTamCalcados(24)}
                            onChange={()=>{this.changeTamCalcados(24)}}
                        />
                        24
                    </label>
                {/*</div>
                <div className={"row col-md-5 mt-3"}>*/}
                    <label className="checkbox-inline">
                        <input 
                            className="mr-2 ml-5"
                            type="checkbox" 
                            defaultChecked={this.checkTamCalcados(25)}
                            onChange={()=>{this.changeTamCalcados(25)}}
                        />
                        25
                    </label>
                    <label className="checkbox-inline">
                        <input 
                            className="mr-2 ml-5"
                            type="checkbox" 
                            defaultChecked={this.checkTamCalcados(26)}
                            onChange={()=>{this.changeTamCalcados(26)}}
                        />
                        26
                    </label>
                    <label className="checkbox-inline">
                        <input 
                            className="mr-2 ml-5"
                            type="checkbox" 
                            defaultChecked={this.checkTamCalcados(27)}
                            onChange={()=>{this.changeTamCalcados(27)}}
                        />
                        27
                    </label>
                    <label className="checkbox-inline">
                        <input 
                            className="mr-2 ml-5"
                            type="checkbox" 
                            defaultChecked={this.checkTamCalcados(28)}
                            onChange={()=>{this.changeTamCalcados(28)}}
                        />
                        28
                    </label>
                    <label className="checkbox-inline">
                        <input 
                            className="mr-2 ml-5"
                            type="checkbox" 
                            defaultChecked={this.checkTamCalcados(29)}
                            onChange={()=>{this.changeTamCalcados(29)}}
                        />
                        29
                    </label>
                    <label className="checkbox-inline">
                        <input 
                            className="mr-2 ml-5"
                            type="checkbox" 
                            defaultChecked={this.checkTamCalcados(30)}
                            onChange={()=>{this.changeTamCalcados(30)}}
                        />
                        30
                    </label>
                    <label className="checkbox-inline">
                        <input 
                            className="mr-2 ml-5"
                            type="checkbox" 
                            defaultChecked={this.checkTamCalcados(31)}
                            onChange={()=>{this.changeTamCalcados(31)}}
                        />
                        31
                    </label>
                    <label className="checkbox-inline">
                        <input 
                            className="mr-2 ml-5"
                            type="checkbox" 
                            defaultChecked={this.checkTamCalcados(32)}
                            onChange={()=>{this.changeTamCalcados(32)}}
                        />
                        32
                    </label>
                    <label className="checkbox-inline">
                        <input 
                            className="mr-2 ml-5"
                            type="checkbox" 
                            defaultChecked={this.checkTamCalcados(33)}
                            onChange={()=>{this.changeTamCalcados(33)}}
                        />
                        33
                    </label>
                    <label className="checkbox-inline">
                        <input 
                            className="mr-2 ml-5"
                            type="checkbox" 
                            defaultChecked={this.checkTamCalcados(34)}
                            onChange={()=>{this.changeTamCalcados(34)}}
                        />
                        34
                    </label>
                    <label className="checkbox-inline">
                        <input 
                            className="mr-2 ml-5"
                            type="checkbox" 
                            defaultChecked={this.checkTamCalcados(35)}
                            onChange={()=>{this.changeTamCalcados(35)}}
                        />
                        35
                    </label>
                    <label className="checkbox-inline">
                        <input 
                            className="mr-2 ml-5"
                            type="checkbox" 
                            defaultChecked={this.checkTamCalcados(36)}
                            onChange={()=>{this.changeTamCalcados(36)}}
                        />
                        36
                    </label>
                    <label className="checkbox-inline">
                        <input 
                            className="mr-2 ml-5"
                            type="checkbox" 
                            defaultChecked={this.checkTamCalcados(37)}
                            onChange={()=>{this.changeTamCalcados(37)}}
                        />
                        37
                    </label>
                    <label className="checkbox-inline">
                        <input 
                            className="mr-2 ml-5"
                            type="checkbox" 
                            defaultChecked={this.checkTamCalcados(38)}
                            onChange={()=>{this.changeTamCalcados(38)}}
                        />
                        38
                    </label>
                    <label className="checkbox-inline">
                        <input 
                            className="mr-2 ml-5"
                            type="checkbox" 
                            defaultChecked={this.checkTamCalcados(39)}
                            onChange={()=>{this.changeTamCalcados(39)}}
                        />
                        39
                    </label>
                    <label className="checkbox-inline">
                        <input 
                            className="mr-2 ml-5"
                            type="checkbox" 
                            defaultChecked={this.checkTamCalcados(40)}
                            onChange={()=>{this.changeTamCalcados(40)}}
                        />
                        40
                    </label>
                    <label className="checkbox-inline">
                        <input 
                            className="mr-2 ml-5"
                            type="checkbox" 
                            defaultChecked={this.checkTamCalcados(41)}
                            onChange={()=>{this.changeTamCalcados(41)}}
                        />
                        41
                    </label>
                    <label className="checkbox-inline">
                        <input 
                            className="mr-2 ml-5"
                            type="checkbox" 
                            defaultChecked={this.checkTamCalcados(42)}
                            onChange={()=>{this.changeTamCalcados(42)}}
                        />
                        42
                    </label>
                    <label className="checkbox-inline">
                        <input 
                            className="mr-2 ml-5"
                            type="checkbox" 
                            defaultChecked={this.checkTamCalcados(43)}
                            onChange={()=>{this.changeTamCalcados(43)}}
                        />
                        43
                    </label>
                    <label className="checkbox-inline">
                        <input 
                            className="mr-2 ml-5"
                            type="checkbox" 
                            defaultChecked={this.checkTamCalcados(44)}
                            onChange={()=>{this.changeTamCalcados(44)}}
                        />
                        44
                    </label>
                    <label className="checkbox-inline">
                        <input 
                            className="mr-2 ml-5"
                            type="checkbox" 
                            defaultChecked={this.checkTamCalcados(45)}
                            onChange={()=>{this.changeTamCalcados(45)}}
                        />
                        45
                    </label>
                    <label className="checkbox-inline">
                        <input 
                            className="mr-2 ml-5"
                            type="checkbox" 
                            defaultChecked={this.checkTamCalcados(46)}
                            onChange={()=>{this.changeTamCalcados(46)}}
                        />
                        46
                    </label>
                    <label className="checkbox-inline">
                        <input 
                            className="mr-2 ml-5"
                            type="checkbox" 
                            defaultChecked={this.checkTamCalcados(47)}
                            onChange={()=>{this.changeTamCalcados(47)}}
                        />
                        47
                    </label>
                    <label className="checkbox-inline">
                        <input 
                            className="mr-2 ml-5"
                            type="checkbox" 
                            defaultChecked={this.checkTamCalcados(48)}
                            onChange={()=>{this.changeTamCalcados(48)}}
                        />
                        48
                    </label>
                    <label className="checkbox-inline">
                        <input 
                            className="mr-2 ml-5"
                            type="checkbox" 
                            defaultChecked={this.checkTamCalcados(49)}
                            onChange={()=>{this.changeTamCalcados(49)}}
                        />
                        49
                    </label>
                    <label className="checkbox-inline">
                        <input 
                            className="mr-2 ml-5"
                            type="checkbox" 
                            defaultChecked={this.checkTamCalcados(50)}
                            onChange={()=>{this.changeTamCalcados(50)}}
                        />
                        50
                    </label>
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

export default InputOpcoesMedida;