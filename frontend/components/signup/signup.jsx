import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const Signup = ({ currentUser, signup }) => {
 
  const SignupModal = () => (
    <Row smid="signup-container">
      <Col sm={{ span: 12 }} xl={{ span: 6}}>
        <img id="splash-image" src={window.splashURL}/>
      </Col>

      <Col sm={{ span: 12 }} xl={{ span: 6}}>    
        <Col sm={{ span: 10 }} id="signup-fb-button">
    		  <a href="#/signup"><Button>Sign up with Facebook</Button></a>
        </Col>

        <Col sm={{ span: 10 }} id="signup-g-button">
    		  <a href="#/signup"><Button>Sign up with Google</Button></a>
        </Col>

        <Col sm={{ span: 10 }} id="signup-email-button">
          <a href="#/signup"><Button>Use my email</Button></a>
        </Col>
      </Col>
    </Row>
  );

  return SignupModal();
};


export default Signup;
