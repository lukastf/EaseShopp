
const initialState = (entrar, oi) => {

    entrar.setState({

        email: "",
        senha: "",
        codigo: ""
    });

    if (oi.parceiroClicado) {

        entrar.setState({

            hideUsuarioForm: "row col-12 justify-content-center d-none",
            hideParceiroForm: "row col-12 justify-content-center"
        });
    } else {

        entrar.setState({

            hideUsuarioForm: "row col-12 justify-content-center",
            hideParceiroForm: "row col-12 justify-content-center d-none"
        });
    }
}

export default initialState;