

import React from 'react';

import axios from 'axios';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowCircleLeft,
  faArrowCircleRight
} from '@fortawesome/free-solid-svg-icons';

import styles from './Paginacao.module.css';

class Paginacao extends React.Component {

    pagina = 0;
    paginas = [];

    constructor(props) {

        super(props);

        this.state = {
            
            listaPaginacao: "",
            displayPaginacao: []
        }
    }

    componentDidMount = () => {

        this.listaPaginacao();
    }

    listaPaginacao = () => {

        axios.get(this.props.url)
        .then((response) => {

            this.paginas = response.data;
            this.pagina = 0;

            this.changePaginacao(this.pagina);
            this.props.atualizarObjs(this.props.itensPage, this.paginas[this.pagina]);
            this.props.changePageId(this.paginas[this.pagina]);
    
        }).catch((error) => {
    
            console.log(error);
    
        });
    }

    changePaginacao = (pagina) => {

        let displayPaginacao = [];
        let listaPaginacao = [];   

        for(let i = 0; i < this.paginas.length; i++) {

            let activePaginacao = "";

            displayPaginacao[i] = "d-none";

            if ( 
                i === 0 ||
                i === pagina -3 ||
                i === pagina -2 || 
                i === pagina -1 ||
                i === pagina || 
                i === pagina + 1 || 
                i === pagina + 2 ||
                i === pagina + 3 ||
                i === this.paginas.length - 1
            ) {

                displayPaginacao[i] = "";

                if (i === pagina) {
                    activePaginacao = "active";
                }

            }

            listaPaginacao.push(
                <li key={i} className={"page-item "+ activePaginacao + " " + displayPaginacao[i]}>
                    <button className={"page-link"}
                        onClick={this.changePage} id={"pagina"+ i} >
                        {i+1}
                    </button>
                </li>
            );
        }

        this.setState({
            displayPaginacao: displayPaginacao,
            listaPaginacao: listaPaginacao
        });
    }

    changePage = (e) => {

        e.preventDefault();

        let pagina = parseInt(e.target.id.split("pagina")[1]);

        this.pagina = pagina;

        this.changePaginacao(this.pagina);

        this.props.atualizarObjs(this.props.itensPage, this.paginas[this.pagina]);
        this.props.changePageId(this.paginas[this.pagina]);
    }

    setaLeft = (e) => {

        e.preventDefault();

        if(this.pagina === 0 ) {
            return;
        }

        this.pagina--;

        this.changePaginacao(this.pagina);

        this.props.atualizarObjs(this.props.itensPage, this.paginas[this.pagina]);
        this.props.changePageId(this.paginas[this.pagina]);
    }

    setaRight = (e) => {

        e.preventDefault();

        if(this.pagina === this.state.listaPaginacao.length -1 ) {
            return;
        }

        this.pagina++;

        this.changePaginacao(this.pagina);

        this.props.atualizarObjs(this.props.itensPage, this.paginas[this.pagina]);
        this.props.changePageId(this.paginas[this.pagina]);
    }

    render(){
        return(
            <div className="row justify-content-center">
                <nav className="mt-5">
                    <ul className="pagination">

                        <li className="page-item d-none d-md-block">
                            <button className="page-link" tabIndex="-1" style={{padding: "0.23rem"}}>
                                <FontAwesomeIcon 
                                    onClick={this.setaLeft}
                                    className={"btn icone-principal " + styles.setasImg} 
                                    icon={faArrowCircleLeft} />
                            </button>
                        </li>

                            {this.state.listaPaginacao}

                        <li className="page-item d-none d-md-block">
                            <button className="page-link" style={{padding: "0.23rem"}}>
                                <FontAwesomeIcon 
                                    onClick={this.setaRight}
                                    className={"btn icone-principal " + styles.setasImg}
                                    icon={faArrowCircleRight} />
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Paginacao;

