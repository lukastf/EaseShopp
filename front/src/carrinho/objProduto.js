const objProduto = (context) => {

    if (!context) {

        context = {

            _id: "",
            nome: "",
            marca: "",
            valor: "",
            quantidade: "",
            descricao: "",
            imagens: ["null", "null", "null", "null", "null"],
            categoria: "",
            cor: "",
            tipoTamanho: "",
            comprimento: "",
            largura: "",
            altura: "",
            peso: "",
            diametro: "",
            formato: "",
            opcoesMedida: "Nenhuma",
            voltagem: [],
            tamanhoRoupas: [],
            tamanhoCalcados: [],
            _idParceiro: "",
            imagensLinkExterno: [true, true, true, true, true],
            opcoes: {retirada:true, entrega:true, freteGratis: false}
        }
    }

    let obj = {

        _id: context._id,
        nome: context.nome,
        marca: context.marca,
        valor: context.valor,
        quantidade: context.quantidade,
        descricao: context.descricao,
        imagens: context.imagens,
        categoria: context.categoria,
        cor: context.cor,
        tipoTamanho: context.tipoTamanho,
        comprimento: context.comprimento,
        largura: context.largura,
        altura: context.altura,
        peso: context.peso,
        diametro: context.diametro,
        formato: context.formato,
        opcoesMedida: context.opcoesMedida,
        voltagem: context.voltagem,
        tamanhoRoupas: context.tamanhoRoupas,
        tamanhoCalcados: context.tamanhoCalcados,
        _idParceiro: context._idParceiro,
        imagensLinkExterno : context.imagensLinkExterno,
        opcoes: context.opcoes
    };

    if (typeof obj._id === "undefined" || obj._id === null) obj._id = "";
    if (typeof obj.nome === "undefined" || obj.nome === null) obj.nome = "";
    if (typeof obj.marca === "undefined" || obj.marca === null) obj.marca = "";
    if (typeof obj.valor === "undefined" || obj.valor === null) obj.valor = "";
    if (typeof obj.quantidade === "undefined" || obj.quantidade === null) obj.quantidade = "";
    if (typeof obj.descricao === "undefined" || obj.descricao === null) obj.descricao = "";
    if (typeof obj.imagens === "undefined" || obj.imagens === null) obj.imagens = ["null", "null", "null", "null", "null"];
    if (typeof obj.categoria === "undefined" || obj.categoria === null) obj.categoria = "";
    if (typeof obj.cor === "undefined" || obj.cor === null) obj.cor = "";
    if (typeof obj.tipoTamanho === "undefined" || obj.tipoTamanho === null) obj.tipoTamanho = "";
    if (typeof obj.comprimento === "undefined" || obj.comprimento === null) obj.comprimento = "";
    if (typeof obj.largura === "undefined" || obj.largura === null) obj.largura = "";
    if (typeof obj.altura === "undefined" || obj.altura === null) obj.altura = "";
    if (typeof obj.peso === "undefined" || obj.peso === null) obj.peso = "";
    if (typeof obj.diametro === "undefined" || obj.diametro === null) obj.diametro = "";
    if (typeof obj.formato === "undefined" || obj.formato === null) obj.formato = "";
    if (typeof obj.opcoesMedida === "undefined" || obj.opcoesMedida === null) obj.opcoesMedida = "Nenhuma";
    if (typeof obj.voltagem === "undefined" || obj.voltagem === null) obj.voltagem = [];
    if (typeof obj.tamanhoRoupas === "undefined" || obj.tamanhoRoupas === null) obj.tamanhoRoupas = [];
    if (typeof obj.tamanhoCalcados === "undefined" || obj.tamanhoCalcados === null) obj.tamanhoCalcados = [];
    if (typeof obj._idParceiro === "undefined" || obj._idParceiro === null) obj._idParceiro = "";
    if (typeof obj.imagensLinkExterno === "undefined" || obj.imagensLinkExterno === null) obj.imagensLinkExterno = [true, true, true, true, true];
    if (typeof obj.opcoes === "undefined" || obj.opcoes === null) obj.opcoes = {retirada:true, entrega:true, freteGratis: false};

    const converterPonto = (v) => {
        v = String(v);
        if (v.includes(".")) v = v.replace(".", ",");
        return v;
    }

    obj.comprimento = converterPonto(obj.comprimento);
    obj.largura = converterPonto(obj.largura);
    obj.altura = converterPonto(obj.altura);
    obj.peso = converterPonto(obj.peso);
    obj.diametro = converterPonto(obj.diametro);

    return obj;
}

export default objProduto;