const express = require('express');
const app = express();
const db = require('./Middlewares/db');
const path = require('path');
const email = require('./Controllers/emailhandler.js')
const PORT = 3002;
app.use(express.static(path.join(__dirname, 'public')))
const xlreader =  require('./Controllers/xltojson');
const multer = require('multer');
const generateCertificate = require('./Controllers/generateCertificate');
const storage = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null,'uploads')
    },
    filename: (req, file, cb) => {
        cb(null,Date.now()+path.extname(file.originalname))
    }
})

const upload = multer({storage: storage});

db.connectToDB();

app.set("view engine","ejs");
app.set('views', path.join(__dirname, 'views'));


app.get('/getjson',xlreader);
app.get('/sendmail',email.sendEmail);

app.get('/upload',(req,res)=>{
    res.render('upload');
})

app.get('/certificate',(req,res)=>{
    res.render('certificate');
})


app.post('/upload',upload.single('uploadfile'),(req,res)=>{
    const uploadedFilename = req.file.filename;
    res.redirect(`/getjson?filename=${uploadedFilename}`);
})

app.get('/',(req,res)=>{
    res.render('upload');
})

app.listen(PORT,()=>{console.log("Server running on port 3001")});
