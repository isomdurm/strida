import * as APIUtil from '../util/workout_api_util';

export const RECEIVE_WORKOUTS = 'RECEIVE_WORKOUTS';
export const RECEIVE_WORKOUT = 'RECEIVE_WORKOUT';

export const receiveWorkouts = workouts => ({
  type: RECEIVE_WORKOUTS,
  workouts
});

export const receiveWorkout = workout => ({
  type: RECEIVE_WORKOUT,
  workout
});

export const fetchWorkouts = filters => dispatch => (
  APIUtil.fetchWorkouts(filters).then(workouts => (
    dispatch(receiveWorkouts(workouts))
  ))
);

export const createWorkout = workout => dispatch => (
  APIUtil.createWorkout(workout).then(workout => {
    return dispatch(receiveWorkout(workout));
  })
);