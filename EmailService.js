const sender = require('./email');
module.exports = {
    send( mailOptions ){
        sender.sendMail(mailOptions, (err, info) => {
            if (err) {
                console.log('Erro ao enviar o email: ' + err);
            } else {
                console.log('email enviado com sucesso.')
            }
        });
    }
}