import { usuarioSessionTime } from '../config';

const entrarUsuario = (app, response) => {

  if (
    response.data.carrinho === undefined || 
    response.data.carrinho === null 
  ) {

    response.data.carrinho = [];
  }

  if (
    response.data.favoritos === undefined || 
    response.data.favoritos === null 
  ) {

    response.data.favoritos = [];
  }
  
  let favoritos = [];
  let carrinho = [];

  app.setState({

    // usuario

    _id: response.data._id,
    nome: response.data.nome,
    cpf: response.data.cpf,
    rg: response.data.rg,
    email: response.data.email,
    senha: response.data.senha,
    celular: response.data.celular,
    whatsapp: response.data.whatsapp,
    dataNasc: response.data.dataNasc,
    cep: response.data.cep,
    estado: response.data.estado,
    cidade: response.data.cidade,
    endereco: response.data.endereco,
    numeroEndereco: response.data.numeroEndereco,

    carrinho: carrinho,
    favoritos: favoritos,

    responseFavoritos: response.data.favoritos,
    responseCarrinho: response.data.carrinho,

    carrinhoSession: response.data.carrinhoSession,
    usuarioSession: usuarioSessionTime(),
    
    idOrg: response.data.idOrg,
    dataInclusao: response.data.dataInclusao,
    situacao: response.data.situacao,
    redeCredenciada: response.data.redeCredenciada,

    // parceiro

    cnpj: response.data.cnpj,
    codigo: response.data.codigo,
    telefone: response.data.telefone,

    admin: response.data.admin

  });
  
  localStorage.lojaVirtualEmail = response.data.emailCrypto;
  localStorage.lojaVirtualSenha = response.data.senhaCrypto;
  localStorage.lojaVirtualCodigo = response.data.codigoCrypto;
  localStorage.intervalo = "false";
}

export default entrarUsuario;