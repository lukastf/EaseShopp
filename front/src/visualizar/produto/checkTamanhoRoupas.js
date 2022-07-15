import React from 'react';

const checkTamanhoRoupas = (context) => {

    if (typeof context.props.navbar.props.app.state.cnpj !== "undefined") return;

    let tamanhoRoupas = [];

    const change = (tamanho) => {

        context.setState({
            tamanhoRoupaUsuario: tamanho
        });
    }

    if (context.props.produto.opcoesMedida === "TamanhoRoupas") {

        if (context.props.produto.tamanhoRoupas.includes("PP")) {

            tamanhoRoupas.push(
                <div class="form-check-inline">
                    <label class="form-check-label">
                        <input type="radio" class="form-check-input" name="optradio"
                        onChange={()=>{change("PP")}}/>PP
                    </label>
                </div>
            );
        }

        if (context.props.produto.tamanhoRoupas.includes("P")) {

            tamanhoRoupas.push(
                <div class="form-check-inline">
                    <label class="form-check-label">
                        <input type="radio" class="form-check-input" name="optradio"
                        onChange={()=>{change("P")}}/>P
                    </label>
                </div>
            );
        }

        if (context.props.produto.tamanhoRoupas.includes("M")) {

            tamanhoRoupas.push(
                <div class="form-check-inline">
                    <label class="form-check-label">
                        <input type="radio" class="form-check-input" name="optradio"
                        onChange={()=>{change("M")}}/>M
                    </label>
                </div>
            );
        }

        if (context.props.produto.tamanhoRoupas.includes("G")) {

            tamanhoRoupas.push(
                <div class="form-check-inline">
                    <label class="form-check-label">
                        <input type="radio" class="form-check-input" name="optradio"
                        onChange={()=>{change("G")}}/>G
                    </label>
                </div>
            );
        }

        if (context.props.produto.tamanhoRoupas.includes("GG")) {

            tamanhoRoupas.push(
                <div class="form-check-inline">
                    <label class="form-check-label">
                        <input type="radio" class="form-check-input" name="optradio"
                        onChange={()=>{change("GG")}}/>GG
                    </label>
                </div>
            );
        }

        if (context.props.produto.tamanhoRoupas.includes("XG")) {

            tamanhoRoupas.push(
                <div class="form-check-inline">
                    <label class="form-check-label">
                        <input type="radio" class="form-check-input" name="optradio"
                        onChange={()=>{change("XG")}}/>XG
                    </label>
                </div>
            );
        }

        if (context.props.produto.tamanhoRoupas.includes("XGG")) {

            tamanhoRoupas.push(
                <div class="form-check-inline">
                    <label class="form-check-label">
                        <input type="radio" class="form-check-input" name="optradio"
                        onChange={()=>{change("XGG")}}/>XGG
                    </label>
                </div>
            );
        }

        if (context.props.produto.tamanhoRoupas.includes("EG")) {

            tamanhoRoupas.push(
                <div class="form-check-inline">
                    <label class="form-check-label">
                        <input type="radio" class="form-check-input" name="optradio"
                        onChange={()=>{change("EG")}}/>EG
                    </label>
                </div>
            );
        }

        if (context.props.produto.tamanhoRoupas.includes("EGG")) {

            tamanhoRoupas.push(
                <div class="form-check-inline">
                    <label class="form-check-label">
                        <input type="radio" class="form-check-input" name="optradio"
                        onChange={()=>{change("EGG")}}/>EGG
                    </label>
                </div>
            );
        }
    }

    return (
        <div className="col-12 mt-4">
            {tamanhoRoupas}
        </div>
    );
}

export default checkTamanhoRoupas;