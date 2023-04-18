import { Button, TextField } from "@mui/material";
import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const [authenticated, setAuthenticated] = useState(false);
  const [user, setUser] = useState({});
  const [emailError, setEmailError] = useState({ error: false, message: "" });
  const [passwordError, setPasswordError] = useState({
    error: false,
    message: "",
  });

  const checkEmail = (event) => {
    if (email === "") {
      setEmailError({
        error: true,
        message: "Required",
      });
    } else {
      fetch("http://localhost:8080/user/check/" + email)
        .then((response) => response.json())
        .then((response) => {
          if (!response) {
            setEmailError({
              error: true,
              message: "Entered email does not exist. Please register",
            });
          } else {
            setEmailError({
              error: false,
              message: "",
            });
          }
        });
    }
  };

  const login = async () => {
    const params = {
      email: email,
      password: password,
    };
    const options = {
      method: "POST",
      body: JSON.stringify(params),
      headers: {
        "Content-Type": "application/json",
      },
    };
    fetch("http://localhost:8080/user/login", options)
      .then((response) => response.json())
      .then((response) => {
        if (!Object.keys(response).length) {
        } else {
          setAuthenticated(true);
          const data = {
            id: response.id,
            name: response.name,
            email: response.email,
          };
          setUser(data);

          localStorage.setItem("authenticated", true);
          navigate("/dashboard");
        }
      })
      .catch(() => {
        setPasswordError({
          error: true,
          message: "Wrong password entered",
        });
      });

    // localStorage.setItem("authenticated", true);
    // setAuthenticated(true);
  };

  return (
    <Fragment>
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
        autoFocus
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
    </Fragment>
  );
}
