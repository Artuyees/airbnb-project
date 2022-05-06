import type { NextApiRequest, NextApiResponse } from "next";
import { Hotel, hotels } from "../../../../data/hotels";

export type Data = Hotel[] | Hotel;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { filter } = req.query;
  const filteredHotels = hotels.filter((hotel) => {
    const { city } = hotel;
    return city === filter;
  });

  res.status(200).json(filteredHotels);
}
