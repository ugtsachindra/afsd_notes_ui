import {
  Box,
  Button,
  Card,
  CardMedia,
  TextField,
  Typography,
} from "@mui/material";
import React, { Fragment, useState } from "react";
import "./Login.css";
import logo from "../../asset/img/notes_logo.png";
import axios from "axios";
import { Navigate } from "react-router-dom";
import Dashboard from "../dashbord/Dashboard";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user,setUser] = useState({});
  const [emailOk, setEmailOk] = useState(false);
  const [authenticated, setAuthenticated] = useState(
    localStorage.getItem(localStorage.getItem("authenticated") || false)
  );
  

  const checkEmail = async () => {
    // axios
    //   .get("http://localhost:8080/user/check?email="+email)
    //   .then(function (response) {
    //     // handle success
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     // handle error
    //     console.log(error);
    //   });

    // const response = await fetch("http://localhost:8080/user/check/?email=ugthisura@gmail.com");
    // const jsonData = await response.json();
    // console.log(jsonData);
  };

  const login = async() => {

    const params = {
      email:email,
      password:password
    };
    const options ={
      method:'POST',
      body: JSON.stringify(params),
      headers:{
        "Content-Type": "application/json",
      }
    };
    fetch('http://localhost:8080/user/login',options)
    .then(response => response.json())
    .then(response=> {

      console.log(response);
      if (!Object.keys(response).length) {
        console.log("No data");
      } else {
        const data = {
          id:response.id,
          name:response.name,
          email:response.email,
        };
        setUser(data);
        setAuthenticated(true);
        localStorage.setItem("authenticated", true);
      }
       
    });
    
    
    // localStorage.setItem("authenticated", true);
    // setAuthenticated(true);
  };

  if (!authenticated) {
    return (
      <Fragment>
        <div className="main-stage">
          <Box
            sx={{
              marginTop: "5%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Card variant="outlined" sx={{ maxWidth: "25%", minWidth: 300 }}>
              <Typography variant="h5" sx={{ mb: 2, mt: 5, padding: 2 }}>
                Learning Meterial Notes Collector App
              </Typography>
              <CardMedia
                component="img"
                image={logo}
                sx={{ width: "70%", margin: "auto" }}
              />
              <div className="input-stage">
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  onBlur={checkEmail}
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ width: 100, mt: 5, mb: 5 }}
                  onClick={login}
                >
                  Sign In
                </Button>
              </div>
            </Card>
          </Box>
        </div>
      </Fragment>
    );
  } else {
    return <Dashboard activeUser={user}/>;
  }
}
