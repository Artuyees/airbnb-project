import {
  CardActionArea,
  Card,
  CardContent,
  CardMedia,
  Paper,
  Typography,
} from "@mui/material";
import Link from "next/link";
import React from "react";

export type CardProps = {
  name: string;
  description: string;
  image: string;
  href?: string;
};

const CardWithData = (props: CardProps) => {
  const { name, description, image, href } = props;
  return (
    <Link href={href ? href : "/"} passHref>
      <Card sx={{ minHeight: 300 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="250"
            image={image}
            alt="green iguana"
          />
          <CardContent sx={{ maxHeight: 100, minHeight: 100 }}>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
};

export default CardWithData;
