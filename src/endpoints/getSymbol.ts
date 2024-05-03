import {
	OpenAPIRoute,
	OpenAPIRouteSchema,
	Query,
} from "@cloudflare/itty-router-openapi";
import svgData from "../svg_data.json";
import { getSetCode } from "setNameDictionary";


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

		const setCode = getSetCode(setName);
		const symbol = svgData[setCode];
		if (!symbol) {
			return new Response(
				`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"></svg>`,
				{
					status: 200,
					headers: {
						"Content-Type": "image/svg+xml",
					},
				}
			);
		}

		return new Response(symbol, {
			status: 200,
			headers: {
				"Content-Type": "image/svg+xml",
			},
		});
	}
}
