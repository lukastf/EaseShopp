

const welcomeMsg = (navbar, customMsg) => {

    navbar.setState({

        welcomeMsg: "Bem vindo " + customMsg + " " + navbar.props.nome
    });
}

export default welcomeMsg;