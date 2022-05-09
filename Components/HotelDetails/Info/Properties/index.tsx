import { Grid, Stack, Typography } from "@mui/material";
import React from "react";
import IconSelector from "./Icon";

type Props = {
  properties: {
    name: string;
    icon: string;
  }[];
};
const HotelProperties = (props: Props) => {
  const { properties } = props;

  return (
    <Grid container columns={2} spacing={1}>
      <Grid item xs={2}>
        <Typography variant="h5">What this place offers:</Typography>
      </Grid>

      {properties.map((item, idx) => {
        return (
          <Grid key={idx} item xs={1}>
            <Stack direction="row">
              <IconSelector icon={item.icon} />
              <Typography variant="body2">{item.name}</Typography>
            </Stack>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default HotelProperties;
