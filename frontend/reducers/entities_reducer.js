import { combineReducers } from 'redux';

import users from './users_reducer';
import routes from './routes_reducer';
import posts from './posts_reducer';
import workouts from './workouts_reducer';


export default combineReducers({
  users,
  routes,
  posts,
  workouts
});
