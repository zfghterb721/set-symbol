const fs = require('fs');
const path = require('path');

const svgDir = './keyrune/svg';
const svgDir2 = './temp';
const outputFilePath = './src/svg_data.json';

const svgData = {};

fs.readdirSync(svgDir).forEach((file) => {
  if (path.extname(file) === '.svg') {
    const filePath = path.join(svgDir, file);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const title = file.replace('.svg', '');
    svgData[title] = fileContent;
  }
});

fs.readdirSync(svgDir2).forEach((file) => {
  if (path.extname(file) === '.svg') {
    const filePath = path.join(svgDir2, file);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const title = file.replace('.svg', '');
    svgData[title] = fileContent;
  }
});

const jsonData = JSON.stringify(svgData, null, 2);

fs.writeFileSync(outputFilePath, jsonData);