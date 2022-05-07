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
      switch (query.searchParams) {
        case "city":
          setFilteredHotels(
            hotels.filter((hotel) => hotel.city === query.city)
          );
          break;
        case "country":
          console.log("dzialas");
          setFilteredHotels(
            hotels.filter((hotel) => hotel.country === query.country)
          );
          break;
        case "price":
          setFilteredHotels(
            hotels.filter((hotel) => hotel.price >= Number(query.price))
          );
          break;
        case "rating":
          setFilteredHotels(
            hotels.filter((hotel) => hotel.rating >= Number(query.rating))
          );
          break;
        case "stars":
          setFilteredHotels(
            hotels.filter((hotel) => hotel.stars >= Number(query.stars))
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
