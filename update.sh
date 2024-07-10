#/bin/bash
#pull in the latest keyrune 
git submodule foreach git pull origin master
#download latest mtgjson set list
wget -O SetList.json https://mtgjson.com/api/v5/SetList.json
#this transforms the mtgjson data into a lookup json file
node ./generators/generate_mtgjson.js
#this stringifies the svgs into a JSON file with setcode:svgdata
node ./generators/generate_symbols.js