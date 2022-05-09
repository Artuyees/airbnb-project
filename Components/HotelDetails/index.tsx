import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Hotel } from "../../data/hotels";
import HotelInfo from "./Info";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ReservationForm from "./Reservation/ReservationForm";

import ReservationCost from "./Reservation/ReservationCost";

type Props = {
  hotel?: Hotel;
};
const HotelDetails = (props: Props) => {
  const [image, setImage] = React.useState<number>(0);
  const { hotel } = props;

  return (
    <Container maxWidth="lg" sx={{ marginTop: 4, marginBottom: 12 }}>
      <Paper
        sx={{
          color: "primary.contrastText",
        }}
      >
        <Grid container padding={2}>
          <Grid item xs={12} md={12}>
            <Link href="/" passHref>
              <Box
                color="secondary.contrastText"
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  "&:hover": {
                    cursor: "pointer",
                    textDecoration: "underline",
                  },
                }}
              >
                <ArrowBackIcon />
                <Typography variant="h6" component="div" align="center">
                  Go back
                </Typography>
              </Box>
            </Link>
          </Grid>
          <Grid
            marginTop={1}
            item
            container
            sx={{ minHeight: "60vh", position: "relative" }}
            xs={12}
            md={12}
          >
            <Container sx={{ position: "relative" }}>
              {hotel && (
                <Image
                  alt={hotel.images[0]}
                  src={`/Hotels/hotel${hotel.id}/${hotel.images[image]}`}
                  layout="fill"
                  objectFit="cover"
                  quality={50}
                ></Image>
              )}
            </Container>
          </Grid>
          <Grid
            container
            textAlign="center"
            justifyContent="center"
            spacing={2}
            marginTop={1}
          >
            {hotel?.images.map((image, index) => {
              return (
                <Grid item key={index}>
                  <Button
                    sx={{
                      width: "64px",
                      height: "64px",
                      border: 1,
                      borderColor: "primary.contrastText",
                    }}
                  >
                    <Image
                      alt={image}
                      src={`/Hotels/hotel${hotel?.id}/${image}`}
                      layout="fill"
                      objectFit="cover"
                      onClick={() => setImage(index)}
                    />
                  </Button>
                </Grid>
              );
            })}
          </Grid>
          <Grid item xs={12} md={12} padding={2}>
            <Divider orientation="horizontal"></Divider>
          </Grid>
          <Grid item xs={12} md={8} marginBottom={4}>
            {hotel && <HotelInfo hotel={hotel} />}
          </Grid>

          <Grid
            container
            item
            xs={12}
            md={4}
            sx={{
              border: 2,
              borderRadius: 4,
              borderColor: "primary.main",
            }}
          >
            <ReservationForm />
            {hotel && (
              <ReservationCost
                pricePerDay={hotel.price}
                serviceCost={hotel.serviceCost}
              />
            )}
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default HotelDetails;
