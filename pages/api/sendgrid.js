import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(`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`);

async function sendEmail(req, res) {
  try {
    // console.log("REQ.BODY", req.body);
    await sendgrid.send({
      to: "siddhartha8916@gmail.com", // Your email where you'll receive emails
      from: "siddhartha6916@gmail.com", // your website email address here
      subject: `${req.body.enteredSubject}`,
      html: ` <div> Name : ${req.body.enteredName}</div>
              <div> Phone : ${req.body.enteredPhone}</div>
              <div> Email : ${req.body.enteredEmail}</div>
              <div> Message : ${req.body.enteredMessage}</div>`,
    });
  } catch (error) {
    // console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: "" });
}

export default sendEmail;