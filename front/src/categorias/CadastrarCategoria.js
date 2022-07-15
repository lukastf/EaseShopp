import React, { useState, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import Axios from 'axios';
import { serverUrl } from '../config';

const CadastrarCategoria = (props) => {

    const [title, setTitle] = useState(<h1>Cadastro de Categoria</h1>);
    const [nome, setNome] = useState("");
    const [icone, setIcone] = useState("");
    const [iconeText, setIconeText] = useState("");
    const [cadastroResult, setCadastroResult] = useState("");
    const [hideForm, setHideForm] = useState("");

    const [auau, setAuau] = useState(false);
    if (!auau){
        setAuau(true);
        window.scrollTo(0, 0);

        if (props.categoria) {

            setTitle(<h1>Edição de Categoria:</h1>);
            setNome(props.categoria.nome);
            setIconeText(props.categoria.icone);
            setIcone(fas[props.categoria.icone]);
        }

    }

    useEffect(() => {
    });

    const nomeHandler = (e) => {

        setNome(e.target.value);
    }

    const iconeHandler = (e) => {

        setIconeText(e.target.value);
        setIcone(fas[e.target.value]);
    }

    const getIconsOptions = () => {

        let iconsOptions = [];
        let iconsArray = Object.keys(fas);

        for (let i = 0; i < iconsArray.length; i++) {

            iconsOptions.push(<option value={iconsArray[i]}>{iconsArray[i]}</option>);
        }

        return (
            iconsOptions
        );
    }

    const [iconsOptions] = useState(getIconsOptions());

    const sendForm = async () => {

        let _idParceiro = props.navbar.props.app.state._id;
        let senha = props.navbar.props.app.state.senha;

        let obj = {
            nome: nome,
            icone: iconeText,
            _idParceiro: _idParceiro,
            senha: senha
        }

        
        try {

            //let response = undefined;

            let axiosAction = Axios.post;

            if (props.categoria) {

                obj._id = props.categoria._id;
                axiosAction = Axios.put;
            }

            await axiosAction(serverUrl + "/produtos/categoria", obj);

            setHideForm("d-none");

            setCadastroResult(
                <div className="row justify-content-center col-12">
                    <p style={{color:"green"}}>Registrado com sucesso</p>
                </div>
            );

        } catch (e) {

            console.log(e);

            setCadastroResult(
                <div className="row justify-content-center col-12">
                    <p style={{color:"red"}}>Falha ao registrar</p>
                </div>
            );
        }
    }

  return (
    <form className="row col-12 mx-auto mt-4">
        
        <div className={"row col-12 " + hideForm}>

            <div className="col-12 text-center">
                {title}
            </div>

            <div className="row form-group justify-content-center col-12">
                <div className={"col-md-4 mt-3"}>
                    <label htmlFor="nome">Nome</label>
                    <input 
                        type="text" 
                        className="form-control"
                        id="nome" placeholder="Nome"
                        onChange={nomeHandler} 
                        value={nome} 
                        maxLength="55"
                        required
                    />
                </div>
            </div>

            <div className="row form-group justify-content-center col-12">
                <div className={"col-md-4 mt-3"}>
                    <label htmlFor="icone1">Icone por texto</label>
                    <a href="https://fontawesome.com/icons?d=gallery&m=free" target="_blank" rel="noopener noreferrer"> ( Procurar Aqui )</a>
                    <input 
                        type="text" 
                        className="form-control"
                        id="icone1" placeholder="Icone"
                        onChange={iconeHandler} 
                        value={iconeText} 
                        maxLength="55"
                        required
                    />
                </div>
            </div>

            <div className="row form-group justify-content-center col-12">
                <div className={"col-md-4 mt-3"}>
                    <label htmlFor="icone2">Icone por seleção</label>
                    <select 
                        className={"form-control "} 
                        onChange={iconeHandler} 
                        value={iconeText} 
                        id="icone2"
                    >
                        {iconsOptions}
                    </select>
                </div>
            </div>

            <div className="row form-group justify-content-center col-12">
                <div className="row m-2 categorias">
                    <div className="sqr my-4 mx-3 sqr-selecionado" style={{cursor: "auto"}}>
                        <FontAwesomeIcon style={{marginTop: "2rem"}} className="icone-principal" icon={icone} />
                        <p> {nome} </p>
                    </div>
                </div>
            </div>

            <div className="row form-group justify-content-center col-12">
                <button 
                    className="btn btn-success btn-lg m-4" 
                    type="button" 
                    onClick={sendForm}
                    >  
                    Cadastrar 
                </button>
            </div>

        </div>

        {cadastroResult}

    </form>
  );
}

export default CadastrarCategoria;