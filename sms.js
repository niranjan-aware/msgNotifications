// Download the helper library from https://www.twilio.com/docs/node/install
// Set environment variables for your credentials
// Read more at http://twil.io/secure
// const twilio = require('twilio');
const accountSid = "AC908317b2625d6060c9402e900a5b9f5c";
const authToken = "beff8679afbab75928545b81c20d4c20";
const client = require("twilio")(accountSid, authToken);
client.messages
  .create({ body: "Hello from Twilio", from: "+15075688675", to: "+919588699615" })
  .then(message => console.log(message.sid));