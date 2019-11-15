import {
  RECEIVE_COORDINATES, RECEIVE_COORDINATE
} from '../actions/coordinate_actions';

const coordinatesReducer = (state = {}, action) => {
  Object.freeze(state)
  switch(action.type) {
    case RECEIVE_COORDINATES:
      return action.coordinates;
    case RECEIVE_COORDINATE:
      return action.coordinate;
    default:
      return state;
  }
};

export default coordinatesReducer;
