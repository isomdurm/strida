import * as APIUtil from '../util/coordinate_api_util';

export const RECEIVE_COORDINATES = 'RECEIVE_COORDINATES';

export const receiveCoordinates = coordinates => ({
  type: RECEIVE_COORDINATES,
  coordinates
});

export const fetchCoordinates = filters => dispatch => (
  APIUtil.fetchCoordinates(filters).then(coordinates => (
    dispatch(receiveCoordinates(coordinates))
  ))
);

export const createCoordinate = coordinate => dispatch => (
  APIUtil.createCoordinate(coordinate).then(coordinate => (
    dispatch(receiveCoordinate(coordinate))
  ))
);