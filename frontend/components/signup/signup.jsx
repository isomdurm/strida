import React from 'react';
import { Link } from 'react-router-dom';

const Signup = ({ currentUser, signup }) => {
 
  const SignupModal = () => (
    <div id="signup-container">
    	<div id="signup-fb-google">
    		<button>Sign up with Facebook</button>
    		<button>Sign up with Google</button>
    	</div>
  
    	<div id="signup-email">
			<button>Use my email</button>
		</div>
	</div>
  );

  return SignupModal();
};


export default Signup;
