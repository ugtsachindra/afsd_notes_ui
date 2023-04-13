import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import React, { Fragment, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import "./Dashboard.css";
import NewNote from "../../components/new_note/NewNote";
import NoteList from "../../components/note_list/NoteList";

export default function Dashboard(props) {
  const [authenticated, setauthenticated] = useState(null);
  const [open, setOpen] = useState(false);
  
  const [notes, setNotes] = useState([]);

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };



  useEffect(() => {
    const options = {
      method: "GET",
      contentType: 'application/json',
      headers: {
        "Access-Control-Allow-Credentials": true,
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET",
        "Access-Control-Allow-Headers": "application/json",
      },
    };
    fetch("http://localhost:8080/note/",options)
      .then((response) => response.json())
      .then((response) => {
        if (Object.keys(response).length === 0) {
        } else {
          setNotes(response);
        }
      });
  }, []);

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
        {/* <h5>{props.activeUser.name}</h5> */}
        <NoteList  notesList={notes} />
        <NewNote open={open} modalClose={handleClose} />
        
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
