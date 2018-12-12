const twilio = require('twilio');

// const accountSid = 'AC7fbc45e753c45a5df8c090086bfe7cbf';
// const authToken = '55d7e9e9aa94f0dac3e2f480d439cb1b';
const accountSid = process.env.TWILLIO_ACCOUNT_SID
const authToken = process.env.TWILIO_AUTH_TOKEN

module.exports = new twilio.Twilio(accountSid, authToken);
