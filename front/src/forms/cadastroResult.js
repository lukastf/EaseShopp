
import React from 'react';

export const sucessoEmailAtivar = (context) => {

    console.log("sucesso");

    context.setState({
        cadastroResult: 
        <div className="row justify-content-center col-12">
            <p style={{color:"green"}}>
                Registrado com sucesso, agora acesse seu email para ativar sua conta depois entre aqui
            </p>
        </div>
    });

    setTimeout(() => {
        context.setState({ cadastroResult: "" });
    }, 120000);
} 

export const sucesso = (context) => {

    console.log("sucesso");

    context.setState({
        cadastroResult: 
        <div className="row justify-content-center col-12">
            <p style={{color:"green"}}>Registrado com sucesso</p>
        </div>
    });
} 

export const erro = (context, error) => {

    console.log(error);

    context.setState({
        //classError: "error",
        cadastroResult: 
        <div className="row justify-content-center col-12">
            <p style={{color:"red"}}>Falha ao registrar</p>
        </div>
    });
}


export const sucessoExcluir = (context) => {

    console.log("sucesso ao excluir");

    context.setState({
        cadastroResult:
        <div className="row justify-content-center col-12">
            <p style={{color:"green"}}>Sucesso ao excluir</p>
        </div>,
        hide: "d-none"
    });
}

export const erroExcluir = (context, error) => {

    console.log(error);
    
    context.setState({
        cadastroResult:
        <div className="row justify-content-center col-12">
            <p style={{color:"red"}}>Erro ao excluir</p>
        </div>,
        hide: ""
    });
}

export const sucessoEnviado = (context) => {

    console.log("ok");

    context.setState({

        cadastroResult: <p style={{color:"green"}}>Enviado com sucesso</p>,
        hide: "d-none"
    });
} 

export const erroEnviado = (context, error) => {

    console.log(error);

    context.setState({

        cadastroResult: <p style={{color:"red"}}>Erro ao enviar</p>,
        hide: ""
    });
}

export const erroCustom = (context, msg) => {

    context.setState({
        cadastroResult:
        <div className="row justify-content-center col-12">
            <p style={{color:"red"}}>{msg}</p>
        </div>
    });
}

export const customInputMsg = (msg, color = "red") => {

    //context.setState({
        //error:
        //<div className="row justify-content-center col-12">
            //return <p style={{color:"red"}}>{msg}</p>

            return <p className={"col-12"} style={{color:color}}> {msg} </p>;
        //</div>
    //});
}