import {
  RECEIVE_COORDINATES
} from '../actions/coordinate_actions';

const coordinatesReducer = (state = {}, action) => {
  Object.freeze(state)
  switch(action.type) {
    case RECEIVE_COORDINATES:
      return action.coordinates;
    default:
      return state;
  }
};

export default coordinatesReducer;
