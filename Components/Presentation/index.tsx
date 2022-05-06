import { Paper } from "@mui/material";
import React from "react";
import { Hotel } from "../../data/hotels";
import Cards from "./Cards";

type Props = {
  data?: Hotel[];
};
const Presentation = (props: Props) => {
  const { data } = props;

  return (
    <Paper elevation={1} sx={{ width: "100%", marginBottom: 2, paddingY: 2 }}>
      <Cards data={data} title="Ideas for your next trip" />
    </Paper>
  );
};

export default Presentation;
