

const converterDinheiro = (valorInicial, quantidade) => {

    let tempArr = valorInicial.split("R$");
    let valor = tempArr[1].replace(",", ".");

    valor = parseFloat(valor);
    quantidade = parseInt(quantidade);

    if (isNaN(quantidade) || quantidade <= 0) {

        quantidade = 1;
    }

    let valorFinal = valor * quantidade;

    valorFinal = String(valorFinal);

    if (!valorFinal.includes(".")) {
        valorFinal += ".00";
    }

    valorFinal = valorFinal.replace(".", ",");

    let tempArr2 = valorFinal.split(",");

    tempArr2[1] = tempArr2[1].substring(0, 2);

    if (tempArr2[1].length < 2) tempArr2[1] += "0";

    valorFinal = tempArr2[0] + "," + tempArr2[1];

    valorFinal = "R$ " + valorFinal;

    if (quantidade < 1) {

        valorFinal = valorInicial;
    }

    return valorFinal;

}

export default converterDinheiro;