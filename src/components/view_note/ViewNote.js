import { Image } from "@mui/icons-material";
import { Box, Button, Modal, Typography } from "@mui/material";
import React, { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
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
        top: "30%",
      }}
      open={props.open}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <img width={'100%'} src={props.Note.image} />
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {props.Note.title}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {props.Note.description}
        </Typography>
        <Button onClick={props.modalClose}>Close</Button>
      </Box>
    </Modal>
  );
}
