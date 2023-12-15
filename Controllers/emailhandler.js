// import email from 'emailjs';
const nodemailer = require("nodemailer");
const emailtemplate = require('./emailtemplate');



  exports.transferMail = async (filename, userName, treeCount, userEMAIL) => {
    return new Promise((resolve, reject) => {
      const mail = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: "treecertify@gmail.com",
          pass: process.env.appkey,
        },
      });
      
      mail.sendMail({
        from: 'treecertify@gmail.com',
        to: userEMAIL,
        subject: 'Heartfelt Thanks for Your Tree-Planting Contribution 🌳',
        html: emailtemplate.getHTML(userName, treeCount),
        attachments: [{
          filename: 'Certificate.pdf',
          path: 'generated/' + filename + '.pdf',
          contentType: 'file/pdf',
        }]
      }, (err) => {
        if (err) {
          console.log(err);
          reject(err);
        } else {
          resolve(true);
        }
      });
    });
  };

exports.sendEmail = (req,res) =>{
    mail.sendMail({
        from: 'treecertify@gmail.com',
        to: 'geetanshsaini30@gmail.com',
        subject: 'Whatever you want',
        html: emailtemplate.getHTML("Geetansh Saini",30),
        attachments: [{
            filename: 'Certificate.png',
            path: 'generated/1701779320498.png',
            contentType: 'image/png',
          }]
    }, (err) => {
        if (err){res.send("Email Not Sent!");throw err;
        };
        console.log(`Invoice Mail sent`);
        res.send("EMAIL SENT");
        return true
    })
    return true;
}