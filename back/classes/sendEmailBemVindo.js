const nodemailer = require('nodemailer');

const sendEmailBemVindo = (email, subject, dadosCliente) => {

    let transporter = nodemailer.createTransport({

        host: "email-ssl.com.br",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: 'noreply@easeshopp.com.br',
            pass: ''
        }
    });

    html = `<div>
            <img src="https://easeshopp.com.br/email/Topo.jpg" />
            <hr/>
            <p>
                Olá ${dadosCliente.nome},<br/><br/>
                Obrigado por se cadastrar! A Easeshopp é um Marketplace que dá a 
                oportunidade de você usar os seus benefícios de maneira livre. <br/><br/>

                Os dados abaixo serão importantíssimos para o acesso ao aplicativo. 
                Com o aplicado você conseguirá pagar pelas suas compras e realizar resgates do seu saldo.<br/><br/>

                Clique no link para validar o cadastro: <a href="${dadosCliente.link}">${dadosCliente.link}</a> seu codigo de indicação é <b>${dadosCliente.codAleatorio}</b>
                passe para seus amigos quando eles forem se cadastrar, para você ganhar vantagens na loja </br><br/>

                <b>Confira seus dados de acesso:</b><br/><br/>
                <b>Login: ${dadosCliente.email}</b><br/>
                <b>Senha do Site: ${dadosCliente.senha}</b><br/>
                <b>Senha do Cartão (App): ${dadosCliente.senhaCartao}</b><br/><br/>

                <b>Faça o download do aplicativo</b><br/>
                É necessário o uso do aplicativo para a realização dos pagamentos e/ou resgates.<br/><br/>

                <a href="https://apps.apple.com/br/app/ease-shopp-ltda/id1592107480" 
                target="_blank" rel="noopener noreferrer">
                    <img src="https://easeshopp.com.br/email/download-ios.png" />
                </a><br/>

                <a href="https://play.google.com/store/apps/details?id=br.com.easeshopp" 
                target="_blank" rel="noopener noreferrer">
                    <img src="https://easeshopp.com.br/email/download-android.png" />
                </a><br/><br/><br/>

                <b>Duvidas?</b><br/><br/>
                Caso possua alguma dúvida sobre o nosso site, problema de acesso ou precisa entrar em contato com nosso Atendimento.<br/><br/>

                <b>sac@easeshopp.com.br</b><br/><br/>

                Atenciosamente,<br/>
                <b>Equipe Easeshopp</b>
            </p>
        </div>`;

        /*<b>Duvidas?</b><br/>

        Caso possua alguma dúvida sobre o nosso site, problema de acesso ou precisa entrar 
        em contato com nosso Atendimento.

        <img src="https://easeshopp.com.br/email/Central.jpg" /><br/><br/>*/

    let mailOptions = {

        from: 'noreply@easeshopp.com.br',
        //to: usuario.email + ", " + parceiro.email,
        to: email,
        subject: subject,
        //text: text,
        html: html
    };

    transporter.sendMail(mailOptions, function(error, info) {

        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}

module.exports = sendEmailBemVindo;