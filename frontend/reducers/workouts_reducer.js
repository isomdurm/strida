import {
  RECEIVE_WORKOUTS,
  RECEIVE_WORKOUT
} from '../actions/workout_actions';

const workoutsReducer = (state = {}, action) => {
  Object.freeze(state)
  switch(action.type) {
    case RECEIVE_WORKOUTS:
      return action.workouts;
    case RECEIVE_WORKOUT:
      const newWorkout = { [action.workout.id]: action.workout };
      return Object.assign({}, state, newWorkout);
    default:
      return state;
  }
};

export default workoutsReducer;
