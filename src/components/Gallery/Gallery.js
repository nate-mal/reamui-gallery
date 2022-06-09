import React,{useState} from 'react'
import GalleryItem from "./GalleryItem";
import {projects_data} from '../../projects-data';
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import PaginationControlled from "../PaginationControlled";
const Gallery = () => {
  const [page, setPage] = React.useState(1);
  const first = (page-1)*6
  const last = first + 6;
const setPageHandler = (page)=> {
setPage(page);
}
  return (
    <Box sx={{  flexGrow: 1 }} flexDirection="column" display="flex" justifyContent="center" alignItems="center" >
    <Grid container spacing={{ xs: 1, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
  {projects_data.slice(first,last).map((item_data) => {
    return (
    <Grid item xs={2} sm={4} md={4} key={item_data.id}>
     <GalleryItem item_data={item_data} />
     </Grid>)
  })} 
</Grid>
<PaginationControlled count={Math.ceil(projects_data.length / 6)} page={page} setPage={setPageHandler}/>
</Box>
    
  );
};

export default Gallery;
