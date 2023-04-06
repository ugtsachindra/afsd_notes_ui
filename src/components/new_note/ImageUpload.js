import { Delete, Image, PhotoCamera } from '@mui/icons-material';
import { Box, Button } from '@mui/material';
import React, { useState } from 'react'

export default function ImageUpload() {

    const [image, setImage] = useState('');


    if (image==="") {
        return (
            <Box sx={{mt:3,
            }}>
            <Button variant="contained" component="label" startIcon={<PhotoCamera />} 
            onChange={(e)=>{setImage(e);
            console.log(e);}}>
              Upload
              <input hidden accept="image/*" multiple type="file" />
            </Button>
            </Box>
            );
    } else {
        return (
            <Box sx={{mt:3}}>
        <Button variant="contained" startIcon={<Delete />}>
          Delete
        </Button>
        <Box>
          <Image src={image} />
        </Box>
      </Box>
            );
    }
  
}
