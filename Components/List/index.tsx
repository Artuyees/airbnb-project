import { Container, Paper, Typography } from "@mui/material";
import React from "react";
import { Hotel } from "../../data/hotels";
import ListItem from "./SingleItem";

type Props = {
  data?: Hotel[] | undefined;
  result?: string;
};

const List = (props: Props) => {
  const { data } = props;

  return (
    <Container maxWidth="lg">
      <Paper
        sx={{
          margin: 2,
          padding: 1,
          color: "primary.contrastText",
          textAlign: "center",
        }}
      >
        <Typography variant="h5">See what we found for you:</Typography>
      </Paper>
      {data?.map((item, idx) => {
        return <ListItem key={idx} data={item} />;
      })}
    </Container>
  );
};

export default List;
