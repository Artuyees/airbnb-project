// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export type Data = string[];

const cities = [
  "New York",
  "London",
  "Paris",
  "Tokyo",
  "Seoul",
  "Beijing",
  "Shanghai",
  "Warsaw",
  "Lodz",
  "Gdansk",
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json(cities);
  console.log(cities);
}
