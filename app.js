//You must install Node.Js  Link: https://nodejs.org/en/      
//You must instal Nodemailer  Link: https://www.npmjs.com/package/nodemailer
//You must instal node-cron  Link: https://www.npmjs.com/package/node-cron
//Nodemailer and node-cron must be installed in same folder in which you will create this file
//Name the file as app.js

const nodemailer = require('nodemailer');
const cron = require('node-cron');
var fs=require('fs');

require.extensions['.html'] = function (module, filename) {
    module.exports = fs.readFileSync(filename, 'utf8');
};

 var data = require('here comes the path'); // add path to your HTML template
 // You Can only use Inline css
 //A sample Mail HTMl will be provided in my git rep

var transporter = nodemailer.createTransport({
  service: 'gmail', //if using oultook or any other mail service type "hotmail" 
  //If you use gmail then then turn on less secure apps using this link: https://myaccount.google.com/lesssecureapps
  auth: {
    user: '***@***.com',  //Your Email ID
    pass: '*********' //Your Email's Pass Word
  }
});

var a='<h1>Welcome</h1><p>That was easy!</p>';var a='<h1>Welcome</h1><p>That was easy!</p>';

var mailOptions = {
  from: '***@***.com',   // Email you used above
  to: 'shhdj@vjkbv.com', //Receiptents Email-ID 
  //If you want to add more than one Receiptent replace the above syntax with the below Syntax:
  //to: 'reciever email address 1, reciever email address 2, reciever email address 3,..',
  subject: 'Node Mail Test',
  text: 'Hi, This is an Automated Mail Created Using Nodemailer & Node-Cron';
  html:data
};

cron.schedule('* * * * * *', () => { // * * * * * * this stars are Scheduling Syntax and each star represents second/minute/
    // For Scheduling syntax refer this website: https://www.npmjs.com/package/node-cron
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email Has Being Sent!' + info.response);
        }
      });
})
//To run this file open terminal and type : node app.js
