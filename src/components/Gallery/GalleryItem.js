import * as React from "react";
import Card from "@mui/material/Card";
import { CardActionArea } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const GalleryItem = ({ item_data }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={item_data.title}
          width="200"
          heigth="auto"
          image={item_data.url.desktop}
        />
        <CardContent>
          <Typography align="center" gutterBottom variant="h5" component="div">
            {item_data.title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default GalleryItem;
