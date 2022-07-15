

const resetForm = (cadastroParceiro) => {

    cadastroParceiro.setState({

        _id: "",
        nome: "",
        cnpj: "",
        email: "",
        codigo: "",
        senha: "",
        repetirSenha: "",
        telefone: "",
        cep: "",
        estado: "",
        cidade: "",
        endereco: "",
        numeroEndereco: "",
        situacao: "Ativo",
        admin: 0,

        buttonDisabled: "",
        editar: false
    });
}

export default resetForm;