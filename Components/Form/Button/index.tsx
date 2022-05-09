import { Button } from "@mui/material";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import { QueryContext } from "../../../pages/_app";

const SearchButton = () => {
  const query = useContext(QueryContext);
  const router = useRouter();
  return (
    <Button
      sx={{ paddingX: 4, paddingY: 1, fontSize: "1rem" }}
      variant="contained"
      onClick={() => {
        router.push(
          query?.query.city
            ? `hotels/city?city=${query?.query.city}&guests=${query?.query.adults}`
            : `hotels`
        );
      }}
    >
      Search
    </Button>
  );
};

export default SearchButton;
