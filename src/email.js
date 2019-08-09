const nodemailer = require('nodemailer');

const serviceEmail = {
    host: "",
    port: "",
    secure: "",
    auth: {
        user: "",
        pass: ""
    }
};

const serviceGmail = {
    service: 'gmail',
    auth: {
        user: '',
        pass: ''
    }
};

const sender = nodemailer.createTransport(serviceGmail);

module.exports = sender;


