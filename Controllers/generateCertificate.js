const fs = require('fs');
const mongoose = require('mongoose'); 
const {
  createCanvas,
  loadImage,
  registerFont,
} = require('canvas');

exports.generateCertificate = async (arg)=>{
  console.log(">>Generating Certificate for "+arg.email);
  const imgName = Date.now()+arg.Name;
  const backgroundImage = await loadImage('./bin/template.png');
  registerFont('./Fonts/Luciole-Regular.ttf', { family: 'Luciole' })
  const imageCanvas = createCanvas(backgroundImage.width, backgroundImage.height, 'pdf');
  const context = imageCanvas.getContext('2d');
  context.drawImage(backgroundImage, 0, 0, backgroundImage.width, backgroundImage.height);
  context.font = '69px Luciole';
  context.textAlign='center';
  context.textBaseline = 'middle';
  context.fillText(arg.Name, 1000, 570);
  context.textAlign='center';
  context.fillStyle = 'brown';
  context.fillText(arg.TreeCount, 1000, 795);
  fs.writeFileSync(
    `./generated/`+imgName+`.pdf`,
    imageCanvas.toBuffer('file/pdf'),
  );
  return(imgName);
}