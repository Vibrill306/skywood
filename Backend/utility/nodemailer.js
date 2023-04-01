"use strict";
const nodemailer = require("nodemailer");

module.exports.sendMail=async function sendMail(str,data) {
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, 
    auth: {
      user: 'krishna.vibrill@gmail.com', 
      pass: 'qrdksuwtxpyhghri',
    },
  });

  var Osubject,Otext,Ohtml;
  if(str=='skywood'){
    Osubject=`Thank you for Contacting us ${data.name}`;
    Ohtml=`
    <h1>Welcome to Skywood Resort</h1>
    Hope you have good time !
    Here are your details-
    Name - ${data.name}<br>
    Email - ${data.email}<br>
    Check-In Date - ${data.checkIn}<br>
    Check-Out Date - ${data.checkOut}<br>`
  } 
  else if(str=="resetpassword"){
    Osubject=`Reset Password`;
    Ohtml=`
    <h1>vibrill_voucher.com</h1>
    Here is your link to reset your password !
    ${data.resetPasswordLink}`
  }

  let info = await transporter.sendMail({
    from: '"Skywood Resort" <krishna.vibrill@gmail.com>', // sender address
    to: data.email, // list of receivers
    subject: Osubject, // Subject line
    // text: "Hello world?", // plain text body
    html: Ohtml, // html body
    // attachments:[
    //     {filename:'Voucher.pdf', path:'./Voucher.pdf'}
    //   ]
  });

  console.log("Message sent: %s", info.messageId);
}
