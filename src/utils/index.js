const fs = require('fs');
const path = require('path');

const mainFolder = `${process.env.PWD}/public`

const directory = `${mainFolder}/uploads`;
export const removeDir = () =>
fs.readdir(directory, (err, files) => {
  if (err) throw err;

  for (const file of files) {
    fs.unlink(path.join(directory, file), err => {
      if (err) throw err;
    });
  }
});

export const writeFile = (fileData) =>  fs.writeFile(`${mainFolder}/data.json`, JSON.stringify({ ...fileData }),(e, d) => console.log('success'));
