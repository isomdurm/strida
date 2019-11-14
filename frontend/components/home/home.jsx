import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

import SplashContainer from '../splash/splash_container';
import SignupContainer from '../signup/signup_container';

const Home = ({ currentUser, signin, signout }) => {

  const splashHome = () => (
    <Container id="splash-container">
	    <SplashContainer />
	    <SignupContainer />
	</Container>
  );

  return splashHome();
};


export default Home;
