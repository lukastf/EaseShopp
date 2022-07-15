

const objUsuario = (context) => {

    if (!context) {
        
        context = {

            _id: "",
            nome: "",
            cpf: "",
            rg: "",
            email: "",
            senha: "",
            repetirSenha: "",
            celular: "",
            whatsapp: "",
            dataNasc: "",
            cep: "",
            estado: "",
            cidade: "",
            endereco: "",
            numeroEndereco: "",
            receberStatusWhats: false,
            codigoIndicacao: "",

            favoritos: "",
            carrinho: "",

            carrinhoSession: "",
            usuarioSession: "",

            idOrg: "",
            dataInclusao: "",
            situacao: "Ativo",
            redeCredenciada: ""
        }
    }

    let obj = {

        _id: context._id,
        nome: context.nome,
        cpf: context.cpf,
        rg: context.rg,
        email: context.email,
        senha: context.senha,
        repetirSenha: context.senha,
        celular: context.celular,
        whatsapp: context.whatsapp,
        dataNasc: context.dataNasc,
        cep: context.cep,
        estado: context.estado,
        cidade: context.cidade,
        endereco: context.endereco,
        numeroEndereco: context.numeroEndereco,
        receberStatusWhats: context.receberStatusWhats,
        codigoIndicacao: context.codigoIndicacao,

        favoritos: context.favoritos,
        carrinho: context.carrinho,

        carrinhoSession: context.carrinhoSession,
        usuarioSession: context.usuarioSession,

        idOrg: context.idOrg,
        dataInclusao: context.dataInclusao,
        situacao: context.situacao,
        redeCredenciada: context.redeCredenciada
    };

    if (typeof obj._id === "undefined" || obj._id === null) obj._id = "";
    if (typeof obj.nome === "undefined" || obj.nome === null) obj.nome = "";
    if (typeof obj.cpf === "undefined" || obj.cpf === null) obj.cpf = "";
    if (typeof obj.rg === "undefined" || obj.rg === "undefined" || obj.rg === null) obj.rg = "";
    if (typeof obj.email === "undefined" || obj.email === "undefined" || obj.email === null) obj.email = "";
    if (typeof obj.senha === "undefined" || obj.senha === "undefined" || obj.senha === null) obj.senha = "";
    if (typeof obj.repetirSenha === "undefined" || obj.repetirSenha === "undefined" || obj.repetirSenha === null) obj.repetirSenha = "";
    if (typeof obj.celular === "undefined" || obj.celular === "undefined"  || obj.celular === null) obj.celular = "";
    if (typeof obj.whatsapp === "undefined" || obj.whatsapp === "undefined" || obj.whatsapp === null) obj.whatsapp = "";
    if (typeof obj.dataNasc === "undefined" || obj.dataNasc === null) obj.dataNasc = "";
    if (typeof obj.cep === "undefined" || obj.cep === "undefined" || obj.cep === null) obj.cep = "";
    if (typeof obj.estado === "undefined" || obj.estado === "undefined" || obj.estado === null) obj.estado = "";
    if (typeof obj.cidade === "undefined" || obj.cidade === "undefined" || obj.cidade === null) obj.cidade = "";
    if (typeof obj.endereco === "undefined" || obj.endereco === "undefined" || obj.endereco === null) obj.endereco = "";
    if (typeof obj.numeroEndereco === "undefined" || obj.numeroEndereco === "undefined" || obj.numeroEndereco === null) obj.numeroEndereco = "";
    if (typeof obj.receberStatusWhats === "undefined" || obj.receberStatusWhats === "undefined" || obj.receberStatusWhats === null) obj.receberStatusWhats = false;
    if (typeof obj.codigoIndicacao === "undefined" || obj.codigoIndicacao === "undefined" || obj.codigoIndicacao === null) obj.codigoIndicacao = "";
    if (typeof obj.favoritos === "undefined" || obj.favoritos === null) obj.favoritos = "";
    if (typeof obj.carrinho === "undefined" || obj.carrinho === null) obj.carrinho = "";
    if (typeof obj.carrinhoSession === "undefined" || obj.carrinhoSession === null) obj.carrinhoSession = "";
    if (typeof obj.usuarioSession === "undefined" || obj.usuarioSession === null) obj.usuarioSession = "";
    if (typeof obj.idOrg === "undefined" || obj.idOrg === null) obj.idOrg = "";
    if (typeof obj.dataInclusao === "undefined" || obj.dataInclusao === null) obj.dataInclusao = "";
    if (typeof obj.situacao === "undefined" || obj.situacao === null) obj.situacao = "";
    if (typeof obj.redeCredenciada === "undefined" || obj.redeCredenciada === null) obj.redeCredenciada = "";

    return obj;
}

export default objUsuario;