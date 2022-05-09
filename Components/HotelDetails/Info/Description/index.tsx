import { Rating, Typography } from "@mui/material";
import React from "react";

type Props = {
  description: string;
};
const Description = (props: Props) => {
  return <Typography variant="body1">{props.description}</Typography>;
};

export default Description;
