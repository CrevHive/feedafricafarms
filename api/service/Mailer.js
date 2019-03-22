/**
 * @author Tolu Adetuyi
 * 
 * This service caters for sending emails
 * 
 */
const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    service: 'SendGrid',
    auth: {
        user: process.env.MAIL_EMAIL,
        pass: process.env.MAIL_PASSWORD
    }
});

class MailerService {

    /**
     * This method send out email using the payload data
     * @param {object} payload {from: 'emailfrom',to: 'emailto',subject: 'subject',text: 'body' }
     */
    sendMessage(payload) {

        transporter.sendMail(payload, (error, info) => {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
    }

}
module.exports = new MailerService();