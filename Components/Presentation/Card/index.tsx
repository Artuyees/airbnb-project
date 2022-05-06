import {
  CardActionArea,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

import Image from "next/image";
import Link from "next/link";
import React from "react";

export type CardProps = {
  image?: string;
  data?: string;
  name?: string;
  href?: string;
};

const CardWithData = (props: CardProps) => {
  const { image, data, name, href } = props;

  return (
    <Link href={href ? href : "/"} passHref>
      <Card sx={{ minHeight: 300 }}>
        <CardActionArea>
          {image && (
            <CardMedia sx={{ width: "100%", height: "300px" }}>
              <div
                style={{ position: "relative", width: "100%", height: "100%" }}
              >
                <Image alt={"xd"} src={image} layout="fill" objectFit="cover" />
              </div>
            </CardMedia>
          )}
          <CardContent
            sx={{
              maxHeight: 100,
              minHeight: 100,
            }}
          >
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
};

export default CardWithData;
