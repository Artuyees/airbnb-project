// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Hotel, hotels } from "../../../data/hotels";

export type Data = Hotel[] | Hotel;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "GET") {
    res.status(200).json(hotels);
    console.log(hotels);
  }
}
