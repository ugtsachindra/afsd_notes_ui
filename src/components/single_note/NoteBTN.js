import React from 'react'

export default function NoteBTN() {
  return (
    <CardActionArea sx={{position:"absolute", height:"0", mt:15,}}>

        <Fab color="secondary" aria-label="edit">
          <EditIcon />
        </Fab>
        <Fab color="secondary" aria-label="edit">
          <ViewIcon />
        </Fab>
        <Fab color="secondary" aria-label="edit">
          <DeleteIcon />
        </Fab>


        </CardActionArea>
  )
}
