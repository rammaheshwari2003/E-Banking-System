const nodemailer=require("nodemailer");

let mailTransporter =
    nodemailer.createTransport(
        {
            service: 'gmail',
            auth: {
                user: 'rammaheshwari2022@gmail.com',
                pass: "fgey dkox nmti tunm"
            }
        }
    );

let mailDetails = {
    from: 'rammaheshwari2022@gmail.com',
    to: email,
    subject: `Forgot Your Password`,
    text: `Dear Account Holder \n You have requested a forgot password for your account. Please enter the following One-Time Password (OTP) on the password :${formatPass} \n Thank you`
};

mailTransporter
    .sendMail(mailDetails,
        function (err, data) {
            if (err) {
                console.log('Error Occurs');
            } else {
                console.log('Email sent successfully');
            }
        });

module.exports=nodemailer;