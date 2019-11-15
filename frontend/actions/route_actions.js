import * as APIUtil from '../util/route_api_util';

export const RECEIVE_ROUTES = 'RECEIVE_ROUTES';
export const RECEIVE_ROUTE = 'RECEIVE_ROUTE';

export const receiveRoutes = routes => ({
  type: RECEIVE_ROUTES,
  routes
});

export const receiveRoute = route => ({
  type: RECEIVE_ROUTE,
  route
});

export const fetchRoutes = filters => dispatch => (
  APIUtil.fetchRoutes(filters).then(routes => (
    dispatch(receiveRoutes(routes))
  ))
);

export const createRoute = route => dispatch => (
  APIUtil.createRoute(route).then(route => {
    return dispatch(receiveRoute(route));
  })
);