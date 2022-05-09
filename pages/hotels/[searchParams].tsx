import { Container } from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import List from "../../Components/List";
import { Hotel, hotels } from "../../data/hotels";

const SearchPage = () => {
  const [filteredHotels, setFilteredHotels] = React.useState<Hotel[]>([]);
  const router = useRouter();
  const { query } = router;
  useEffect(() => {
    const search = async () => {
      const guests = query.guests ? Number(query.guests) : 1;
      switch (query.searchParams) {
        case "city":
          console.log(query.guests);
          if (!query.guests) {
            setFilteredHotels(
              hotels.filter((hotel) => hotel.city === query.city)
            );
          } else {
            setFilteredHotels(
              hotels.filter(
                (hotel) =>
                  hotel.city === query.city && hotel.maxGuests >= guests
              )
            );
          }
          break;
        case "country":
          setFilteredHotels(
            hotels.filter(
              (hotel) =>
                hotel.country === query.country && hotel.maxGuests >= guests
            )
          );
          break;
        case "price":
          setFilteredHotels(
            hotels.filter(
              (hotel) =>
                hotel.price >= Number(query.price) && hotel.maxGuests >= guests
            )
          );
          break;
        case "rating":
          setFilteredHotels(
            hotels.filter(
              (hotel) =>
                hotel.rating >= Number(query.rating) &&
                hotel.maxGuests >= guests
            )
          );
          break;
        case "stars":
          setFilteredHotels(
            hotels.filter(
              (hotel) =>
                hotel.stars >= Number(query.stars) && hotel.maxGuests >= guests
            )
          );
          break;

        default:
          setFilteredHotels(hotels);
          break;
      }
    };
    search();
  }, [query]);
  /*  */
  return (
    <List
      data={filteredHotels}
      result={
        typeof query.searchParams === "string" ? query.searchParams : undefined
      }
    />
  );
};

export default SearchPage;
