import React, { useEffect, useState } from "react";
import GalleryItem from "./GalleryItem";
import { projects_data } from "../../projects-data";
import { Fade, Grid } from "@mui/material";
import { Box } from "@mui/system";
import { Slide } from "@mui/material";
import PaginationControlled from "../PaginationControlled";
import classes from "./Gallery.module.css";
const Gallery = () => {
  const [page, setPage] = React.useState(1);
  const [animation, setAnimation] = useState({ on: true, direction: "down" });
  const [isMobile, setIsMobile] = useState(false);
  let count;
  if (window.innerWidth < 587) count = 3;
  else count = 6;

  //choose the screen size

  const handleResize = () => {
    if (window.innerWidth < 587) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };
  // create an event listener
  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  // finally you can render components conditionally if isMobile is True or False
  const first = (page - 1) * count;
  const last = first + count;
  const setPageHandler = (pageNum) => {
    if (pageNum !== page) {
      setAnimation( { on: false, direction: "down" });
      setTimeout(() => {
        setPage(pageNum);
        setAnimation({ on: true, direction: "down" });
      }, 1500);
    } 
  }
  
  return (
    <Box className={classes.gallery} sx={{ flexGrow: 1 }}>
      <Fade
        timeout={2000}
        direction={animation.direction}
        in={animation.on}
        mountOnEnter
        unmountOnExit
      >
        <Grid
          container
          spacing={{ xs: 1, md: 2 }}
          columns={{ xs: 2, sm: 8, md: 12 }}
        >
          {projects_data.slice(first, last).map((item_data) => {
            return (
              <Grid className={classes.box} item xs={2} sm={4} md={4} key={item_data.id}>
                <GalleryItem item_data={item_data} />
              </Grid>
            );
          })}
        </Grid>
      </Fade>
      <PaginationControlled
        className={classes.pagination}
        count={Math.ceil(projects_data.length / count)}
        page={page}
        setPage={setPageHandler}
      />
    </Box>
  );
};


export default Gallery;
