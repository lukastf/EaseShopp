const nodemailer = require('nodemailer');

const sendEmail = (email, subject, text) => {

    let transporter = nodemailer.createTransport({

        host: "email-ssl.com.br",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: 'noreply@easeshopp.com.br',
            pass: ''
        }
    });

    let mailOptions = {

        from: 'noreply@easeshopp.com.br',
        //to: usuario.email + ", " + parceiro.email,
        to: email,
        subject: subject,
        text: text
    };

    transporter.sendMail(mailOptions, function(error, info) {

        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}

module.exports = sendEmail;