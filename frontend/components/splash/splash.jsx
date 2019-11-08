import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Splash = ({ currentUser, signin, signout }) => {
 
  const SplashModal = () => (
    <Container id="splash-container">
    	<Row id="splash">
        <Col sm={{ span: 12 }} id="splash-header">
    		  The #1 app for runners and cyclists
        </Col>
    	</Row>
    
    	<div id="splash-image-container">
			  <img id="splash-image" src={window.splashURL} height="220" width="205"/>
		  </div>
	</Container>
  );

  return SplashModal();
};


export default Splash;
