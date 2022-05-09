import { Typography } from "@mui/material";
import React, { Fragment } from "react";

type Props = {
  name: string;
  description?: string;
};
const Title = (props: Props) => {
  return (
    <Fragment>
      <Typography variant="h2">{props.name}</Typography>
      {props.description && (
        <Typography variant="body1">{props.description}</Typography>
      )}
    </Fragment>
  );
};

export default Title;
