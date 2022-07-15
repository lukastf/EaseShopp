
import React, { useState } from 'react';

const ComoComprar = () => {

    const setPaginaInicial = () => {

        setRender(
            paginaInicial
        )
    }

    const setCarregarCartaoEase = () => {

        setRender(
            carregarCartaoEase
        )
    }

    const setComoComprar = () => {

        setRender(
            comoComprar
        );
    }

    const setComoResgatar = () => {

        setRender(
            comoResgatar
        );
    }

    const paginaInicial =
        <div className="row col-12 mx-auto mt-4">
            <div className="col-12 text-center">
                <h1>Duvidas Frequentes</h1>
            </div>
            <div className="col-12 text-left">
                <p style={{marginTop:"2rem"}}>
                    <button onClick={setCarregarCartaoEase} type="button" className="btn btn-link">Recarregando meu cartão virtual Ease</button>
                </p>
                <p>
                    <button onClick={setComoComprar} type="button" className="btn btn-link">Como comprar? (Passo à passo)</button>
                </p>
                <p>
                    <button onClick={setComoResgatar} type="button" className="btn btn-link">Como realizar o resgate do seu Saldo?</button>
                </p>
            </div>
        </div>;

    const carregarCartaoEase =
        <div className="row col-12 mx-auto mt-4">
            <div className="col-12 text-center">
                <h1>Recarregando meu cartão virtual Ease</h1>
            </div>
            <div className="col-12 text-left">
                <button type="button" className="btn btn-link" onClick={setPaginaInicial}>Voltar</button>
            </div>
            <div className="col-12 text-left">
                <p style={{marginTop:"2rem", marginBottom: "2rem"}}>1 – Acesse o aplicativo digitando o número do CPF (ou de seu cartão virtual), em seguida digite a  senha que foi enviada via e-mail, após o cadastro aqui no site: </p>
                <img src="/recarregar-cartao/recarregar-cartao-1.png" style={{width: "50%"}} alt="recarregar-cartao-1"/>
                <img src="/recarregar-cartao/recarregar-cartao-2.png" style={{width: "50%"}} alt="recarregar-cartao-2"/>

                <p style={{marginTop:"2rem", marginBottom: "2rem"}}>2 – Após acessar, irá aparece a tela abaixo, logo em seguida clique em cima do cartão virtual: </p>
                <img src="/recarregar-cartao/recarregar-cartao-3.png" style={{width: "50%"}} alt="recarregar-cartao-3"/>

                <p style={{marginTop:"2rem", marginBottom: "2rem"}}>3 – Na próxima tela, em operações, clique em (Pagar/Transferir): </p>
                <img src="/recarregar-cartao/recarregar-cartao-4.png" style={{width: "50%"}} alt="recarregar-cartao-4"/>

                <p style={{marginTop:"2rem", marginBottom: "2rem"}}>4 – Irá aparecer um cartão virtual, nesse cartão você deverá digitar os números do cartão de nosso parceiro: </p>
                <img src="/recarregar-cartao/recarregar-cartao-5.png" style={{width: "50%"}} alt="recarregar-cartao-5"/>

                <p style={{marginTop:"2rem", marginBottom: "2rem"}}>5 – Na próxima tela irá aparecer seu saldo (no cartão do parceiro), e no campo valor, digite o valor a ser debitado no cartão virtual da Ease Shopp:
                    Obs: vale lembrar que não é possível realizar a operação inversa, então muita atenção na hora de digitar o valor desejado.</p>
                <img src="/recarregar-cartao/recarregar-cartao-6.png" style={{width: "50%"}} alt="recarregar-cartao-6"/>

                <p style={{marginTop:"2rem", marginBottom: "2rem"}}>6 – Em seguida, você deverá informar a senha do seu cartão (cartão parceiro), para que a transferência seja efetuada: </p>
                <img src="/recarregar-cartao/recarregar-cartao-7.png" style={{width: "50%"}} alt="recarregar-cartao-7"/>

                <p style={{marginTop:"2rem", marginBottom: "2rem"}}>7 – Se a transferência for realizada com sucesso, irá aparecer uma tela similar a abaixo: </p>
                <img src="/recarregar-cartao/recarregar-cartao-8.png" style={{width: "50%"}} alt="recarregar-cartao-8"/>

                <p style={{marginTop:"2rem", marginBottom: "2rem"}}>8 – PRONTO! Com seu cartão virtual recarregado, você já pode realizar as suas compras! </p>
                <img src="/recarregar-cartao/recarregar-cartao-9.png" style={{width: "50%"}} alt="recarregar-cartao-9"/>
            </div>
            <div className="col-12 col-md-6 text-center justify-content-center mt-5">
                <h3>Video Recarregar Cartão</h3>
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe title="recarregar-cartao-video" className="embed-responsive-item" src="https://www.youtube.com/embed/GlA_rHTzrgI"></iframe>
                </div>
            </div>
        </div>

    const comoComprar =
        <div className="row col-12 mx-auto mt-4">
            <div className="col-12 text-center">
                <h1>Como Comprar ?</h1>
            </div>
            <div className="col-12 text-left">
                <button type="button" className="btn btn-link" onClick={setPaginaInicial}>Voltar</button>
            </div>
            <div className="col-12 text-left">
                <p style={{marginTop:"2rem", marginBottom: "2rem"}}>1 - Escolha o produto que deseja comprar, clicando sobre ele.</p>
                <img src="/como-comprar/como-comprar-1.png" style={{width: "50%"}} alt="como-comprar-1"/>

                <p style={{marginTop:"2rem", marginBottom: "2rem"}}>2 - Clique no botão de "Adicionar ao carrinho" ou "Comprar". O seu produto será adicionado ao carrinho e você poderá 
                seguir comprando, caso desejar.</p>
                <img src="/como-comprar/como-comprar-2.png" style={{width: "50%"}} alt="como-comprar-2"/>

                <p style={{marginTop:"2rem", marginBottom: "0rem"}}>3 - Você poderá seguir adicionando outros produtos ao carrinho, verifique ao lado o frete, em seguida clique em "Finalizar Compra". </p>
                <p style={{marginBottom: "2rem"}}>Obs: Alguns parceiros, oferecem a retirada dos produtos em suas lojas.</p>
                <img src="/como-comprar/como-comprar-3.png" style={{width: "50%"}} alt="como-comprar-3"/>

                <p style={{marginTop:"2rem", marginBottom: "2rem"}}>4 - Coloque o endereço de onde você deseja receber o produto e clique em "Continuar".</p>
                <img src="/como-comprar/como-comprar-4.png" style={{width: "50%"}} alt="como-comprar-4"/>

                <p style={{marginTop:"2rem", marginBottom: "2rem"}}>5 - Os envios serão realizados via Correios ou por transportadoras, caso os fornecedores disponibilizem esses outros meios de entrega. 
                Cada fornecedor possuí a sua política de entrega.</p>
                <img src="/como-comprar/como-comprar-4.png" style={{width: "50%"}} alt="como-comprar-4"/>

                <p style={{marginTop:"2rem", marginBottom: "2rem"}}>6 – Após confirmação do endereço de envio, clique em CONTINUAR para finalizar a compra, conforme imagem acima. Um QR-Code com todas as 
                informações será gerado para realizar o pagamento via app EaseShopp. Conforme assim informado em nossas políticas de segurança os pagamentos são por meio do QR-Code, para sua maior segurança.</p>
                <img src="/como-comprar/como-comprar-5.png" style={{width: "50%"}} alt="como-comprar-5"/>
                
                <p style={{marginTop:"2rem", marginBottom: "0rem"}}>7 - Uma vez debitado o pagamento, o fornecedor receberá o pedido para verificação e preparação de entrega da compra. Podendo ser acompanhado no site os status e etapas para o recebimento.</p>
                <p style={{marginBottom: "2rem"}}>Obs.: Não disponibilizamos compras através de telefone ou e-mail. Somente através do site com o aplicativo instalado.</p>
            </div>
            <div className="col-12 col-md-6 text-center justify-content-center mt-5">
                <h3>Video Como Comprar</h3>
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe title="como-comprar-video" className="embed-responsive-item" src="https://www.youtube.com/embed/1vzV5tQuf3g"></iframe>
                </div>
            </div>
        </div>

    const comoResgatar =
        <div className="row col-12 mx-auto mt-4">
            <div className="col-12 text-center">
                <h1>Como realizar o resgate do seu Saldo?</h1>
            </div>
            <div className="col-12 text-left">
                <button type="button" className="btn btn-link" onClick={setPaginaInicial}>Voltar</button>
            </div>
            <div className="col-12 text-left">
                <p style={{marginTop:"2rem", marginBottom: "2rem"}}>1 – Acesse o aplicativo da EaseSHOPP, clique sobre o cartão virtual:</p>
                <img src="/resgate-saldo/resgate-saldo-1.png" style={{width: "50%"}} alt="resgate-saldo-1"/>

                <p style={{marginTop:"2rem", marginBottom: "2rem"}}>2 – Em seguida, em “Operações” clique no botão “Efetuar” em frente da opção “Pagar/Transferir”:</p>
                <img src="/resgate-saldo/resgate-saldo-2.png" style={{width: "50%"}} alt="resgate-saldo-2"/>

                <p style={{marginTop:"2rem", marginBottom: "2rem"}}>3 – Nessa área você deve digitar o número de seu cartão que possui o crédito (refeição/alimentação):</p>
                <img src="/resgate-saldo/resgate-saldo-3.png" style={{width: "50%"}} alt="resgate-saldo-3"/>

                <p style={{marginTop:"2rem", marginBottom: "0rem"}}>4 – Se tudo estiver certo aparecerá essa tela abaixo, com seu saldo e o valor que você deseja inserir como crédito no Cartão Virtual da Easeshopp:</p>
                <p style={{marginBottom: "2rem"}}>OBS: No exemplos entramos com o valor de R$ 200,00.</p>
                <img src="/resgate-saldo/resgate-saldo-4.png" style={{width: "50%"}} alt="resgate-saldo-4"/>

                <p style={{marginTop:"2rem", marginBottom: "2rem"}}>5 – Em seguida digite a senha do seu cartão, para finalizar o processo:</p>
                <img src="/resgate-saldo/resgate-saldo-5.png" style={{width: "50%"}} alt="resgate-saldo-5"/>

                <p style={{marginTop:"2rem", marginBottom: "2rem"}}>6 –  Aparecerá essa tela se tudo estiver correto:</p>
                <img src="/resgate-saldo/resgate-saldo-6.png" style={{width: "50%"}} alt="resgate-saldo-6"/>
                
                <p style={{marginTop:"2rem", marginBottom: "2rem"}}>7 – Veja, o saldo já está no seu cartão Virtual da EaseSHOPP: </p>
                <img src="/resgate-saldo/resgate-saldo-7.png" style={{width: "50%"}} alt="resgate-saldo-7"/>

                <p style={{marginTop:"2rem", marginBottom: "2rem"}}>8 – Em seguida entraremos no processo de resgate, para isso acesse o site da EaseSHOPP e clique em CONTA, aparecerá a tela abaixo: </p>
                <img src="/resgate-saldo/resgate-saldo-8.png" style={{width: "50%"}} alt="resgate-saldo-8"/>

                <p style={{marginTop:"2rem", marginBottom: "0rem"}}>9 – Em seguida clique na opção “Resgate”,  antes de realizar o seu resgate é necessário cadastrar uma conta bancária, que será depositado o valor desejado.</p>
                <p style={{marginBottom: "2rem"}}> OBs: Vale lembrar que a conta bancária deve ser da mesma pessoa que possui o saldo, não será transferido para uma outra pessoa.</p>
                <img src="/resgate-saldo/resgate-saldo-9.png" style={{width: "50%"}} alt="resgate-saldo-9"/>

                <p style={{marginTop:"2rem", marginBottom: "2rem"}}>10 – Em seguida digite o valor a ser transferido (valor mínimo de R$ 100,00):</p>
                <img src="/resgate-saldo/resgate-saldo-10.png" style={{width: "50%"}} alt="resgate-saldo-10"/>

                <p style={{marginTop:"2rem", marginBottom: "2rem"}}>11- Confira o valor, veja os custos operacionais e assinale a opção “Estou ciente e concordo com a operação”, se tudo estiver correto cliente em Resgatar.</p>
                <img src="/resgate-saldo/resgate-saldo-11.png" style={{width: "50%"}} alt="resgate-saldo-11"/>

                <p style={{marginTop:"2rem", marginBottom: "2rem"}}>12 – Em seguida aparecerá um QR-Code  para você validar a transferência:</p>
                <img src="/resgate-saldo/resgate-saldo-12.png" style={{width: "50%"}} alt="resgate-saldo-12"/>

                <p style={{marginTop:"2rem", marginBottom: "2rem"}}>13 – Com o celular em mãos e o aplicativo aberto, clique em “Escanear”:</p>
                <img src="/resgate-saldo/resgate-saldo-13.png" style={{width: "50%"}} alt="resgate-saldo-13"/>

                <p style={{marginTop:"2rem", marginBottom: "2rem"}}>14 – Abrirá o Scanner no celular e você irá mira na tela de seu Computador:</p>
                <img src="/resgate-saldo/resgate-saldo-14.png" style={{width: "50%"}} alt="resgate-saldo-14"/>
                <img src="/resgate-saldo/resgate-saldo-15.png" style={{width: "50%"}} alt="resgate-saldo-15"/>

                <p style={{marginTop:"2rem", marginBottom: "2rem"}}>15 – Em seguida, confira os dados e confirme:</p>
                <img src="/resgate-saldo/resgate-saldo-16.png" style={{width: "50%"}} alt="resgate-saldo-16"/>
                <img src="/resgate-saldo/resgate-saldo-17.png" style={{width: "50%"}} alt="resgate-saldo-17"/>

                <p style={{marginTop:"2rem", marginBottom: "2rem"}}>OBs: Para agilizar o processo, você pode estar clicando em enviar, isso enviara o comprovante para nosso e-mail (contato@easeshopp.com.br)</p>
                <img src="/resgate-saldo/resgate-saldo-18.png" style={{width: "50%"}} alt="resgate-saldo-18"/>

                <p style={{marginTop:"2rem", marginBottom: "2rem"}}>16 – Pronto! Agora é só aguardar a sua transferência.</p>
                <img src="/resgate-saldo/resgate-saldo-19.png" style={{width: "50%"}} alt="resgate-saldo-19"/>

            </div>
            <div className="col-12 col-md-6 text-center justify-content-center mt-5">
                <h3>Video Como Resgatar</h3>
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe title="como-comprar-video" className="embed-responsive-item" src="https://www.youtube.com/embed/BtC5yuhzJBE"></iframe>
                </div>
            </div>
        </div>

        const [render, setRender] = useState(
            paginaInicial
        );

    return (
        render
    );
}

export default ComoComprar;