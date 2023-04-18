import logo from './logo.svg';
import './App.css';
import Login from './pages/login/Login';
import Dashboard from './pages/dashbord/Dashboard';
import { useEffect, useState } from 'react';
import {  Navigate} from 'react-router-dom';

function App() {

  const [authenticated, setauthenticated] = useState(null);
  useEffect(() => {
    const loggedInUser = localStorage.getItem("authenticated");
    if (loggedInUser) {

      setauthenticated(loggedInUser);
    }
    {authenticated ? (<Navigate to={"/dashboard"} />) : (<Navigate to={"/login"}/>)}
  }, []);


    // if (!authenticated) {
    //   return(
    //     <Login/>
    //   );
      
    // } else {
    //   return (
    //     // <Navigate to="/dashboard"/>
    //     redirect("/")
    //     // <Dashboard/>
    //   );
    // }
  
}

export default App;
