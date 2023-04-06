import { Box, Card, CardActionArea, CardMedia, Fab } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import ViewIcon from "@mui/icons-material/Preview";
import DeleteIcon from "@mui/icons-material/Delete";
import React, { Fragment } from "react";
import zIndex from "@mui/material/styles/zIndex";

export default function NoteCard() {
  return (
    <Box>
      <Card
        variant="outlined"
        sx={{ width: 350, position: "relative", float: "left", ml: 2, mr: 2 }}
      >
        <CardMedia image="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318" 
        sx={{width:300, height:200, margin:"auto"}} />
        
        
        <CardActionArea>

        <Fab color="secondary" aria-label="edit">
          <EditIcon />
        </Fab>
        <Fab color="secondary" aria-label="edit">
          <ViewIcon />
        </Fab>
        <Fab color="secondary" aria-label="edit">
          <DeleteIcon />
        </Fab>


        </CardActionArea>
      </Card>
      <Box sx={{ }}>
        
      </Box>
    </Box>
  );
}
