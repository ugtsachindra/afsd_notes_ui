import {
  
  Box,
  Button,
  Card,
  CardMedia,
  Slide,
  Snackbar,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import React, { Fragment, useEffect, useState } from "react";
import "./Login.css";
import logo from "../../asset/img/notes_logo.png";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import Dashboard from "../dashbord/Dashboard";
import Register from "../../components/login/Register";
import LoginForm from "../../components/login/LoginForm";


export default function Login() {
  const resetForm = () => {
    setAlignment(false);
  };
  const [alignment, setAlignment] = React.useState(false);

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  
  

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
            <ToggleButtonGroup
              color="primary"
              value={alignment}
              exclusive
              onChange={handleChange}
              aria-label="Platform"
            >
              <ToggleButton value={false}>Login</ToggleButton>
              <ToggleButton value={true}>Register</ToggleButton>
            </ToggleButtonGroup>
            <div className="input-stage">
              {alignment ? (
                <Register
                  handleReste={resetForm}
                  
                />
              ) : (
                <LoginForm />
              )}
            </div>
          </Card>
        </Box>
      </div>

      
      
    </Fragment>
  );
}
