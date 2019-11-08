import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';


const Navigation = ({ currentUser, signin, signout }) => {
  
 //  const signoutNavigation = () => (
 //    <nav>
	// 	<img src="/images/strida.png" height="20" width="95"/>
	// 	<button onClick={signout}>Sign Out</button>
	// </nav>
 //  );

  const signinNavigation = () => (
    <Navbar>
      <Navbar.Brand href="#home">
        <img id="logo-image" src={window.logoURL} height="20" width="95"/>
      </Navbar.Brand>
      
      <Navbar.Toggle />
        
      <Navbar.Collapse className="justify-content-end">
          <a href="#/signin"><Button id="signin-button" size="sm">Sign In</Button></a>
      </Navbar.Collapse>
    </Navbar>
  );

  return signinNavigation();
};


export default Navigation;
