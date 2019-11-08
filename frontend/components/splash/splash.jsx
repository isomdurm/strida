import React from 'react';
import { Link } from 'react-router-dom';

const Splash = ({ currentUser, signin, signout }) => {
 
  const SplashModal = () => (
    <div id="splash-container">
    	<div id="splash-header">
    		The #1 app for runners and cyclists
    	</div>
    
    	<div id="splash-image-container">
			<img id="splash-image" src="/images/splash_image.jpg" height="220" width="205"/>
		</div>
	</div>
  );

  return SplashModal();
};


export default Splash;
