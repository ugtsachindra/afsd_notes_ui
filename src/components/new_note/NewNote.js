
import {  Box, Button, CardMedia, Modal, Slide, TextField, Typography } from "@mui/material";

import React, { Fragment, useState } from "react";
import ImageUpload from "./ImageUpload";
import { PhotoCamera } from "@mui/icons-material";
import Alert from "../alert/Alert";

export default function NewNote(props) {
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState();
  const [titleError,setTitleError] = useState({
    error:false,
    message:""
  });

  const [alert, setAlert] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const handleAlert = (alertObj) => () => {
    setAlert(alertObj);
    
  };

  const closeAlert = () => {
    setAlert({
      open: false,
      message: "",
      severity: "success",
    });
    
  };
  

  const handleTitleError = () => {
    if (title==="") {
      setTitleError({
        error:true,
        message:"Required"
      });
    } else {
      setTitleError({
        error:false,
        message:""
      });
      
    }
  };

  

  const saveNote = async () => {
    const formData  = new FormData();
    formData.append("image",image);
    formData.append("title",title);
    formData.append("description",description);
    const options = {
      method: "POST",
      body: formData,
      headers: {
        // "Content-Type": "multipart/form-data; boundary=<calculated when request is sent>",
      },
    };

    fetch("http://localhost:8080/note/save", options)
      .then((response) => response.json())
      .then((response) => {
        if (response===true) {
          setTitle('');
          setDescription('');
          setImage(null);
          props.refresh();
          
          handleAlert({
            open: true,
            message: "Note Saved Sucessfully",
            severity: "success"
          })();

          props.modalClose();
        } else {

          handleAlert({
            open: true,
            message: "Note Saving Error",
            severity: "error"
          })();
          
        }
      });
  };

  return (
    <Fragment>
    <Modal
      open={props.open}
      disableScrollLock
      sx={{
        
        width: "75%",
        minWidth: 300,
        maxWidth: 500,
        margin: "auto",
        top: "10%",
        zIndex:2501,
      }}
    >
      <Slide direction="up" in={props.open} mountOnEnter unmountOnExit>
      <Box
      
        sx={{
          borderRadius: 10,
          bgcolor: "white",
          border:1,
          borderColor:"#2196f3",
        }}
      >
        <Box
          sx={{
            padding: 3,
          }}
        >
          <Typography variant="h5">New Note</Typography>

          <Button variant="contained" component="label" startIcon={<PhotoCamera />} 
            onChange={(e)=>{
            
            setImage(e.target.files[0]);
            
            }}>
              Upload
              <input hidden accept="image/*" type="file" />
            </Button>

            
            {image && (
              <CardMedia
                image={URL.createObjectURL(image)}
                height="140"
                component={"img"}
                
              />
            )}

          <TextField
          error={titleError.error}
          helperText={titleError.message}
            margin="normal"
            required
            fullWidth
            name="title"
            label="Title"
            type="text"
            id="title"
            onBlur={handleTitleError}
            onChange={(event) => {
              setTitle(event.target.value);
            }}
            value={title}
            
          />

          <TextField
            margin="normal"
            
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

{alert.open && (
  <Alert
    open={alert.open}
    message={alert.message}
    severity={alert.severity}
    handleClose={closeAlert}
  />
)}


</Fragment>
  );

  
}
