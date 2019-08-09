const Queue = require('./Queue');

const mailOptions = {
    from: '',
    to: '',
    subject: '',
    text: '',
}


/**Criando o job com 5 tentativas */
const job = Queue.create('sendEmail', mailOptions).attempts(5).save();


/**Função chamada quando o job completar */
job.on('complete', (result) => {
    console.log('Resultado' + result);
});

/**Função chamada quando cada tentativa falhar */
job.on('failed attempts', (messageError, doneAttempts) => {
    console.log('Notification', 
      `Ocorreu o seguinte erro: ${messageError}.
      Essa é a ${doneAttempts} tentativa.`);
  });
  
  
  /**Função chamada quando todas as tentativas falharem */
  job.on('failed', (messageError) => {
    console.log('Notification', `Ocorreu o seguinte erro: ${messageError}.`)
  });

