import {
  Box,
  Fab,
  Typography,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import ViewIcon from "@mui/icons-material/Preview";
import DeleteIcon from "@mui/icons-material/Delete";
import React, { Fragment, useState } from "react";
import EditNote from "../new_note/EditNote";

export default function NoteCard(props) {
  const [openEdit, setOpenEdit] = useState(false);
  const handleOpenEdit = () =>{setOpenEdit(true)};
  const handleCloseEdit = () =>{setOpenEdit(false)};

  const viewNote = () => {
    // fetch("http://localhost:8080/note/"+props.note.id).
    // then(response=>response.json()).
    // then(response=>{ });
  };

  return (
    <Fragment>

      <EditNote open={openEdit} modalClose={handleCloseEdit} Note={props.Note}/>

      <Box
        sx={{
          width: 300,
          height: 400,

          "&:hover": {
            opacity: [0.9, 0.8, 0.7],
          },
          position: "relative",
          padding: 2,
        }}
      >
        <Box
          sx={{
            width: 300,
            height: 250,
            position: "relative",
          }}
        >
          <img width={300} height={200} src={props.Note.image} />
        </Box>
        <Box sx={{ "& > :not(style)": { m: 1 } }}>
          <Fab
            sx={{ position: "absolute", top: 185, left: 10 }}
            color="secondary"
            aria-label="view"
            onClick={viewNote}
          >
            <ViewIcon />
          </Fab>
          <Fab
            sx={{ position: "absolute", top: 185, left: 125 }}
            color="secondary"
            aria-label="edit"
            onClick={handleOpenEdit}
          >
            <EditIcon />
          </Fab>
          <Fab
            sx={{ position: "absolute", top: 185, right: 10 }}
            color="secondary"
            aria-label="delete"
          >
            <DeleteIcon />
          </Fab>
        </Box>
        <Box>

          <Typography>
            {props.Note.description}
          </Typography>
        </Box>
      </Box>
    </Fragment>
  );
}
