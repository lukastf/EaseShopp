

import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faArrowCircleLeft,
  faArrowCircleRight
} from '@fortawesome/free-solid-svg-icons';

import styles from './ListarResgate.module.css';
import axios from 'axios';
import {serverUrl} from '../config'

export default function ListarResgates(props) {

    //const [pages, setPages] = useState([]);

    const _idParceiro = props.navbar.props.app.state._id;
    const senha = props.navbar.props.app.state.senha;

    const [pagesRenderState, setPagesRenderState] = useState([]);
    const [renderList, setRenderList] = useState([]);
    const [renderListContent, setRenderListContent] = useState([]);
    //const [selectedPage, setSelectedPage] = useState();

    const mountList = async (pageId, pesquisaStr) => {

        let list = [];

        try {

            list = await axios.get(serverUrl + "/usuarios/admin/"+ _idParceiro + "/" + senha + 
            "/itensPage/"+ 2 + "/pesquisaString/" + pesquisaStr + "/pageId/"+ pageId);

            list = list.data;

        } catch {

            list = [];
        }

        var temp = [];
        var temp2 = [];

        for (let i = 0; i < list.length; i++) {

            temp.push(
                <a key={i} className={"pagina list-group-item list-group-item-action " } 
                    id={"list-"+ list[i]._id +"-list"}
                    data-toggle="list"
                    href={"#list-" + list[i]._id} 
                    role="tab"
                    aria-controls={list[i]._id}
                    //onClick={()=>context.position = i}
                    >
                        {list[i].nome}
                </a>
            );

            temp2.push(
                <div key={i} className={"tab-pane fade show "} 
                id={"list-" + list[i]._id} 
                role="tabpanel"
                aria-labelledby={"list-"+ list[i]._id +"-list"}
                >
                    <p key={1}>nome: {list[i].nome}</p>
                    <p key={1}>cpf: {list[i].cpf}</p>
                    <p key={1}>email: {list[i].email}</p>
                    <p key={1}>endereco: {list[i].endereco}</p>
                </div>
            );
        }

        setRenderList(temp);
        setRenderListContent(temp2);
    }

    const mountPagination = (pages, selectedPage, pesquisaStr) => {

        mountList(selectedPage, pesquisaStr);

        const setaRight = () => {

            for (let i = 0; i < pages.length; i++) {

                if (selectedPage === pages[i]) {

                    if (typeof pages[i+1] !== "undefined")
                    mountPagination(pages, pages[i+1], pesquisaStr);
                }
            }
        }
    
        const setaLeft = () => {

            for (let i = 0; i < pages.length; i++) {

                if (selectedPage === pages[i]) {

                    if (typeof pages[i-1] !== "undefined")
                    mountPagination(pages, pages[i-1], pesquisaStr);
                }
            }
        }

        const changePage = (e) => {

            let id = e.target.id;
    
            mountPagination(pages, id, pesquisaStr);
        }

        

        let display = [];
        let active = [];

        for (let i = 0; i < pages.length; i++) {

            display[i] = "d-none";
            active[i] = "";

            if (i === 0 || i === pages.length-1) display[i] = ""
        }

        for (let i = 0; i < pages.length; i++) {
            
            if (selectedPage === pages[i]) {

                active[i] = "active"

                display[i-2] = "";
                display[i-1] = "";
                display[i] = "";
                display[i+1] = "";
                display[i+2] = "";
            }
        }

        let pagesRender = [];

        pagesRender.push(
        <li className="page-item d-none d-md-block">
            <button className="page-link" tabIndex="-1" style={{padding: "0.23rem"}}>
                <FontAwesomeIcon 
                    onClick={setaLeft}
                    className={"btn icone-principal " + styles.setasImg} 
                    icon={faArrowCircleLeft} />
            </button>
        </li>);

        for (let i = 0; i < pages.length; i++) {

            pagesRender.push(
                <li className={"page-item "  + display[i] + " " + active[i]}>
                    <button className={"page-link"}
                        onClick={changePage} id={pages[i]} >
                        {i+1}
                    </button>
                </li>
            );

        }

        pagesRender.push(
        <li className="page-item d-none d-md-block">
            <button className="page-link" style={{padding: "0.23rem"}}>
                <FontAwesomeIcon 
                    onClick={setaRight}
                    className={"btn icone-principal " + styles.setasImg}
                    icon={faArrowCircleRight} />
            </button>
        </li>);

        setPagesRenderState(pagesRender);

    }

    const getUsuariosPagination = async (pesquisaStr = "undefined") => {

        let pages = [];

        try {

            pages = await axios.get(serverUrl + "/usuarios/admin/"+ _idParceiro + "/" + senha + 
            "/itensPage/"+ 2 + "/pesquisaString/" + pesquisaStr);

            pages = pages.data;
            
        } catch {

            pages = [];
        }

        
        //setPages(pages);
        mountPagination(pages, pages[0], pesquisaStr);
    }

    const [didMount, setDidMount] = useState(false);

    if (!didMount) {

        setDidMount(true);
        getUsuariosPagination();
    }

    //const [count, setCount] = useState(0);
    const pesquisar = (e) => {

        let v = e.target.value;

        if (v === "") v = "undefined"

        getUsuariosPagination(v);
    }

    return (
    <div className="container-fluid">
        <div className="col-12 justify-content-center mt-5">
            <h1 className="col-12 text-center">Resgates</h1>

            <div className="row justify-content-center m-2">
                <div className="input-group input-group-lg col-9 col-md-5 m-5">
                    <input type="text" className="form-control" aria-label="Large" placeholder="Pesquisar" aria-describedby="inputGroup-sizing-sm"
                    id="pesquisar"
                    onChange={pesquisar} />
                    <div className="input-group-append">
                        <span className="input-group-text" id="inputGroup-sizing-lg"><FontAwesomeIcon icon={faSearch} /></span>
                    </div>
                </div>
            </div>

            <div className="row justify-content-center">
                <nav className="mt-5">
                    <ul className="pagination">
                        {pagesRenderState}   
                    </ul>
                </nav>
            </div>

            <div className="row justify-content-center mt-5">
                <div className="col-12 col-md-4">
                    <div className="list-group" id="list-tab" role="tablist">
                        {renderList}
                    </div>
                </div>
                <div className="col-12 col-md-4">
                    <div className="tab-content" id="nav-tabContent">
                        {renderListContent}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}