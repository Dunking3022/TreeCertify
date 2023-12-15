const xlsx = require('xlsx');
const mongoose = require('mongoose');
const Donor = require('../Models/Donor');
const generateCertificate = require('./generateCertificate');

module.exports = async (req,res)=>{
    const filename = req.query.filename;
    const file = xlsx.readFile('uploads/'+filename);
    const userJSON = xlsx.utils.sheet_to_json(file.Sheets[file.SheetNames[0]]);
    // console.log(userJSON);
    Donor.insertMany(userJSON)
    .then(()=>{
        res.send("Documents Added to Database!")
    })
    .catch((err)=>{
        res.send("Error creating Documents");
        console.log(err);
    })
}