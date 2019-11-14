import { connect } from 'react-redux';

import { fetchRoutes } from '../../actions/route_actions';
import Route from './route';

const mapStateToProps = ({ session, entities: { users, routes } }) => {
  return {
  	route: routes,
    currentUser: users[session.id]
  };
};

const mapDispatchToProps = dispatch => ({
	fetchRoutes: () => dispatch(fetchRoutes())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Route);
