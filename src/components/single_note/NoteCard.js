import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Fab,
  Grid,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import ViewIcon from "@mui/icons-material/Preview";
import DeleteIcon from "@mui/icons-material/Delete";
import React, { Fragment, useState } from "react";
import zIndex from "@mui/material/styles/zIndex";

export default function NoteCard() {
    const [open,setOpen]=useState(false);

  return (
    <Fragment>
      <Box
        sx={{
          width: 300,
          height: 300,
          
          "&:hover": {
            
            opacity: [0.9, 0.8, 0.7],
          },
          position: "relative",
          padding:2
        }}
        
      >
        <img width={300}  src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e" />

        <Box sx={{ "& > :not(style)": { m: 1 } }}>
          <Fab
            sx={{ position: "absolute", top: 185, left: 10 }}
            color="secondary"
            aria-label="edit"
          >
            <EditIcon />
          </Fab>
          <Fab
            sx={{ position: "absolute", top: 185, left: 125 }}
            color="secondary"
            aria-label="edit"
          >
            <ViewIcon />
          </Fab>
          <Fab
            sx={{ position: "absolute", top: 185, right: 10 }}
            color="secondary"
            aria-label="edit"
          >
            <DeleteIcon />
          </Fab>
        </Box>
      </Box>
    </Fragment>
  );
}
