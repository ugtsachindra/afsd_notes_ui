import { Box, Button, Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import React, { Fragment, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import "./Dashboard.css";
import NewNote from "../../components/new_note/NewNote";
import NoteList from "../../components/note_list/NoteList";

export default function Dashboard() {
  const [authenticated, setauthenticated] = useState(null);
  const [open,setOpen] = useState(false);
  const handleClose = () => {setOpen(false);};
  const handleOpen = () => {setOpen(true);};



  useEffect(() => {
    const loggedInUser = localStorage.getItem("authenticated");
    if (loggedInUser) {
      setauthenticated(loggedInUser);
    }
  }, []);

  if (!authenticated) {
    return <Navigate replace to="/" />;
  } else {
    return (
      <Fragment>
                <p>Welcome to your Dashboard</p>

        <NoteList />

        <NewNote open={open} modalClose={handleClose}/>


        <Fab
          color="primary"
          aria-label="add"
          sx={{
            position: "fixed",
            zIndex: "tooltip",
            bottom: 20,
            right: 20,
          }}

          onClick={handleOpen}
        >
          <AddIcon />
        </Fab>
      </Fragment>
    );
  }
}
