const mongoose = require('mongoose');
const generateCertificate = require('../Controllers/generateCertificate');
const emailhandler = require('../Controllers/emailhandler');

const Donor = mongoose.Schema({
    Name: {type: String, required : true},
    Phone: {type: Number},
    Email: {type: String, required : true, index: true},
    Amount : {type: Number, required : true},
    TreeCount: {type: Number, required : true},
    CertificateStatus: {type: String, enum : ['PENDING','SENT','FAILED'], index: true, default: 'PENDING'}
})

Donor.pre("insertMany", async function (next, docs) {
    try {
      const promises = docs.map(async (doc) => {
        try {
          const filename = await generateCertificate.generateCertificate(doc);
          const bool = await emailhandler.transferMail(filename, doc.Name, doc.Amount, doc.Email);
  
          if (bool) {
            console.log(`${filename} sent to mail ${doc.Email}`);
            doc.CertificateStatus = 'SENT';     
          } else {
            console.log("Error Encountered Sending Email");
            doc.CertificateStatus = 'FAILED';
          }
        } catch (error) {
          console.error("Error:", error);
          doc.CertificateStatus = 'FAILED';
        }
      });
  
      // Wait for all promises to resolve before calling next()
      await Promise.all(promises);
      next();
    } catch (error) {
      console.error("Error:", error);
      next(error);
    }
  });


module.exports = mongoose.model('Donor',Donor); 