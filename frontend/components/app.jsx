import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import GreetingContainer from './greeting/greeting_container';
import SignUpFormContainer from './session_form/signup_form_container';
import SignInFormContainer from './session_form/signin_form_container';
import NavigationContainer from './navigation/navigation_container';
import SplashContainer from './splash/splash_container';
import SignupContainer from './signup/signup_container';

import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
	<div>
    	<header>
	     	<NavigationContainer />
	     	<SplashContainer />
	     	<SignupContainer />
        </header>
    
    	<Switch>
    		<AuthRoute exact path="/signin" component={SignInFormContainer} />
      		<AuthRoute exact path="/signup" component={SignUpFormContainer} />
    	</Switch>
  	</div>
);

export default App;
