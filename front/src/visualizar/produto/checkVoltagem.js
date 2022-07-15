import React from 'react';

const checkVoltagem = (context) => {

    if (typeof context.props.navbar.props.app.state.cnpj !== "undefined") return;

    let voltagem = [];

    const change = (voltagem) => {

        context.setState({
            voltagemUsuario: voltagem
        });
    }

    if (context.props.produto.opcoesMedida === "Voltagem") {

        if (context.props.produto.voltagem.includes("110v")) {

            voltagem.push(
                <div class="form-check-inline">
                    <label class="form-check-label">
                        <input type="radio" class="form-check-input" name="optradio"
                        onChange={()=>{change("110v")}}/>110v
                    </label>
                </div>
            );
        }

        if (context.props.produto.voltagem.includes("220v")) {

            voltagem.push(
                <div class="form-check-inline">
                    <label class="form-check-label">
                        <input type="radio" class="form-check-input" name="optradio"
                        onChange={()=>{change("220v")}}/>220v
                    </label>
                </div>
            );
        }

        if (context.props.produto.voltagem.includes("Bivolt (manual)")) {

            voltagem.push(
                <div class="form-check-inline">
                    <label class="form-check-label">
                        <input type="radio" class="form-check-input" name="optradio"
                        onChange={()=>{change("Bivolt (manual)")}}/>Bivolt (manual)
                    </label>
                </div>
            );
        }

        if (context.props.produto.voltagem.includes("Bivolt (automatico)")) {

            voltagem.push(
                <div class="form-check-inline">
                    <label class="form-check-label">
                        <input type="radio" class="form-check-input" name="optradio"
                        onChange={()=>{change("Bivolt (automatico)")}}/>Bivolt (automatico)
                    </label>
                </div>
            );
        }
    }

    return (
        <div className="col-12 mt-4">
            {voltagem}
        </div>
    );
}

export default checkVoltagem;