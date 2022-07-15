

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { celularMask, cnpjMask } from '../forms/utilidades/masks';
import axios from 'axios';
import { serverUrl } from '../config';

export default function Example () {

    const [cadResult, set_cadResult] = useState(<p></p>);

    const [nomeFantasia, set_nomeFantasia] = useState("");

    const changeNomeFantasia = (e) => {
        let val = e.target.value;
        set_nomeFantasia(val);
    }

    const [cnpj, set_cnpj] = useState("");

    const changeCnpj = (e) => {
        let val = e.target.value;
        val = cnpjMask(val);
        set_cnpj(val);
    }

    const [email, set_email] = useState("");

    const changeEmail = (e) => {
        let val = e.target.value;
        set_email(val);
    }

    const [telefone, set_telefone] = useState("");

    const changeTelefone = (e) => {
        let val = e.target.value;
        val = celularMask(val);
        set_telefone(val);
    }

    const [estado, set_estado] = useState("AC");

    const changeEstado = (e) => {
        let val = e.target.value;
        set_estado(val);
    }

    const [cidade, set_cidade] = useState("");

    const changeCidade = (e) => {
        let val = e.target.value;
        set_cidade(val);
    }

    const enviar = () => {

        let obj = {
            nome: nomeFantasia,
            cnpj: cnpj,
            email: email,
            telefone: telefone,
            estado: estado,
            cidade: cidade
        }

        axios.post(serverUrl + "/parceiros/solicitarParceiros", obj).then((response) => {

            set_cadResult(<p style={{color: "green", marginRight: "3rem"}}>Sucesso ao enviar</p>);

            set_nomeFantasia("");
            set_cnpj("");
            set_email("");
            set_telefone("");
            set_estado("AC");
            set_cidade("");

        }).catch((error) =>{

            set_cadResult(<p style={{color: "red", marginRight: "3rem"}}>Erro ao enviar</p>);
        });

    }

  return (
    <form className="row col-12 mt-4 mx-auto">
        <div className="row mx-auto col-12">
            
            <div className="col-12 text-center">
                <h1>Seja um Parceiro</h1>
            </div>

            <div className={"col-md-4 mt-3"}>
                <label htmlFor="nome">Nome Fantasia</label>
                <input 
                    type="text" 
                    className={"form-control "} 
                    id="nome" placeholder="Nome Fantasia"
                    onChange={changeNomeFantasia} 
                    value={nomeFantasia} 
                    maxLength="55"
                    required
                />
            </div>

            <div className={"col-md-4 mt-3"}>
                <label htmlFor="cnpj">CNPJ</label>
                <input 
                    type="text" 
                    className={"form-control "} 
                    id="cnpj" 
                    placeholder="Digite seu CNPJ"
                    onChange={changeCnpj} 
                    value={cnpj} 
                    required 
                />
            </div>

            <div className={"col-md-4 mt-3"}>
                <label htmlFor="email">Email</label>
                <input 
                    type="email" 
                    className={"form-control "}
                    id="email" 
                    placeholder="Email" 
                    maxLength="55"
                    onChange={changeEmail} 
                    value={email} 
                    required 
                />
            </div>

            <div className={"col-md-4 mt-3"}>
                <label htmlFor="telefone">Telefone</label>
                <input 
                    type="text" 
                    className={"form-control "} 
                    id="telefone" 
                    placeholder="Telefone" 
                    maxLength="15" 
                    onChange={changeTelefone} 
                    value={telefone} 
                    required 
                />
            </div>

            <div className={"col-md-4 mt-3"}>
                <label htmlFor="estado">Estado</label>
                <select 
                    className={"form-control "} 
                    onChange={changeEstado} 
                    value={estado} 
                    id="estado"
                >
                    <option value="AC">Acre</option>
                    <option value="AL">Alagoas</option>
                    <option value="AP">Amapá</option>
                    <option value="AM">Amazonas</option>
                    <option value="BA">Bahia</option>
                    <option value="CE">Ceará</option>
                    <option value="DF">Distrito Federal</option>
                    <option value="ES">Espírito Santo</option>
                    <option value="GO">Goiás</option>
                    <option value="MA">Maranhão</option>
                    <option value="MT">Mato Grosso</option>
                    <option value="MS">Mato Grosso do Sul</option>
                    <option value="MG">Minas Gerais</option>
                    <option value="PA">Pará</option>
                    <option value="PB">Paraíba</option>
                    <option value="PR">Paraná</option>
                    <option value="PE">Pernambuco</option>
                    <option value="PI">Piauí</option>
                    <option value="RJ">Rio de Janeiro</option>
                    <option value="RN">Rio Grande do Norte</option>
                    <option value="RS">Rio Grande do Sul</option>
                    <option value="RO">Rondônia</option>
                    <option value="RR">Roraima</option>
                    <option value="SC">Santa Catarina</option>
                    <option value="SP">São Paulo</option>
                    <option value="SE">Sergipe</option>
                    <option value="TO">Tocantins</option>
                </select>
            </div>

            <div className={"col-md-4 mt-3"}>
                <label htmlFor="cidade">Cidade</label>
                <input 
                    type="text" 
                    className={"form-control "} 
                    id="cidade" 
                    placeholder="Cidade" 
                    maxLength="50" 
                    onChange={changeCidade} 
                    value={cidade} 
                    required 
                />
            </div>

            {/*<InputNome context={this} />
            <InputCnpj context={this} />
            <InputEmail context={this} />
            <InputCodigo context={this} />
            <InputSenha context={this} />
            <InputRepetirSenha context={this} />
            <InputTelefone context={this} />
            <InputCep context={this} />
            <InputEstado context={this} />
            <InputCidade context={this} />
            <InputEndereco context={this} />
            <InputNumeroEndereco context={this} />*/}
        </div>
        
        <div className="row justify-content-end col-12 mt-3">
            {cadResult}
            <button className="btn btn-success btn-lg" 
            type="button" 
            onClick={enviar}
            //disabled={this.state.buttonDisabled} 
            >Enviar <FontAwesomeIcon icon={faPaperPlane} /> </button>
        </div>
    </form>
  );
}