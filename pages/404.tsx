import { Container } from "@mui/material";
import React from "react";

const Error = () => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>404</h1>
      <h2>Page not found</h2>
    </Container>
  );
};

export default Error;
