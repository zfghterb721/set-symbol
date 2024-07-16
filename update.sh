#/bin/bash
#pull in the latest keyrune 
git submodule foreach git pull origin master
#download latest mtgjson set list
wget -O SetList.json https://mtgjson.com/api/v5/SetList.json
#this transforms the mtgjson data into a lookup json file
mkdir -p ./temp
wget -O ScrySets.json https://api.scryfall.com/sets
json_data=`cat ScrySets.json`
echo "$json_data" | jq -r '.data[] | .code + " " + .icon_svg_uri' | while read -r code url; do
    wget -q -O "./temp/${code}.svg" "$url"
    echo "Downloaded ${code}.svg"
done

echo "All Scryfall SVG icons have been downloaded to ./temp/{code}.svg"

node ./generators/generate_mtgjson.js
#this stringifies the svgs into a JSON file with setcode:svgdata
node ./generators/generate_symbols.js