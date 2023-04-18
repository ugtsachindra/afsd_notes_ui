import { Button, TextField } from "@mui/material";
import React, { Fragment, useState } from "react";
import Alert from "../alert/Alert";

export default function Register(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nameError, setNameError] = useState({error:false,message:""});
  const [emailError, setEmailError] = useState({error:false,message:""});
  const [passwordError, setPasswordError] = useState({error:false,message:""});
  const [alert, setAlert] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  
  
  const handleAlert = (alertObj) => () => {
    setAlert(alertObj);
    
  };

  const closeAlert = () => {
    setAlert({
      open: false,
      message: "",
      severity: "success",
    });
    
  };

  const handlePasswordError = () =>{

    if (password==="") {
      setPasswordError({error:true,message:"Required"})
    } else {
      setPasswordError({error:false,message:""})
    }
    
  };

  const handleNameError = () => {
    if (name==="") {
      setNameError({error:true,message:"Required"})
    } else {
      setNameError({error:false,message:""})
    }

  };

  const register = (event) => {

    handleNameError();
    handlePasswordError();
    checkEmail();

    
    if (name!="" && email!="" && password!="") {
      
      const params = {
        email: email,
        password: password,
        name: name,
      };
      const options = {
        method: "POST",
        body: JSON.stringify(params),
        headers: {
          "Content-Type": "application/json",
        },
      };
      fetch("http://localhost:8080/user", options)
        .then((response) => response.json())
        .then((response) => {
          
          if (response) {
  
            handleAlert({
              open: true,
              message: "User Registerd Sucessfully",
              severity: "success"
            })();
            
            setEmail("");
            setName("");
            setPassword("");
  
          }else{
  
          }
        }).catch(
          (response)=>{
            handleAlert({
              open: true,
              message: "Connection Error",
              severity: "error",
            })();
          }
        );

    } else {
      
      // if (name==="") {
      //   setNameError({error:true,message:"Required"})
      // } else {
      //   setNameError({error:false,message:""})
      // }
      // if (password==="") {
      //   setPasswordError({error:true,message:"Required"})
      // } else {
      //   setPasswordError({error:false,message:""})
      // }

    }
    
  };

  const checkEmail = (event) => {
    if (email==="") {
      
      setEmailError({
        error:true,
        message:"Required"
    })

    } else {
      fetch("http://localhost:8080/user/check/"+email).
    then((response) => response.json()).
    then((response)=>{
      
          if(response){
              setEmailError({
                error:true,
                message:"Entered email already exist"
              })
          }else{
            setEmailError({
              error:false,
              message:""
          })}
        
        });
    }
    
  };

  return (
    <Fragment>
      <TextField
      error={nameError.error}
      helperText={nameError.message}
        margin="normal"
        required
        fullWidth
        id="name"
        label="Name"
        name="name"
        autoComplete="name"
        autoFocus
        onBlur={handleNameError}
        onChange={(event) => {
          setName(event.target.value);
        }}
        value={name}
      />

      <TextField
        error={emailError.error}
        helperText={emailError.message}
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
        value={email}
        onBlur={checkEmail}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
      />
      <TextField
        error={passwordError.error}
        helperText={passwordError.message}
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        onBlur={handlePasswordError}
        value={password}
        autoComplete="current-password"
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />
      <Button
        disabled={!(!nameError.error && !emailError.error && !passwordError.error)}
        type="submit"
        fullWidth
        variant="contained"
        sx={{ width: 100, mt: 5, mb: 5 }}
        onClick={register}
      >
        Register
      </Button>

              
      {alert.open && (
        <Alert
          open={alert.open}
          message={alert.message}
          severity={alert.severity}
          handleClose={closeAlert}
        />
      )}

      
    </Fragment>
  );
}
