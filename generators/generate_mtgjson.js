const fs = require('fs');

// Read the SetList.json file
const setListData = fs.readFileSync('./SetList.json', 'utf8');
const setList = JSON.parse(setListData);

// Create a new object to store the transformed data
const mtgjsonLookup = {};

// Iterate over each item in the data property
setList.data.forEach((item) => {
  const { name, keyruneCode } = item;
  mtgjsonLookup[name] = keyruneCode.toLowerCase();
});

// Write the output to mtgjsonlookup.json
fs.writeFileSync(
  './src/mtg_json_setcode.json',
  JSON.stringify(mtgjsonLookup, null, 2)
);

console.log('mtg_json_setcode.json file generated successfully!');
