
const sair = (app) => {

    app.setState({

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

      carrinho: [],
      favoritos: [],

      carrinhoSession: "",
      usuarioSession: "",
      
      idOrg: "",
      dataInclusao: "",
      situacao: "",
      redeCredenciada: "",
      

      // parceiro

      cnpj: "",
      codigo: "",
      telefone: "",
      admin: 0

    });

    localStorage.lojaVirtualEmail = undefined;
    localStorage.lojaVirtualSenha = undefined;
    localStorage.lojaVirtualCodigo = undefined;
    localStorage.sessionTime = undefined;

}

export default sair;