const path = require('path');
const fs = require('fs');

const textFile = path.join(__dirname, 'text.txt');

const readableStream = fs.createReadStream(textFile);

readableStream.on('data', test => console.log(test.toString()));



