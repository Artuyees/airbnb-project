import { Avatar, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { Fragment } from "react";

type Props = {
  rating: string;
  hostName: string;
};
const Host = (props: Props) => {
  return (
    <>
      <Stack direction="row" alignItems="center" spacing={2}>
        <Typography>
          <Avatar sx={{ width: 56, height: 56 }}></Avatar>
        </Typography>
        <Typography variant="h6"> {props.hostName}</Typography>
      </Stack>
      <Typography variant="body1">{props.rating}</Typography>
    </>
  );
};

export default Host;
