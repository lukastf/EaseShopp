
//usuario
import editarUsuario from './usuario/editarUsuario';
import cadastroUsuario from './usuario/cadastroUsuario';
import cadastroUsuarioAdmin from './usuario/cadastroUsuarioAdmin';
import preCadastro from './usuario/preCadastro';
import removerUsuario from './usuario/removerUsuario';
import extrato from './usuario/extrato';
import extratoSaques from './usuario/extratoSaques';
import contaResgate from './usuario/contaResgate';
import faleConosco from './usuario/faleConosco';
import favoritos from './usuario/favoritos';
import carrinho from './usuario/carrinho';
import entrarUsuario from './usuario/entrarUsuario';
import comoComprar from './usuario/comoComprar';
import minhasCompras from './usuario/minhasCompras';

//parceiro
import cadastroParceiro from './parceiro/cadastroParceiro';
import editarParceiro from './parceiro/editarParceiro';
import removerParceiro from './parceiro/removerParceiro';
import minhasVendas from './parceiro/minhasVendas';
import meusProdutos from './parceiro/meusProdutos';
import entrarParceiro from './parceiro/entrarParceiro';
import solicitacoesConvenio from './parceiro/solicitacoesConvenio';
import solicitacoesParceiros from './parceiro/solicitacoesParceiros';
import listaFaleConosco from './parceiro/listaFaleConosco';
import cadastroCategoria from './parceiro/cadastroCategoria';
import editarCategoria from './parceiro/editarCategoria';

//produto
import cadastroProduto from './produto/cadastroProduto';
import editarProduto from './produto/editarProduto';
import removerProduto from './produto/removerProduto';
import visualizarProduto from './produto/visualizarProduto';

//usuario e parceiro
import conta from './conta';
import visualizarParceiro from './parceiro/visualizarParceiro';
import parceiroProdutos from './parceiro/parceiroProdutos';

import home from './home';
import loja from './loja';
import listarUsuarios from './usuario/listarUsuarios';
import listarParceiros from './parceiro/listarParceiros';
import listarCategorias from './parceiro/listarCategorias';
import esqueciMinhaSenha from './usuario/esqueciMinhaSenha';
import listaEsqueciMinhaSenha from './parceiro/listaEsqueciMinhaSenha';
import sacar from './usuario/sacar';
import mensagem from './mensagem';
import politicaCookies from './politicaCookies';
import quemSomos from './quemSomos';
import validarEmail from './validarEmail';
import listarIndicacoes from './usuario/listarIndicacoes';
import listarResgates from './parceiro/listarResgates';
import sejaUmParceiro from './parceiro/sejaUmParceiro';
import baixarApp from './usuario/baixarApp';
import listarProdutosComprados from './produto/listarProdutosComprados';

const routes = (navbar, props, switchId) => {

    switch (switchId) {

        case "/":
            home(navbar, props);
            break;

        case "/loja":
            loja(navbar, props);
            break;

        case "/editarUsuario":
            editarUsuario(navbar, props);
            break;

        case "/cadastroUsuario":
            cadastroUsuario(navbar, props);
            break;

        case "/cadastroUsuarioAdmin":
            cadastroUsuarioAdmin(navbar, props);
            break;

        case "/removerUsuario":
            removerUsuario(navbar, props);
            break;

        case "/usuarios":
            listarUsuarios(navbar, props);
            break;
        
        case "/indicacoes":
            listarIndicacoes(navbar, props);
            break;

        case "/extrato":
            extrato(navbar, props);
            break;
        
        case "/extratoSaques":
            extratoSaques(navbar, props);
            break;

        case "/contaResgate":
            contaResgate(navbar, props);
            break;

        case "/editarParceiro":
            editarParceiro(navbar, props);
            break;

        case "/cadastroParceiro":
            cadastroParceiro(navbar, props);
            break;

        case "/removerParceiro": 
            removerParceiro(navbar, props);
            break;

        case "/visualizarParceiro":
            visualizarParceiro(navbar, props);
            break;

        case "/parceiroProdutos":
            parceiroProdutos(navbar, props);
            break;

        case "/parceiros":
            listarParceiros(navbar, props);
            break;

        case "/cadastroProduto":
            cadastroProduto(navbar, props);
            break;

        case "/visualizarProduto":
            visualizarProduto(navbar, props);
            break;

        case "/editarProduto":
            editarProduto(navbar, props);
            break;

        case "/removerProduto":
            removerProduto(navbar, props);
            break;

        case "/preCadastro":
            preCadastro(navbar, props);
            break;

        case "/conta":
            conta(navbar, props);
            break;

        case "/minhasVendas":
            minhasVendas(navbar, props);
            break;

        case "/meusProdutos":
            meusProdutos(navbar, props);
            break;

        case "/faleConosco":
            faleConosco(navbar, props);
            break;

        case "/favoritos":
            favoritos(navbar, props);
            break;

        case "/carrinho":
            carrinho(navbar, props);
            break;

        case "/entrarUsuario":
            entrarUsuario(navbar, props);
            break;

        case "/entrarParceiro":
            entrarParceiro(navbar, props);
            break;

        case "/solicitacoesConvenio":
            solicitacoesConvenio(navbar, props);
            break;

        case "/solicitacoesParceiros":
            solicitacoesParceiros(navbar, props);
            break;

        case "/listaFaleConosco":
            listaFaleConosco(navbar, props);
            break;

        case "/cadastroCategoria":
            cadastroCategoria(navbar, props);
            break;

        case "/editarCategoria":
            editarCategoria(navbar, props);
            break;

        case "/listarCategorias":
            listarCategorias(navbar, props);
            break;

        case "/comoComprar":
            comoComprar(navbar, props);
            break;

        case "/esqueciMinhaSenha":
            esqueciMinhaSenha(navbar, props);
            break;
        
        case "/listaEsqueciMinhaSenha":
            listaEsqueciMinhaSenha(navbar, props);
            break;
        
        case "/sacar":
            sacar(navbar, props);
            break;

        case "/mensagem":
            mensagem(navbar, props)
            break;

        case "/minhasCompras":
            minhasCompras(navbar, props)
            break;

        case "/politica-de-cookies-easeshopp":
            politicaCookies(navbar, props);
            break;

        case "/quemSomos":
            quemSomos(navbar, props);
            break;

        case "/validarEmail":
            validarEmail(navbar, props);
            break;

        case "/resgates":
            listarResgates(navbar, props);
            break;
        
        case "/produtosComprados":
            listarProdutosComprados(navbar, props);
            break;

        case "/sejaUmParceiro":
            sejaUmParceiro(navbar, props);
            break;

        case "/baixarApp":
            baixarApp(navbar, props);
            break;

        default:
            break;
    }
}

export default routes;