import { Divider, Rating, Stack } from "@mui/material";
import React from "react";
import { Hotel } from "../../../data/hotels";
import Description from "./Description";
import Host from "./Host";
import HotelProperties from "./Properties";
import Title from "./Title";

type Props = {
  hotel: Hotel;
};

const HotelInfo = (props: Props) => {
  const { hotel } = props;
  return (
    <Stack spacing={1} divider={<Divider orientation="horizontal" flexItem />}>
      <Title
        name={hotel.name}
        description={`${hotel.city}, ${hotel.country}`}
      />

      <HotelProperties properties={hotel.properties} />
      <Description description={hotel.description} />
      <Host
        hostName={hotel.host}
        rating={`${hotel.rating}/5 (${hotel.ratingCount} reviews)`}
      />
    </Stack>
  );
};

export default HotelInfo;
