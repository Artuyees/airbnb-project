import { GetServerSideProps } from "next";

import React from "react";
import HotelDetails from "../../Components/HotelDetails";
import { Hotel, hotels } from "../../data/hotels";

type Props = {
  hotel?: Hotel;
};

const HotelPage = (props: Props) => {
  const { hotel } = props;
  return <HotelDetails hotel={hotel} />;
};

export default HotelPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const hotel = hotels.find(
    (hotel: Hotel) => hotel.id === Number(context.params?.id)
  );
  return {
    props: {
      hotel,
    },
  };
};
