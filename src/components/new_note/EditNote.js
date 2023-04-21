import React, { useState } from "react";
import {
  Box,
  Button,
  CardMedia,
  Modal,
  Slide,
  TextField,
  Typography,
} from "@mui/material";

import ImageUpload from "./ImageUpload";
import { PhotoCamera } from "@mui/icons-material";

export default function EditNote(props) {
  const [description, setDescription] = useState(props.Note.description);
  const [title, setTitle] = useState(props.Note.title);
  const [image, setImage] = useState(props.Note.image);
  const [imageObj, setImageObj] = useState(null);

  const saveNote = async () => {
    const formData = new FormData();
    formData.append("id", props.Note.id);
    formData.append("image", imageObj);
    formData.append("title", title);
    formData.append("description", description);

    const options = {
      method: "PUT",
      body: formData,
      headers: {
        // "Content-Type": "application/json",
      },
    };

    console.log(image);

    fetch("http://localhost:8080/note/update", options)
      .then((response) => response.json())
      .then((response) => {
        if (response === true) {
          setTitle("");
          setDescription("");
          setImage("");
          props.modalClose();
        } else {
          console.log(response);
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
        top: "10%",
        zIndex: 2501,
      }}
    >
      <Slide direction="up" in={props.open} mountOnEnter unmountOnExit>
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
            <Typography variant="h5">Edit Note</Typography>

            <Button
              variant="contained"
              sx={{mt:1,mb:1}}
              component="label"
              startIcon={<PhotoCamera />}
              onChange={(e) => {
                console.log(e.target.files[0]);
                setImage(null);
                setImageObj(e.target.files[0]);
              }}
              
            >
              Upload
              <input hidden accept="image/*" type="file" />
            </Button>

            {image && (
              <CardMedia
                image={"http://localhost:8080" + image}
                height="140"
                component={"img"}
              />
            )}
            {imageObj && (
              <CardMedia
                image={URL.createObjectURL(imageObj)}
                height="140"
                component={"img"}
              />
            )}

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
              value={title}
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
              value={description}
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
      </Slide>
    </Modal>
  );
}
