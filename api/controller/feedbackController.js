/**
 * Feedback Controller
 * @author Tolu Adetuyi
 * 
 * This handles all Feedback requests 
 */
const MailService = require('../service/Mailer');

//Create a new feedback
exports.create_feedback = (req, res) => {
      //send an email to admin
      console.log(req.body);
      if(req.body.message){
        sendFeedbackMessage(req.body.message);
        res.status(200).json('sent');
      }else{
        res.status(400).json("Couldn't send your message");
      }
     
}

/**
* This method quickly send out feedback message for feed africa farms
* @FIXME to be moved to a domain or event class 
* @param {String} body The feedback message to be sent
*/
sendFeedbackMessage = (body) => {
  let mailOptions = {
    from: 'FeedAfricaFarms<info@faf.com>',
    to: 'team@feedafricafarms.com,tolu.adetuyi@gmail.com',
    subject: 'Feed Africa Farms Request',
    text: body
  };
  MailService.sendMessage(mailOptions);
}

