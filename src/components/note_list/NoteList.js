import React from 'react'
import NoteCard from '../single_note/NoteCard'
import { Box, Grid } from '@mui/material'

export default function NoteList() {
  return (
    <Grid container direction="row"
    justifyContent="center"
    alignItems="center" 
    >

    <NoteCard/>
    <NoteCard/>
    <NoteCard/>
    <NoteCard/>
    <NoteCard/>
    <NoteCard/>
    <NoteCard/>
    <NoteCard/>
    <NoteCard/>
    <NoteCard/>
    <NoteCard/>
    <NoteCard/>
    

    </Grid>
  )
}
