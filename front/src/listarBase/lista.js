import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPencilAlt } from '@fortawesome/free-solid-svg-icons';

import axios from 'axios';
import { serverUrl } from '../config';
import getObjs from './getObjs';
import routes from '../navbar/routes/routes';
import { Link } from 'react-router-dom';
import setRoute from '../navbar/routes/setRoute';

const btnRemoverDireto = (context, obj) => {

    if (context.props.removerDireto === "" || typeof context.props.removerDireto === "undefined" || 
    context.props.removerDireto === false) return;

    const click = async (e) => {

        e.preventDefault();

        let _id = context.props.navbar.props.app.state._id;
        let senha = context.props.navbar.props.app.state.senha;

        //let route = "faleConosco";
        let route = context.props.route;

        await axios.delete(serverUrl + route +"/" + obj._id + "/" + _id + "/" + senha);

        getObjs(context, context.itensPage, context.pageId);
    }

    return(<div className="col-12 col-md-6 mb-3" >
        <button
            type="button" 
            onClick={click}
            className="btn btn-danger btn-lg btn-block"> Remover <FontAwesomeIcon icon={faTrash} />
        </button>
    </div>);
}

const btnRemover = (context, obj) => {

    if (context.props.remover === "" || typeof context.props.remover === "undefined") return;

    let remover = context.props.remover;

    const click = (e) => {

        e.preventDefault();

        setRoute(context.props.navbar, remover + "/" + obj._id);
        routes(context.props.navbar, obj, remover);
    }

    return(<div className="col-12 col-md-6 mb-3" >
        <Link to={remover + obj._id }
            type="button" 
            onClick={click}
            className="btn btn-danger btn-lg btn-block"> Remover <FontAwesomeIcon icon={faTrash} />
        </Link>
    </div>);
}

const btnEditar = (context, obj) => {

    if (context.props.editar === "" || typeof context.props.editar === "undefined") return;

    let editar = context.props.editar;

    const click = (e) => {

        e.preventDefault();

        setRoute(context.props.navbar, editar + "/" + obj._id);
        routes(context.props.navbar, obj, editar);
    }

    return(<div className="col-12 col-md-6 mb-3" >
        <Link to={editar + "/" + obj._id }
            type="button" 
            onClick={click}
            className="btn btn-primary btn-lg btn-block"> Editar <FontAwesomeIcon icon={faPencilAlt} />
        </Link>
    </div>);
}

const getObjNome = (obj) => {

    let nome = Object.values(obj)[1];

    return nome;
}

const getObjProps = (obj) => {

    let keys = Object.keys(obj);
    let values = Object.values(obj);
    let result = [];

    for (let i = 0; i  < keys.length; i++) {
        
        result.push(<p key={i}>{keys[i]}: {values[i]}</p>);
    }

    return result;

}

const listaF = (context, paginaSelecionada, listaObjs) => {

    let lista = [];
    let listaDetalhes = [];

    for (let i=0; i < listaObjs.length; i++) {

        let active = "";

        if (i === context.position) {
            active = "active";
        }
        
        lista.push(

            <a key={i} className={"pagina" + paginaSelecionada +" list-group-item list-group-item-action " + active } 
            id={"list-"+ listaObjs[i]._id +"-list"}
            data-toggle="list"
            href={"#list-" + listaObjs[i]._id} 
            role="tab"
            aria-controls={listaObjs[i]._id}
            onClick={()=>context.position = i}
            >
                {getObjNome(listaObjs[i])}
            </a>

        );

        listaDetalhes.push(
            <div key={i} className={"tab-pane fade show " + active} 
            id={"list-" + listaObjs[i]._id} 
            role="tabpanel"
            aria-labelledby={"list-"+listaObjs[i]._id+"-list"}
            >

                <div className="row col-12 btnsLista">
                    {btnEditar(context, listaObjs[i])}
                    {btnRemover(context, listaObjs[i])}
                    {btnRemoverDireto(context, listaObjs[i])}
                </div>

                {getObjProps(listaObjs[i])}

            </div>
        );
    }

    context.setState({
        lista: lista,
        listaDetalhes: listaDetalhes
    });
}

export default listaF;