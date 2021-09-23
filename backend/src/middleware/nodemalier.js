const nodemailer = require('nodemailer');

const user = 'codwaves1@gmail.com';
const pass = 'mnjr8080';

const transport = nodemailer.createTransport({
      service:"Gmail",
      auth:{
          user:user,
          pass:pass
      }
});

module.exports.sendConfirmationEmail = (username, email, token) => {
   transport.sendMail({
        from:user,
        to:email,
        html:`<h1>Email Confirm your account</h1>
        <p>Please confirm your email by clicking by on the following link</p>
        <a href=http://localhost:4000/auth/confirm/${token}>Click here</a>`
   }).catch(err=>console.log(err));


}

module.exports.sendResetEmail = (username,email,token) =>{
    transport.sendMail({
        from:user,
        to:email,
        html:`<h1>Reset your account</h1>
           <p>Please Reset your account click following link</p>
           <a href=http://localhost:3000/reset/${token}>Click here</a>                                `
    }).catch(err=>console.log(err));
}


module.exports.Payment = (datetime,email) =>{
    transport.sendMail({
        from:user,
        to:email,
        html:`<h1>Payment successfull</h1>
           <p>Next payment ${datetime}</p>`
    }).catch(err=>console.log(err));
}