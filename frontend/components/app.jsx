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
import SignupContainer from './signup/signup_container';
import SplishContainer from './home/home_container';
import FeedContainer from './feed/feed_container';
import RouteContainer from './routes/route_container';
import CreateRouteContainer from './create_routes/create_route_container';
import PostsContainer from './posts/posts_container';
import WorkoutsContainer from './workouts/workout_container';

import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
	<div>
  	<header>
     	<NavigationContainer />
    </header>
  
  	<Switch>
  		<AuthRoute exact path="/" component={SplishContainer} />
  		<AuthRoute exact path="/signin" component={SignInFormContainer} />
    	<AuthRoute exact path="/signup" component={SignUpFormContainer} />
      <ProtectedRoute exact path="/feed" component={CreateRouteContainer} />
      <ProtectedRoute exact path="/routes" component={RouteContainer} />
      <ProtectedRoute exact path="/routes/new" component={CreateRouteContainer} />
      <ProtectedRoute exact path="/posts" component={PostsContainer} />
      <ProtectedRoute exact path="/workouts" component={WorkoutsContainer} />
  	</Switch>
	</div>
);

export default App;
