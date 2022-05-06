// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Hotel, hotels } from "../../../data/hotels";

export type Data = Hotel;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { method } = req;
  const { hotelId } = req.query;
  const hotel = hotels.find((hotel) => hotel.id === Number(hotelId));

  switch (method) {
    case "GET":
      if (hotel) {
        res.status(200).json(hotel);
      }
      break;
  }
}
