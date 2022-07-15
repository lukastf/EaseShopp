import React from 'react';

const checkTamanhoCalcados = (context) => {

    if (typeof context.props.navbar.props.app.state.cnpj !== "undefined") return;

    let tamanhoCalcados = [];

    const change = (tamanho) => {

        context.setState({
            tamanhoCalcadoUsuario: tamanho
        });
    }

    if (context.props.produto.opcoesMedida === "TamanhoCalcados") {

        if (context.props.produto.tamanhoCalcados.includes(14)) {

            tamanhoCalcados.push(
                <div class="form-check-inline">
                    <label class="form-check-label">
                        <input type="radio" class="form-check-input" name="optradio"
                        onChange={()=>{change(14)}}/>14
                    </label>
                </div>
            );
        }

        if (context.props.produto.tamanhoCalcados.includes(15)) {

            tamanhoCalcados.push(
                <div class="form-check-inline">
                    <label class="form-check-label">
                        <input type="radio" class="form-check-input" name="optradio"
                        onChange={()=>{change(15)}}/>15
                    </label>
                </div>
            );
        }

        if (context.props.produto.tamanhoCalcados.includes(16)) {

            tamanhoCalcados.push(
                <div class="form-check-inline">
                    <label class="form-check-label">
                        <input type="radio" class="form-check-input" name="optradio"
                        onChange={()=>{change(16)}}/>16
                    </label>
                </div>
            );
        }

        if (context.props.produto.tamanhoCalcados.includes(17)) {

            tamanhoCalcados.push(
                <div class="form-check-inline">
                    <label class="form-check-label">
                        <input type="radio" class="form-check-input" name="optradio"
                        onChange={()=>{change(17)}}/>17
                    </label>
                </div>
            );
        }

        if (context.props.produto.tamanhoCalcados.includes(18)) {

            tamanhoCalcados.push(
                <div class="form-check-inline">
                    <label class="form-check-label">
                        <input type="radio" class="form-check-input" name="optradio"
                        onChange={()=>{change(18)}}/>18
                    </label>
                </div>
            );
        }

        if (context.props.produto.tamanhoCalcados.includes(19)) {

            tamanhoCalcados.push(
                <div class="form-check-inline">
                    <label class="form-check-label">
                        <input type="radio" class="form-check-input" name="optradio"
                        onChange={()=>{change(19)}}/>19
                    </label>
                </div>
            );
        }

        if (context.props.produto.tamanhoCalcados.includes(20)) {

            tamanhoCalcados.push(
                <div class="form-check-inline">
                    <label class="form-check-label">
                        <input type="radio" class="form-check-input" name="optradio"
                        onChange={()=>{change(20)}}/>20
                    </label>
                </div>
            );
        }

        if (context.props.produto.tamanhoCalcados.includes(21)) {

            tamanhoCalcados.push(
                <div class="form-check-inline">
                    <label class="form-check-label">
                        <input type="radio" class="form-check-input" name="optradio"
                        onChange={()=>{change(21)}}/>21
                    </label>
                </div>
            );
        }

        if (context.props.produto.tamanhoCalcados.includes(22)) {

            tamanhoCalcados.push(
                <div class="form-check-inline">
                    <label class="form-check-label">
                        <input type="radio" class="form-check-input" name="optradio"
                        onChange={()=>{change(22)}}/>22
                    </label>
                </div>
            );
        }

        if (context.props.produto.tamanhoCalcados.includes(23)) {

            tamanhoCalcados.push(
                <div class="form-check-inline">
                    <label class="form-check-label">
                        <input type="radio" class="form-check-input" name="optradio"
                        onChange={()=>{change(23)}}/>23
                    </label>
                </div>
            );
        }

        if (context.props.produto.tamanhoCalcados.includes(24)) {

            tamanhoCalcados.push(
                <div class="form-check-inline">
                    <label class="form-check-label">
                        <input type="radio" class="form-check-input" name="optradio"
                        onChange={()=>{change(24)}}/>24
                    </label>
                </div>
            );
        }

        if (context.props.produto.tamanhoCalcados.includes(25)) {

            tamanhoCalcados.push(
                <div class="form-check-inline">
                    <label class="form-check-label">
                        <input type="radio" class="form-check-input" name="optradio"
                        onChange={()=>{change(25)}}/>25
                    </label>
                </div>
            );
        }

        if (context.props.produto.tamanhoCalcados.includes(26)) {

            tamanhoCalcados.push(
                <div class="form-check-inline">
                    <label class="form-check-label">
                        <input type="radio" class="form-check-input" name="optradio"
                        onChange={()=>{change(26)}}/>26
                    </label>
                </div>
            );
        }

        if (context.props.produto.tamanhoCalcados.includes(27)) {

            tamanhoCalcados.push(
                <div class="form-check-inline">
                    <label class="form-check-label">
                        <input type="radio" class="form-check-input" name="optradio"
                        onChange={()=>{change(27)}}/>27
                    </label>
                </div>
            );
        }

        if (context.props.produto.tamanhoCalcados.includes(28)) {

            tamanhoCalcados.push(
                <div class="form-check-inline">
                    <label class="form-check-label">
                        <input type="radio" class="form-check-input" name="optradio"
                        onChange={()=>{change(28)}}/>28
                    </label>
                </div>
            );
        }

        if (context.props.produto.tamanhoCalcados.includes(29)) {

            tamanhoCalcados.push(
                <div class="form-check-inline">
                    <label class="form-check-label">
                        <input type="radio" class="form-check-input" name="optradio"
                        onChange={()=>{change(29)}}/>29
                    </label>
                </div>
            );
        }

        if (context.props.produto.tamanhoCalcados.includes(30)) {

            tamanhoCalcados.push(
                <div class="form-check-inline">
                    <label class="form-check-label">
                        <input type="radio" class="form-check-input" name="optradio"
                        onChange={()=>{change(30)}}/>30
                    </label>
                </div>
            );
        }

        if (context.props.produto.tamanhoCalcados.includes(31)) {

            tamanhoCalcados.push(
                <div class="form-check-inline">
                    <label class="form-check-label">
                        <input type="radio" class="form-check-input" name="optradio"
                        onChange={()=>{change(31)}}/>31
                    </label>
                </div>
            );
        }

        if (context.props.produto.tamanhoCalcados.includes(32)) {

            tamanhoCalcados.push(
                <div class="form-check-inline">
                    <label class="form-check-label">
                        <input type="radio" class="form-check-input" name="optradio"
                        onChange={()=>{change(32)}}/>32
                    </label>
                </div>
            );
        }

        if (context.props.produto.tamanhoCalcados.includes(33)) {

            tamanhoCalcados.push(
                <div class="form-check-inline">
                    <label class="form-check-label">
                        <input type="radio" class="form-check-input" name="optradio"
                        onChange={()=>{change(33)}}/>33
                    </label>
                </div>
            );
        }

        if (context.props.produto.tamanhoCalcados.includes(34)) {

            tamanhoCalcados.push(
                <div class="form-check-inline">
                    <label class="form-check-label">
                        <input type="radio" class="form-check-input" name="optradio"
                        onChange={()=>{change(34)}}/>34
                    </label>
                </div>
            );
        }

        if (context.props.produto.tamanhoCalcados.includes(35)) {

            tamanhoCalcados.push(
                <div class="form-check-inline">
                    <label class="form-check-label">
                        <input type="radio" class="form-check-input" name="optradio"
                        onChange={()=>{change(35)}}/>35
                    </label>
                </div>
            );
        }

        if (context.props.produto.tamanhoCalcados.includes(36)) {

            tamanhoCalcados.push(
                <div class="form-check-inline">
                    <label class="form-check-label">
                        <input type="radio" class="form-check-input" name="optradio"
                        onChange={()=>{change(36)}}/>36
                    </label>
                </div>
            );
        }

        if (context.props.produto.tamanhoCalcados.includes(37)) {

            tamanhoCalcados.push(
                <div class="form-check-inline">
                    <label class="form-check-label">
                        <input type="radio" class="form-check-input" name="optradio"
                        onChange={()=>{change(37)}}/>37
                    </label>
                </div>
            );
        }

        if (context.props.produto.tamanhoCalcados.includes(38)) {

            tamanhoCalcados.push(
                <div class="form-check-inline">
                    <label class="form-check-label">
                        <input type="radio" class="form-check-input" name="optradio"
                        onChange={()=>{change(38)}}/>38
                    </label>
                </div>
            );
        }

        if (context.props.produto.tamanhoCalcados.includes(39)) {

            tamanhoCalcados.push(
                <div class="form-check-inline">
                    <label class="form-check-label">
                        <input type="radio" class="form-check-input" name="optradio"
                        onChange={()=>{change(39)}}/>39
                    </label>
                </div>
            );
        }

        if (context.props.produto.tamanhoCalcados.includes(40)) {

            tamanhoCalcados.push(
                <div class="form-check-inline">
                    <label class="form-check-label">
                        <input type="radio" class="form-check-input" name="optradio"
                        onChange={()=>{change(40)}}/>40
                    </label>
                </div>
            );
        }

        if (context.props.produto.tamanhoCalcados.includes(41)) {

            tamanhoCalcados.push(
                <div class="form-check-inline">
                    <label class="form-check-label">
                        <input type="radio" class="form-check-input" name="optradio"
                        onChange={()=>{change(41)}}/>41
                    </label>
                </div>
            );
        }

        if (context.props.produto.tamanhoCalcados.includes(42)) {

            tamanhoCalcados.push(
                <div class="form-check-inline">
                    <label class="form-check-label">
                        <input type="radio" class="form-check-input" name="optradio"
                        onChange={()=>{change(42)}}/>42
                    </label>
                </div>
            );
        }

        if (context.props.produto.tamanhoCalcados.includes(43)) {

            tamanhoCalcados.push(
                <div class="form-check-inline">
                    <label class="form-check-label">
                        <input type="radio" class="form-check-input" name="optradio"
                        onChange={()=>{change(43)}}/>43
                    </label>
                </div>
            );
        }

        if (context.props.produto.tamanhoCalcados.includes(44)) {

            tamanhoCalcados.push(
                <div class="form-check-inline">
                    <label class="form-check-label">
                        <input type="radio" class="form-check-input" name="optradio"
                        onChange={()=>{change(44)}}/>44
                    </label>
                </div>
            );
        }

        if (context.props.produto.tamanhoCalcados.includes(45)) {

            tamanhoCalcados.push(
                <div class="form-check-inline">
                    <label class="form-check-label">
                        <input type="radio" class="form-check-input" name="optradio"
                        onChange={()=>{change(45)}}/>45
                    </label>
                </div>
            );
        }

        if (context.props.produto.tamanhoCalcados.includes(46)) {

            tamanhoCalcados.push(
                <div class="form-check-inline">
                    <label class="form-check-label">
                        <input type="radio" class="form-check-input" name="optradio"
                        onChange={()=>{change(46)}}/>46
                    </label>
                </div>
            );
        }

        if (context.props.produto.tamanhoCalcados.includes(47)) {

            tamanhoCalcados.push(
                <div class="form-check-inline">
                    <label class="form-check-label">
                        <input type="radio" class="form-check-input" name="optradio"
                        onChange={()=>{change(47)}}/>47
                    </label>
                </div>
            );
        }

        if (context.props.produto.tamanhoCalcados.includes(48)) {

            tamanhoCalcados.push(
                <div class="form-check-inline">
                    <label class="form-check-label">
                        <input type="radio" class="form-check-input" name="optradio"
                        onChange={()=>{change(48)}}/>48
                    </label>
                </div>
            );
        }

        if (context.props.produto.tamanhoCalcados.includes(49)) {

            tamanhoCalcados.push(
                <div class="form-check-inline">
                    <label class="form-check-label">
                        <input type="radio" class="form-check-input" name="optradio"
                        onChange={()=>{change(49)}}/>49
                    </label>
                </div>
            );
        }

        if (context.props.produto.tamanhoCalcados.includes(50)) {

            tamanhoCalcados.push(
                <div class="form-check-inline">
                    <label class="form-check-label">
                        <input type="radio" class="form-check-input" name="optradio"
                        onChange={()=>{change(50)}}/>50
                    </label>
                </div>
            );
        }
    }

    return (
        <div className="col-12 mt-4">
            {tamanhoCalcados}
        </div>
    );
}

export default checkTamanhoCalcados