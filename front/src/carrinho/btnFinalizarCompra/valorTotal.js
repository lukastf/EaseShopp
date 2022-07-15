
import qr_code from './qr_code';

const valorTotal = (context, values, chamarQrCode = false) => {

    let valorTotal = 0;
    let valoresTotais = values.valoresTotais;

    for (let i = 0; i< valoresTotais.length; i++) {

        if(typeof valoresTotais[i] === "undefined" || valoresTotais[i] === null) 
        {

            valoresTotais.splice(i, 1);
            continue;
        }

        let tempArr = valoresTotais[i].split("R$");
        let valor = tempArr[1].replace(",", ".");
        valor = parseFloat(valor);

        valorTotal += valor;
    }

    valorTotal = String(valorTotal);
    if (!valorTotal.includes(".")) {
        valorTotal += ".00";
    }


    // fixa tamanho de 2 casas apos o .
    let anamariabraga = valorTotal.split(".");
    anamariabraga[1] = anamariabraga[1].substring(0, 2);
    if (anamariabraga[1].length < 2) anamariabraga[1] += "0";

    let lourojose = anamariabraga[0] + "." + anamariabraga[1];
    valorTotal = String(lourojose);

    if (chamarQrCode)
    return qr_code(context, valorTotal);

    // converte o . em ,
    let valorFinal = valorTotal.replace(".", ",");

    return valorFinal = "R$ " + valorFinal;
}

export default valorTotal;