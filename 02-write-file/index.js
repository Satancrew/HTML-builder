const fs = require('fs');
const process = require('process');
const { stdin, exit, stdout } = process;

let createdFile = fs.createWriteStream('./02-write-file/text.txt')

stdout.write('Введите текст:\n');

stdin.on('data', data => {
  let textForInput = data.toString();
  if (textForInput.trim() === 'exit') {
    stdout.write('Всего доброго, удачи на курсе!');
    exit()
  } else {
    createdFile.write(data);
  }
});

process.on('SIGINT', () => {
  stdout.write('Всего доброго, удачи на курсе!'); 
  process.exit();
});

