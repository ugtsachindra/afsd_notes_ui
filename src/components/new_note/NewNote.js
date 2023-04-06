import { AddBoxTwoTone, Delete, PhotoCamera } from "@mui/icons-material";
import { Box, Button, Modal, TextField, Typography } from "@mui/material";

import React, { useState } from "react";
import ImageUpload from "./ImageUpload";

export default function NewNote(props) {
  const [description, setDescription] = useState();

  const [open, setOpen] = useState(false);

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

          <Box sx={{ mt: 2, pb: 3, margin: "auto", position:"relative" }}>
            <Button sx={{mr:1}} variant="contained">Save</Button>

            <Button  variant="contained" onClick={props.modalClose}>Close</Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
}
