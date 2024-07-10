This repo grabs MTG set symbols and makes them publically available on a cloudflare worker for quick embedding in web apps. We use it to embed set symbols into our Shopify Pullsheets.
## Requirements
I run all this in linux, and have node v20.14.0 installed. You'll need a cloudflare account if you want to run/host this yourself.
## Quick Start
Pull in keyrune submodule
```
git submodule init 
git submodule update
```

Install npm packages
```
npm install
```

You can then run `chmod +x ./update.sh` and `./update.sh` which pulls in latest MTGJSON and keyrune data and builds out a JSON dictionary for the cloudflare worker to serve svg icons.

After that you can run `npx wrangler dev` which will locally serve the api. You can then access icons via:
`{baseurl}/symbol/mtg?setName=Bloomburrow`

## Adding set alias
This assumes that your setNames match MTGJSONs, depending on your software you may have your setnames formatted differently and need to add aliases to get the icons to work. Feel free to update the setNameDictionary object in setNameDictionary.ts to add setName aliases. This file uses typescript so you get some convenient LSP autocomplete to make sure you are entering valid setcodes.


# Generic Cloudflare Notes
## Deploy via Cloudflare

1. Sign up for [Cloudflare Workers](https://workers.dev). The free tier is more than enough for most use cases.
2. Clone this project and install dependencies with `npm install`
3. Run `wrangler login` to login to your Cloudflare account in wrangler
4. Run `wrangler deploy` to publish the API to Cloudflare Workers

## Project structure

1. Your main router is defined in `src/index.ts`.
2. Each endpoint has its own file in `src/endpoints/`.
3. For more information read the [itty-router-openapi official documentation](https://cloudflare.github.io/itty-router-openapi/).

## Development

1. Run `wrangler dev` to start a local instance of the API.
2. Open `http://localhost:9000/` in your browser to see the Swagger interface where you can try the endpoints.
3. Changes made in the `src/` folder will automatically trigger the server to reload, you only need to refresh the Swagger interface.
