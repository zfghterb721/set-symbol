import {
	OpenAPIRoute,
	OpenAPIRouteSchema,
	Query,
} from "@cloudflare/itty-router-openapi";
import { Task } from "../types";

export class GetSetSymbol extends OpenAPIRoute {
	static schema: OpenAPIRouteSchema = {
		tags: ["Symbol"],
		summary: "Convert a set name to a svg of the symbol",
		parameters: {
			setName: Query(String, {
				description: "The name of the set to find the symbol for",
				required: true,
			}),
		},
		responses: {
			"200": {
				description: "Returns the symbol as an SVG",
				content: {
					"image/svg+xml": {
						schema: {
							type: "string",
						},
					},
				},
			},
		},
	};

	async handle(
		request: Request,
		env: any,
		context: any,
		data: Record<string, any>
	) {
		// Retrieve the validated parameters
		const { setName } = data.query;

		// Implement your own object list here

		const symbol = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
  <path d="M8 14l4 4 4-4"/>
</svg>`;

		return new Response(symbol, {
			status: 200,
			headers: {
				"Content-Type": "image/svg+xml",
			},
		});
	}
}
