import twilio from 'twilio';

// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioClient = twilio(accountSid, authToken);

// const message = await client.messages.create({
//   body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
//   from: '+15017122661',
//   to: '+15558675310',
// });

// console.log(message.body);

export default twilioClient;
