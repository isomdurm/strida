import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";


class NavigationBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: "demo"
    };

    this.handleSignout = this.handleSignout.bind(this);
  }

  handleSignout(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.signout(user);
  }

  render() {
    if (!this.props.currentUser) {  
      return (
        <Navbar>
          <Navbar.Brand href="#">
            <img id="logo-image" src={window.logoURL} height="20" width="95"/>
          </Navbar.Brand>
        
          <Navbar.Toggle />
          
          <Navbar.Collapse className="justify-content-end">

          <a href={"#/signin"}><Button id="demo-button" size="sm"  value={this.state.clicked}>Demo</Button></a>
          <a href={"#/signin"}><Button id={"signin-button"} size="sm">Sign In</Button></a>
          </Navbar.Collapse>
        </Navbar>
      )
    } else {
      return (
        <Navbar>
          <Navbar.Brand href="#">
            <img id="logo-image" src={window.logoURL} height="20" width="95"/>
          </Navbar.Brand>
      
          <Navbar.Toggle />
        
          <Navbar.Collapse className="justify-content-end">
            <a href={"#/signout"}><Button id={"signout-button"} size="sm" onClick={this.handleSignout}>Sign Out</Button></a>  
          </Navbar.Collapse>
        </Navbar>
      )
    }
  }
}


export default NavigationBar;
