
const switchUsuarioParceiro = (entrar, e) => {

    if (e.target.id === "switchUsuario") {

        entrar.setState({
            switchUsuarioClass: "page-item active",
            switchParceiroClass: "page-item",

            hideUsuarioForm: "row col-12 justify-content-center",
            hideParceiroForm: "row col-12 justify-content-center d-none"
        });

    }

    if (e.target.id === "switchParceiro") {

        entrar.setState({
            switchUsuarioClass: "page-item",
            switchParceiroClass: "page-item active",

            hideUsuarioForm: "row col-12 justify-content-center d-none",
            hideParceiroForm: "row col-12 justify-content-center"
        });

    }
}

export default switchUsuarioParceiro;