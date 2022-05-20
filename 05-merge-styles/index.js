const path = require('path');
const fs = require('fs');

const stylesPath = path.join(__dirname, 'styles');

fs.writeFile(path.join(__dirname, 'project-dist', 'bundle.css'), '', err => {
  if (err) throw err;
});

const projectPath = path.join(__dirname, 'project-dist', 'bundle.css');
const writeStream = fs.createWriteStream(projectPath);


fs.readdir(stylesPath, {withFileTypes: true}, (err, files) => {
  if (err) {
    throw err;
  } else {
    files.forEach(file => {
      const styles = path.join(stylesPath, file.name);
      if (file.isFile() && path.extname(styles).slice(1) === 'css') {
        const styleFilePath = path.join(stylesPath, file.name);
        let readableStream = fs.createReadStream(styleFilePath);
        readableStream.pipe(writeStream);
      }});
  }
});

 