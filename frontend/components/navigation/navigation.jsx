import React from 'react';
import { Link } from 'react-router-dom';

const src = '<%= asset_path "strida.png" %>';


const Navigation = ({ currentUser, signin, signout }) => {
  
  const signoutNavigation = () => (
    <nav>
		<img src="/images/strida.png" height="20" width="95"/>
		<button onClick={signout}>Sign Out</button>
	</nav>
  );

  const signinNavigation = () => (
    <nav>
		<img src="/images/strida.png" height="20" width="95"/>
		<a href="#/signin"><button>Sign In</button></a>
	</nav>
  );

  return currentUser ? signoutNavigation() : signinNavigation();
};


export default Navigation;
