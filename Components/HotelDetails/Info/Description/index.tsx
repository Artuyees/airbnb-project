import { Container, Rating, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

type Props = {
  description: string;
};
const Description = (props: Props) => {
  return (
    <Box sx={{ height: 250 }}>
      {" "}
      <Typography variant="body1">{props.description}</Typography>
    </Box>
  );
};

export default Description;
