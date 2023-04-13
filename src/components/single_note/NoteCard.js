import {
  Box,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Fab,
  Typography,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import ViewIcon from "@mui/icons-material/Preview";
import DeleteIcon from "@mui/icons-material/Delete";
import React, { Fragment, useState } from "react";
import EditNote from "../new_note/EditNote";
import ViewNote from "../view_note/ViewNote";

export default function NoteCard(props) {
  const [openEdit, setOpenEdit] = useState(false);
  const [openView, setOpenView] = useState(false);
  const handleOpenEdit = () =>{setOpenEdit(true)};
  const handleCloseEdit = () =>{setOpenEdit(false)};
  const handleOpenView = () =>{setOpenView(true)};
  const handleCloseView = () =>{setOpenView(false)};

  const deleteNote = () => {
    const options = {
      method: "DELETE",
      contentType: 'application/json',
      
    };
    fetch("http://localhost:8080/note/"+props.Note.id,options).
    then(response=>response.json()).
    then(response=>{ 
      console.log(response);
    });
  };

  return (
    <Fragment>

      <EditNote open={openEdit} modalClose={handleCloseEdit} Note={props.Note}/>
      <ViewNote open={openView} modalClose={handleCloseView} Note={props.Note}/>

      <Card
        sx={{
          width: 250,
          height: 300,
          borderRadius: 10,
          "&:hover": {
            boxShadow:10
          },
          position: "relative",
          
          bgcolor:"#e3f2fd",
          border:1,
          borderColor:"#2196f3",
          
        }}
      >
        <CardActionArea  onClick={handleOpenView}>
        <CardMedia image={props.Note.image} height="140" component={"img"}/>
        
       

        <CardContent sx={{height:160}}>

          <Typography variant="h5">
            {props.Note.title}
          </Typography>
        </CardContent>
        </CardActionArea>
        <CardActions>


<Fab
  sx={{ position: "absolute", top: 95, right: 3 }}
  aria-label="edit"
  onClick={handleOpenEdit}
  size="small"
  color="#bdbdbd"
>
  <EditIcon />
</Fab>
<Fab
  sx={{ position: "absolute", bottom: 10, right: 10 }}
  color="error"
  aria-label="delete"
  onClick={deleteNote}
  size="small"
>
  <DeleteIcon />
</Fab>
</CardActions>
      </Card>
    </Fragment>
  );
}
