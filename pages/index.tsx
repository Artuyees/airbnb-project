import { Fragment } from "react";
import Button from "@mui/material/Button";
import { ArrowForward } from "@mui/icons-material";
import type { NextPage } from "next";
import { Container, CssBaseline, useMediaQuery } from "@mui/material";
import { useRouter } from "next/router";
import Lorem from "../Components/Lorem";
import BigNav from "../Components/Navigation/BigNav";
import SmallNav from "../Components/Navigation/SmallNav";
import SmallBottomNav from "../Components/Navigation/SmallBottomNav";
import SmallDrawer from "../Components/Navigation/SmallDraver";

const Home: NextPage = () => {
  const router = useRouter();
  const smallScreen = useMediaQuery("(min-width: 640px)");

  return (
    <Fragment>
      {smallScreen ? (
        <BigNav />
      ) : (
        <Fragment>
          <SmallNav />
        </Fragment>
      )}
      <Container maxWidth="md">
        <Button
          endIcon={<ArrowForward />}
          color="primary"
          onClick={() => router.push("/about")}
          style={{ fontSize: 25 }}
          variant="contained"
        >
          App
        </Button>
        <Lorem />
      </Container>
    </Fragment>
  );
};

export default Home;
