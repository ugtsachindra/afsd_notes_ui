import React from 'react'
import NoteCard from '../single_note/NoteCard'
import {  Grid } from '@mui/material'

export default function NoteList(props) {
  return (
    <Grid container direction="row"
    justifyContent="center"
    alignItems="center" 
    >

      {props.notesList.map((note)=>(
        <NoteCard  key={note.id} Note={note}/>
      ))}

   
    

    </Grid>
  )
}
