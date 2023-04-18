import React from 'react'
import MuiAlert from '@mui/material/Alert';
import { Slide, Snackbar } from '@mui/material';

export default function Alert(props) {

    const [state, setState] = React.useState({
        open: false,
        Transition: Slide,
      });
    
      const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
      });
        

    const handleClick = () => {
        setState({
          open: true,
          Transition: SlideTransition,
        });
        console.log("trigered");
      };
    
      const handleClose = () => {
        setState({
          ...state,
          open: false,
        });
      };
    
      function SlideTransition(props) {
        return <Slide {...props} direction="up" />;
      }
    //   severity="error"/"warning"/"info"/"success"

  return (
    <Snackbar open={props.open} autoHideDuration={6000} onClose={props.handleClose} TransitionComponent={SlideTransition}>
        <Alert onClose={props.handleClose} severity={props.severity} sx={{ width: "100%" }}>
          {props.message}
        </Alert>
      </Snackbar>
  )
}
