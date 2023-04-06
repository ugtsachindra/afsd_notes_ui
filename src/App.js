import logo from './logo.svg';
import './App.css';
import Login from './pages/login/Login';
import Dashboard from './pages/dashbord/Dashboard';
import { useEffect, useState } from 'react';

function App() {
  
  const [authenticated, setauthenticated] = useState(null);
  useEffect(() => {
    const loggedInUser = localStorage.getItem("authenticated");
    if (loggedInUser) {
      setauthenticated(loggedInUser);
    }
  }, []);
    if (!authenticated) {
      return(
        <Login/>
      );
      
    } else {
      return (
        <Dashboard />
      );
    }
  
}

export default App;
