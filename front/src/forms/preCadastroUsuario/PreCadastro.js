import React from 'react';
import axios from 'axios';
import { serverUrl } from '../../config';
import InputCpf from '../inputs/Cpf';
import InputDataNascimento from '../inputs/DataNascimento';
import InputRg from '../inputs/Rg';
import setRoute from '../../navbar/routes/setRoute';
import routes from '../../navbar/routes/routes';
import { sucessoEmailAtivar } from '../cadastroResult';

class PreCadastro extends React.Component {

    constructor(props) {

            super(props);
            
            this.state = {

            cpf: "",
            rg: "",
            dataNasc: "",
            cadastroResult: "",

            hideRg: "d-none",
            hideCpf: ""
        };
    }

    componentDidMount() {

        if( typeof this.props.cadastroOk != "undefined" && this.props.cadastroOk !== null ) {

            if(this.props.cadastroOk) {

                sucessoEmailAtivar(this);
            }
        }
    }

    resetForm = () => {

        this.setState({

            cpf: "",
            rg: "",
            dataNasc: ""
        });
    }

    sendForm = (e) => {

        e.preventDefault();

        if (typeof(Storage) !== "undefined") {
            // Store
            localStorage.setItem("cpf", this.state.cpf);
            localStorage.setItem("rg", this.state.rg);
            localStorage.setItem("dataNasc", this.state.dataNasc);
        }

        axios.post(serverUrl + "/usuarios/check", {

            cpf: this.state.cpf,
            rg: this.state.rg,
            dataNasc: this.state.dataNasc
        })
        .then((response) => {

            this.resetForm();

            this.props.navbar.setState({
                cadastroPermission: true
            });

            response.data.veioDoPreCadastro = true;

            routes(this.props.navbar, response.data, "/cadastroUsuario");
            setRoute(this.props.navbar, "/cadastroUsuario");

        })
        .catch((error) => {

            console.log(error);

            if (error.response.status === 400) {
                
                setRoute(this.props.navbar, "/preCadastroErro");
            }

            if (error.response.status === 401) {

                this.setState({
                    cadastroResult: 
                    <div className="row justify-content-center col-12 mt-5">
                        <p style={{color:"red"}}>Usuario ja esta Cadastrado</p>
                    </div>
                });
            }

            setTimeout(() => {
                this.setState({ cadastroResult: "" });
            }, 3000);
        });
    }

    rgOuCpf = (e) => {

        let hideRg = "";
        let hideCpf = "";

        if (e.target.value === "rg") hideCpf = "d-none";
        if (e.target.value === "cpf") hideRg = "d-none";


        this.setState({
            hideRg: hideRg,
            hideCpf: hideCpf,
            cpf: "",
            rg: ""
        });
    }

    render() {

        return (  

            <form className="row col-12" id="form">

                <div className="row justify-content-center col-12 mt-5">

                    <div className="col-12 text-center">
                        <h1>Cadastro de Usuario</h1>
                    </div>
                </div>

                <div className={"row justify-content-center col-12 "}>
                    {/*<label htmlFor="situacao">Situação</label>*/}
                    <div className={"col-md-4 mt-3"}>
                        <select 
                            className="form-control" 
                            onChange={this.rgOuCpf} 
                            //value={this.props.context.state.situacao} 
                            //id="situacao"
                        >
                            <option value="cpf">CPF</option>
                            <option value="rg">RG</option>
                        </select>
                    </div>
                </div>

                <div className={"row justify-content-center col-12 " + this.state.hideCpf}>

                    <InputCpf context={this} hideLabel={true} />
                    {/*<div className="row col-12 justify-content-center">
                        <button 
                            className="btn btn-primary col-12 col-md-2" 
                            type="button" 

                            onClick={()=>{ 
                                this.setState({
                                    hideRg: "",
                                    hideCpf: "d-none",
                                    cpf: ""
                                });
                            }}
                        > 
                            Validar por Rg 
                        </button>
                    </div>*/}

                </div>
                <div className={"row justify-content-center col-12 " + this.state.hideRg}>

                    <InputRg context={this} hideLabel={true}/>
                    {/*<div className="row col-12 justify-content-center">
                        <button 
                            className="btn btn-primary col-12 col-md-2" 
                            type="button"

                            onClick={()=>{ 
                                this.setState({
                                    hideRg: "d-none",
                                    hideCpf: "",
                                    rg: ""
                                });
                            }}
                        > 
                            Validar por Cpf 
                        </button>
                    </div>*/}

                </div>
                <div className="row justify-content-center col-12">
                    <InputDataNascimento context={this} />
                </div>
                
                <div className="row justify-content-center col-12 mt-3">
                    <button className="btn btn-primary" type="button" onClick={this.sendForm} >
                        Acessar
                    </button>
                </div>
                {this.state.cadastroResult}
            </form>     
        );
    }
}

export default PreCadastro;