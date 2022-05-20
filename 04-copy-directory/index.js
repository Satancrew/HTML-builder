const path = require('path');
const fs = require('fs');



fs.mkdir(path.join(__dirname, 'files-copy'), { recursive: true }, err => {
  if (err) throw err;
});

const filesCopyPath = path.join(__dirname, 'files-copy');
const filesPath = path.join(__dirname, 'files');


fs.readdir(filesPath, (err, files) => {
  if (err) {
    throw err;
  } else {
    files.forEach(file => {
      fs.copyFile(path.join(filesPath, file), path.join(filesCopyPath, file), err => {
        if (err) throw err;
      });
    });
  }});

