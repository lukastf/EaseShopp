
const getAccessLevel = (context) => {

    let admin = context.props.navbar.props.app.state.admin;
    let codigo = context.props.navbar.props.app.state.codigo;

    if (admin === 1) {

        context.setState({
            accessLevel: 2
        });
    }

    else if (codigo !== "") {

        context.setState({
            accessLevel: 1
        });
    } 
    
    else {
        context.setState({
            accessLevel: 0
        });
    }

}

export default getAccessLevel;