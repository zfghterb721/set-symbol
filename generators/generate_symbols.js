const fs = require('fs');
const path = require('path');

const svgDir = './keyrune/svg';
const outputFilePath = './src/svg_data.json';

const svgData = {};

fs.readdir(svgDir, (err, files) => {
  console.log('Reading directory:', svgDir);
  if (err) {
    console.error('Error reading directory:', err);
    return;
  }

  files.forEach((file) => {
    if (path.extname(file) === '.svg') {
      const filePath = path.join(svgDir, file);
      const fileContent = fs.readFileSync(filePath, 'utf8');
      const title = file.replace('.svg', '');
      svgData[title] = fileContent;
    }
  });

  const jsonData = JSON.stringify(svgData, null, 2);

  fs.writeFile(outputFilePath, jsonData, (err) => {
    if (err) {
      console.error('Error writing JSON file:', err);
      return;
    }

    console.log('JSON file written successfully!');
  });
});
