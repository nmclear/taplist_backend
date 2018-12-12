const twilio = require('twilio');

const accountSid = process.env.TWILLIO_ACCOUNT_SID
const authToken = process.env.TWILIO_AUTH_TOKEN

module.exports = new twilio.Twilio(accountSid, authToken);
