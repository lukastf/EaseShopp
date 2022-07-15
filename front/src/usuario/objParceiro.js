

const objParceiro = (context) => {

    if (!context) {
        
        context = {

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

            usuarioSession: "",

            situacao: "Ativo",

            admin: 0
        }
    }

    let obj = {

        _id: context._id,
        nome: context.nome,
        cnpj: context.cnpj,
        email: context.email,
        codigo: context.codigo,
        senha: context.senha,
        repetirSenha: context.senha,
        telefone: context.telefone,
        cep: context.cep,
        estado: context.estado,
        cidade: context.cidade,
        endereco: context.endereco,
        numeroEndereco: context.numeroEndereco,

        usuarioSession: context.usuarioSession,

        situacao: context.situacao,

        admin: context.admin
    };

    if (typeof obj._id === "undefined" || obj._id === null) obj._id = "";
    if (typeof obj.nome === "undefined" || obj.nome === null) obj.nome = "";
    if (typeof obj.cnpj === "undefined" || obj.cnpj === null) obj.cnpj = "";
    if (typeof obj.email === "undefined" || obj.email === null) obj.email = "";
    if (typeof obj.codigo === "undefined" || obj.codigo === null) obj.codigo = "";
    if (typeof obj.senha === "undefined" || obj.senha === null) obj.senha = "";
    if (typeof obj.repetirSenha === "undefined" || obj.repetirSenha === null) obj.repetirSenha = "";
    if (typeof obj.telefone === "undefined" || obj.telefone === null) obj.telefone = "";
    if (typeof obj.cep === "undefined" || obj.cep === null) obj.cep = "";
    if (typeof obj.estado === "undefined" || obj.estado === null) obj.estado = "";
    if (typeof obj.cidade === "undefined" || obj.cidade === null) obj.cidade = "";
    if (typeof obj.endereco === "undefined" || obj.endereco === null) obj.endereco = "";
    if (typeof obj.numeroEndereco === "undefined" || obj.numeroEndereco === null) obj.numeroEndereco = "";
    if (typeof obj.usuarioSession === "undefined" || obj.usuarioSession === null) obj.usuarioSession = "";
    if (typeof obj.situacao === "undefined" || obj.situacao === null) obj.situacao = "";
    if (typeof obj.admin === "undefined" || obj.admin === null) obj.admin = "";

    return obj;
}

export default objParceiro;