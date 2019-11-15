import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const Signup = ({ currentUser, signup }) => {
 
  const SignupModal = () => (
    <Row smid="signup-container">
      <Col sm={{ span: 12 }} xl={{ span: 6 }}>
        <img id="splash-image" src={window.splashURL}/>
      </Col>

      <Col sm={{ span: 12 }} xl={{ span: 6 }}>    
        <Col sm={{ span: 12 }}>
    		  <a href="#/signup"><Button id="signup-fb-button"><i class="fa fa-facebook-official"></i>Sign up with Facebook</Button></a>
        </Col>

        <Col sm={{ span: 12 }}>
    		  <a href="#/signup"><Button id="signup-g-button"><i class="fa fa-google" aria-hidden="true"></i>Sign up with Google</Button></a>
        </Col>
        <div id="lineitem"></div>
        <Col sm={{ span: 12 }}>
          <a href="#/signup"><Button id="signup-email-button"><i class="fa fa-envelope-o" aria-hidden="true"></i>Use my email</Button></a>
        </Col>
      </Col>
    </Row>
  );

  return SignupModal();
};


export default Signup;
