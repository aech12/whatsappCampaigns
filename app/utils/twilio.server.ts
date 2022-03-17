const client = require("twilio")(
  process.env.TW_ACCOUNT_SID,
  process.env.TW_AUTHTOKEN
);

const sendMsj = async (number: string) => {
  return await client.messages
    .create({
      body: "Your appointment is coming up on July 21 at 3PM",
      from: "whatsapp:+14155238886",
      // to: `whatsapp:+${number}`,
      to: `whatsapp:+${5492920502421}`,
    })
    .then((message: any) => console.log(message.sid))
    .done();
};

export { sendMsj };
