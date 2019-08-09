const kue = require('kue');

const Queue = kue.createQueue();

const MailService = require('./EmailService');


/**Cria um processo de envio de email*/
Queue.process('sendEmail', (data, done) => {

    const { data:mailOptions } = data;

    console.log(mailOptions);

    MailService.send(mailOptions);

    return done();
});

module.exports = Queue;