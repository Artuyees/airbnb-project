import { Fragment } from "react";

import type { NextPage } from "next";
import Form from "../Components/Form";
import { Box } from "@mui/material";

const Home: NextPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Form />
    </Box>
  );
};

export default Home;
