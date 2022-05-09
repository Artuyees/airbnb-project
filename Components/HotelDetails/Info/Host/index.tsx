import { Avatar, Divider, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { Fragment } from "react";

type Props = {
  rating: string;
  hostName: string;
};
const Host = (props: Props) => {
  return (
    <>
      <Stack direction="row" alignItems="center" spacing={2} padding={2}>
        <Typography variant="h6"> {props.hostName}</Typography>
        <Typography>
          <Avatar sx={{ width: 56, height: 56 }}></Avatar>
        </Typography>
      </Stack>
      <Typography variant="body1">{props.rating}</Typography>
    </>
  );
};

export default Host;
