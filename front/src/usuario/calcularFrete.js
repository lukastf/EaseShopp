
import axios from 'axios';
import { serverFrete } from '../config';
//import Correios from 'node-correios';

const calcularFrete = (context) => {

    //let correios = new Correios();

    //fazer peso e formato e diametro

    const converter = (v) => {
        v = String(v);
        if (v.includes(",")) v = v.replace(",", ".");
        v = parseFloat(v);
        return v;
    }

    ///console.log("produto");
    //console.log(context.produto.tipoTamanho);

    let args = {
        //Pac a vista 04510
        //Sedex a vista 04014
        //nCdServico: '04014,04065,04510,04707,40169,40215,40290',
        nCdServico: '04510',
        sCepOrigem: context.parceiro.cep.replace("-", ""),
        sCepDestino: context.usuario.cep.replace("-", ""),
        nVlPeso: context.produto.peso,
        nCdFormato : context.produto.formato,
        nVlComprimento: converter(context.produto.comprimento),
        nVlAltura: converter(context.produto.altura),
        nVlLargura: converter(context.produto.largura),
        nVlDiametro: converter(context.produto.diametro),
        //nVlValorDeclarado  : context.produto.valorNum,
        /*nCdEmpresa         : '',
        sDsSenha           : '',
        sCdMaoPropria      : 'N',
        sCdAvisoRecebimento: 'N'*/
    }

    if (context.produto.tipoTamanho === "Metros") {
        
        args.nVlComprimento = args.nVlComprimento * 100;
        args.nVlAltura = args.nVlAltura * 100;
        args.nVlLargura = args.nVlLargura * 100;
        args.nVlDiametro = args.nVlDiametro * 100;
    }

    //console.log(args);

    //console.log(context.parceiro.cep);
    //console.log(context.usuario.cep);
    //console.log(args);

    //context.setFretePac("100,50");
    //context.setFreteSedex("170,00");
    //return;
    axios.post(serverFrete, args)
    //correios.calcPreco(args)
    .then(result => {
        context.setFretePac(result.data);
    })
    .catch(error => {
        console.log(error);
    });

    let args2 = args;
    args2.nCdServico = '04014';

    axios.post(serverFrete, args2)
    .then(result => {
        context.setFreteSedex(result.data);
    })
    .catch(error => {
        console.log(error);
    });
}

export default calcularFrete;