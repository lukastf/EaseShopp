
const checarUsuarioLogado = (context) => {

    let codigo = context.props.navbar.props.app.state.codigo;
    let _idParceiroSession = context.props.navbar.props.app.state._id;
    
    let usuarioLogado =  
    (
        codigo === "" || 
        codigo === undefined || 
        codigo === null
    ) && 
    (
        _idParceiroSession !== "" && 
        _idParceiroSession !== undefined && 
        _idParceiroSession !== null
    );

    return usuarioLogado;
}

export default checarUsuarioLogado;