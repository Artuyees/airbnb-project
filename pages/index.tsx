import type { GetStaticProps, NextPage } from "next";
import Form from "../Components/Form";
import { Box } from "@mui/material";
import Cards from "../Components/Presentation/Cards";
import { Hotel, hotels } from "../data/hotels";

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
      <Cards data={data} title="Ideas for your next trip" />
    </Box>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = () => {
  const data = hotels;
  return {
    props: {
      data,
    },
    revalidate: 3600,
  };
};
