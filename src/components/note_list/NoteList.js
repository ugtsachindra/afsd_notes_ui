import React from 'react'
import NoteCard from '../single_note/NoteCard'
import {  Box, Grid, Grow } from '@mui/material'

export default function NoteList(props) {
  return (
    <Box sx={{margin:5, mt:10}} >
    <Grid
    container direction="row"
    justifyContent="center"
    alignItems="center" 
    spacing={5}
    >

      {props.notesList.map((note)=>(
        <Grow  in={true} timeout={2000} key={note.id}>
        <Grid key={note.id} item >
        <NoteCard   Note={note}/>
        </Grid>
        </Grow>
      ))}

   
    

    </Grid>
    </Box>
  )
}
