import axios from 'axios';
import listaProdutos from './listaProdutos';
import { serverUrl } from '../config';

const getProdutos = (context, categoria, pesquisaString, itensPage, pageId, sort) => {

    //let route = "/parceiro/" + context.props.parceiro._id;
    let route = context.props.route;

    axios.get(

        serverUrl + "/produtos" +
        route +
        "/itensPage/" + itensPage + 
        "/categoria/" + categoria + 
        "/pesquisaString/" + pesquisaString + 
        "/pageId/" + pageId +
        "/sort/" + sort 

    ).then((response) => {

        if (context._isMounted) {
            
            context.setState({
                produtos: response.data
            });
    
            listaProdutos(context);
            
            context.paginacao(

                serverUrl + "/produtos" +
                route +
                "/itensPage/" + itensPage + 
                "/categoria/" + categoria + 
                "/pesquisaString/" + pesquisaString +
                "/sort/" + sort
            );
        }

    }).catch((error) => {

        console.log(error);

    });
}


const changeHandler = (context, categoria, pesquisaString, itensPage, pageId, sort = "-_id") => {

    if (pesquisaString === "" && categoria === "Todos") {

        pesquisaString = "undefined";
        categoria = "undefined";
    }
    else if (pesquisaString === "" && categoria !== "Todos") {

        pesquisaString = "undefined";
    }
    else if (pesquisaString !== "" && categoria === "Todos") {

        categoria = "undefined";
    } 

    getProdutos(context, categoria, pesquisaString, itensPage, pageId, sort);
}

export default changeHandler;

