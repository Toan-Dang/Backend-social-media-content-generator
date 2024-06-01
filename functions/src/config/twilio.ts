import config from "./config";
import twilio from "twilio";

const accountSid = config.twilio.accountSid;
const authToken = config.twilio.authToken;
const client = twilio(accountSid, authToken);
export { client };
