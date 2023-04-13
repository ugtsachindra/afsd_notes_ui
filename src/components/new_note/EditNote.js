
import React, { useState } from "react";
import { Box, Button, Modal, TextField, Typography } from "@mui/material";

import ImageUpload from "./ImageUpload";

export default function EditNote(props) {
    const [description, setDescription] = useState();
    const [title, setTitle] = useState();
    const [image, setImage] = useState("");
  
    
  
    const saveNote = async () => {
      const params = {
        description: description,
        title:title,
        image:image,
      };
      const options = {
        method: "PUT",
        body: JSON.stringify(params),
        headers: {
          "Content-Type": "application/json",
        },
      };
  
      fetch("http://localhost:8080/note/"+props.Note.id, options)
        .then((response) => response.json())
        .then((response) => {
          if (response===true) {
            setTitle('');
            setDescription('');
            setImage('');
            props.modalClose();
          } else {
            console.log(response)
          }
        });
    };
  
  
  
    return (
    
        <Modal
      open={props.open}
      sx={{
        width: "75%",
        minWidth: 300,
        maxWidth: 500,
        margin: "auto",
        top: "30%",
      }}
    >
      <Box
        sx={{
          bgcolor: "white",
        }}
      >
        <Box
          sx={{
            padding: 3,
          }}
        >
          <Typography variant="h5">New Note</Typography>

          <ImageUpload />

          <TextField
            margin="normal"
            required
            fullWidth
            name="title"
            label="Title"
            type="text"
            id="title"
            onChange={(event) => {
              setTitle(event.target.value);
            }}
            // value={title}
            defaultValue={props.Note.title}
          />

          <TextField
            margin="normal"
            required
            fullWidth
            multiline
            minRows={5}
            name="description"
            label="Description"
            type="text"
            id="password"
            onChange={(event) => {
              setDescription(event.target.value);
            }}
            // value={description}
            defaultValue={props.Note.description}
          />

          <TextField
            margin="normal"
            required
            fullWidth
            name="image"
            label="Image"
            type="text"
            id="image"
            onChange={(event) => {
              setImage(event.target.value);
            }}
            // value={image}
            defaultValue={props.Note.image}
          />

          <Box sx={{ mt: 2, pb: 3, margin: "auto", position: "relative" }}>
            <Button sx={{ mr: 1 }} variant="contained" onClick={saveNote}>
              Save
            </Button>

            <Button variant="contained" onClick={props.modalClose}>
              Close
            </Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  
  )
}
