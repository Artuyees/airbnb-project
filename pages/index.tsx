import type { GetStaticProps, NextPage } from "next";
import Form from "../Components/Form";
import { Box } from "@mui/material";
import Cards from "../Components/Presentation/Cards";
import { Hotel, hotels } from "../data/hotels";
import Presentation from "../Components/Presentation";

type IndexProps = {
  data?: Hotel[];
};

const Home: NextPage = (props: IndexProps) => {
  const { data } = props;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Form />
      <Presentation data={data} />
    </Box>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const data = hotels;
  return {
    props: {
      data,
    },
  };
};
