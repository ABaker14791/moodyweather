import type { NextApiRequest, NextApiResponse } from "next";

export async function handler(res: NextApiResponse, req: NextApiRequest) {
	console.log("weather");
	const location = req.body;
	// Todo: fetch from weather api

	res.status(200).json({});
}
