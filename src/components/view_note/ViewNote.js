import { Image } from "@mui/icons-material";
import { Box, Button, Fade, Modal, Slide, Typography } from "@mui/material";
import React, { useState } from "react";

const style = {
  
  position: "absolute",
  top:'10%',
  
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #2196f3",
  boxShadow: 24,
  p: 4,
  borderRadius:10,
  
};

export default function ViewNote(props) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  return (
    
    
    <Modal
    sx={{
      width: "75%",
      minWidth: 300,
      maxWidth: 500,
      margin: "auto",
      zIndex:2501,
      
      }}
    open={props.open}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <Slide direction="up" in={props.open} mountOnEnter unmountOnExit>
    <Box sx={style} overflow={'auto'}>
      <img width={'100%'}  src={props.Note.image} />
      <Typography id="modal-modal-title" variant="h6" component="h2">
        {props.Note.title}
      </Typography>
      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        {props.Note.description}
      </Typography>
      <Button onClick={props.modalClose}>Close</Button>
    </Box>
    </Slide>

  </Modal>
    
    
    
  );
}
