
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBillWave, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import valorTotal from './valorTotal';
import setRoute from '../../navbar/routes/setRoute';

const btnFinalizarCompra = (context, values) => {

    let carrinho = context.props.navbar.props.app.state.carrinho;

    if (carrinho.length > 0 && context.state.fretePac.length > 0 && context.state.freteSedex.length > 0 &&
        context.state.fretePac.length === carrinho.length && context.state.freteSedex.length === carrinho.length) {

        const valorTotall = (chamarQrCode = false) => {
            return valorTotal(context, values, chamarQrCode);
        }

        context.setState({
            btnFinalizarCompra:
            <div className="row col-12 justify-content-end h-25">

                <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">Finalizar Compra - pague pelo aplicativo</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body mx-auto">
                            {valorTotall(true)}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Fechar</button>
                        </div>
                        </div>
                    </div>
                </div>

                <div className="modal fade" id="checarEndereco" tabIndex="-1" role="dialog" 
                aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLongTitle">Confirmar Endereço</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            
                            <div className="modal-body mx-auto">
                                <p className="m-0">CEP: {context.props.navbar.props.app.state.cep}</p>
                                <p className="m-0">Estado: {context.props.navbar.props.app.state.estado}</p>
                                <p className="m-0">Cidade: {context.props.navbar.props.app.state.cidade}</p>
                                <p className="m-0">Endereço: {context.props.navbar.props.app.state.endereco}</p>
                                <p className="m-0">Numero: {context.props.navbar.props.app.state.numeroEndereco}</p>

                                <button
                                    type="button"
                                    data-dismiss="modal"
                                    className="btn btn-warning btn-lg mt-4"
                                    onClick={(e)=>{ 
                                        e.preventDefault();

                                        setRoute(
                                            context.props.navbar,
                                            "/editarUsuario" +
                                            "/"+context.props.navbar.props.app.state._id
                                        );
                                    }}
                                >
                                    Editar <FontAwesomeIcon icon={faPencilAlt} />
                                </button>
                            </div>

                            <div className="modal-footer">
                                <button 
                                    type="button" 
                                    data-toggle="modal" data-dismiss="modal" data-target="#exampleModalCenter"
                                    className="btn btn-warning btn-lg">
                                        Continuar <FontAwesomeIcon icon={faMoneyBillWave} style={{color:"white"}} />
                                </button>
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Fechar</button>
                            </div>
                        </div>
                    </div>
                </div>

                <h4 className="col-12 text-right mt-4">
                    <b>Valor Total da Compra<br/> {valorTotall()}</b>
                </h4>
                <div className="row col-12 justify-content-end h-25">
                    <button 
                        type="button"
                        onClick={()=> setRoute(context.props.navbar, "/loja")}
                        className="btn btn-success btn-lg my-3">
                            Continuar Comprando
                    </button>
                </div>
                <button 
                    type="button" 
                    data-toggle="modal" data-target="#checarEndereco"
                    className="btn btn-warning btn-lg">
                        Finalizar Compra <FontAwesomeIcon icon={faMoneyBillWave} style={{color:"white"}} />
                </button>
            </div>
        });

    } else if (carrinho.length === 0) {
        
        context.setState({
            btnFinalizarCompra: ""
        });

    } else {

        context.setState({
            btnFinalizarCompra: <h3 className="text-center">Aguardando Cálculo do Frete com os Correios...</h3>
        });
    }
}

export default btnFinalizarCompra;