import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery/dist/jquery.js';
import 'bootstrap/dist/js/bootstrap.min.js';

import './App.css';
import Navbar from './navbar/Navbar';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faAngleDoubleUp
} from '@fortawesome/free-solid-svg-icons';
//import { serverUrl, siteUrl } from './config';

class App extends React.Component {

  constructor(props) {

    super(props);

    this.state = {

      route: "",
      url: window.location.href,

      carrinho: [],
      favoritos: [],

      // usuario

      _id: "",
      nome: "",
      cpf: "",
      rg: "",
      email: "",
      senha: "",
      celular: "",
      whatsapp: "",
      dataNasc: "",
      cep: "",
      estado: "",
      cidade: "",
      endereco: "",
      numeroEndereco: "",

      // parceiro

      cnpj: "",
      codigo: "",
      telefone: "",
      admin: 0, 
      year: 0,

      carrinhoSession: "",
      usuarioSession: "",

      idOrg: "",
      dataInclusao: "",
      situacao: "",
      redeCredenciada: "",

      showBackTop: "",
      showBackTopFunc: this.showBackTop
    }
  }

  componentDidMount() {
    
    let d = new Date();
    let year = d.getFullYear();

    this.setState({
      year: year
    });

    this.showBackTop()

  }

  backTop = () => {
    window.scrollTo(0, 0);
  }

  tooltip = (e) => {

    $('[data-toggle="tooltip"]').tooltip();
  }

  showBackTop = (showBackTop = true) => {

    //let arr = window.location.href.split("/");
    //let routeLink = arr.slice(-1)[0];

    //console.log(window.location.href)
    //console.log("miau");

    let temp = "";

    temp = 
      <div className="row justify-content-end text-right col-12 mt-5">
        <p data-toggle="tooltip" data-placement="top" title="voltar ao topo" onMouseEnter={()=>{this.tooltip()}}>
          <FontAwesomeIcon onClick={this.backTop} className="btn text-right voltarAoTopo" icon={faAngleDoubleUp} />
        </p>
      </div>;

    if (!showBackTop) temp = "";

    this.setState({
      showBackTop: temp
    })
  }

  render() {

    return (
      <div>

        <Navbar
          app={this}
        />


        {this.state.showBackTop}

        <div className="text-left footer col-12 row ml-0">
          <div className="col-md-6" style={{borderRight:"solid"}}>
            <p className="pt-3">
              EASE SHOPP | EASE SHOPP INTERMEDIACAO DE NEGOCIOS LTDA | CNPJ: 36.983.467/0001-46
            </p>
            <p className="pt-3">
              EMPRESA LIMITADA - TODOS OS DIREITOS RESERVADOS
            </p>
            <p className="pt-3">
              Copyright © 2020-{this.state.year}
            </p>
            <p className="pt-3">
              RUA JOÃO JOSÉ LUCANIA FERNANDES, 115 | Sala 3 | BAIRRO: SÃO DEOCLECIANO | 
              CEP: 15.057-200 | SÃO JOSÉ DO RIO PRETO/SP | -20.786824, -49.343464
            </p>
            <p className="pt-3">
              Email: sac@easeshopp.com.br | Telefone: (17) 3224-9799
            </p>
          </div>
          {/*<div className="col-md-3">
            <p>
              Email: contato@easeshopp.com.br
            </p>
            <p>
              Telefone: (17) 31218073
            </p>
          </div>*/}
          <div className="col-md-6 mt-5">
            <img className="ml-md-5" src="site_protegido.png" alt="site-protegido" style={{width: "15rem", marginTop: "2rem"}} />
            <img src="selo-ssl-blindado.png" alt="site-protegido" style={{width: "8rem", marginTop: "2rem", marginLeft: "3rem"}} />
          </div>
        </div>
      </div>

    );
  }

}

export default App;
