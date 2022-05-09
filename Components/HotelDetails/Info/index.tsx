import React from "react";
import { Hotel } from "../../../data/hotels";

type Props = {
  hotel: Hotel;
};

const HotelInfo = (props: Props) => {
  const { hotel } = props;
  return <div>HotelInfo</div>;
};

export default HotelInfo;
