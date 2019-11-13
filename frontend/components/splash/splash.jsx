import React from 'react';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Splash = ({ currentUser, signin, signout }) => {
 
  const SplashModal = () => (
    	<Col sm={{ span: 12 }}>
    		  <h2 id="splash-header"> The #1 app for runners and cyclists </h2>
      </Col>
  );

  return SplashModal();
};


export default Splash;
