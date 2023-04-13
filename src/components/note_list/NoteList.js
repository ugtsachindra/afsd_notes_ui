import React from 'react'
import NoteCard from '../single_note/NoteCard'
import {  Grid } from '@mui/material'

export default function NoteList(props) {
  return (
    <Grid container direction="row"
    justifyContent="center"
    alignItems="center" 
    spacing={5}
    >

      {props.notesList.map((note)=>(
        <Grid key={note.id} item>
        <NoteCard   Note={note}/>
        </Grid>
      ))}

   
    

    </Grid>
  )
}
