import { Avatar, Box, Button, Divider, IconButton, Input, ListItemIcon, Menu, MenuItem, TextField, Tooltip, Typography, alpha, colors } from "@mui/material";
import React, { Fragment } from "react";
import "./NavBar.css";
import { Image, Logout, PersonAdd, Settings } from "@mui/icons-material";
import logo from "../../asset/img/notes_logo.png";
import { Navigate, redirect, useNavigate } from "react-router-dom";

export default function NavBar(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const logout =()=>{
    localStorage.removeItem("authenticated");
    navigate("/login");

    setAnchorEl(null);
  };

  return (
    <Fragment>
      <Box
        sx={{ bgcolor: "white",opacity:.8, top: 0 }}
        position={"fixed"}
        height={30}
        width={"100%"}
      >
        {" "}
      </Box>

      <Box
        sx={{ bgcolor: alpha('#FFFFFF',0.8), mt: 0 }}
        width={"100%"}
        height={65}
        position={"sticky"}
        top={0}
        zIndex={2000}
        flexDirection={"column"}
      >
        


<Fragment >
      <Box zIndex={2500}>
        <Typography 
        color={"#757575"}
        
        fontFamily={"Helvetica Neue"}
        fontWeight={"bold"}
        fontSize={40}
        display={'inline-flex'}
        position="relative" 
        sx={{ml:5}}>My Notes</Typography>
      <TextField
          sx={{ mt: 0.5, ml: "18%", mr: "20%", width: "40%" }}
          position="relative"
            
          placeholder="Search"
          size="normal"
          type="text"
        />
          <Tooltip title="Account settings" >

          <IconButton
            onClick={handleClick}
            size="large"
            sx={{  }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{bgcolor:'Highlight'}}  />
          </IconButton>
        </Tooltip>
        </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >

        <MenuItem onClick={handleClose}>
          <Avatar /> Profile
        </MenuItem>
        
        <MenuItem onClick={logout}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </Fragment>

        
      </Box>
    </Fragment>
  );
}
