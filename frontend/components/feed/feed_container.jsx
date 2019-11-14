import { connect } from 'react-redux';

import { createRoute } from '../../actions/route_actions';
import { createCoordinate } from '../../actions/coordinate_actions';
import Feed from './feed';

const mapStateToProps = ({ session, entities: { users } }) => {
  return {
    currentUser: users[session.id]
  };
};

const mapDispatchToProps = dispatch => ({
	createRoute: route => dispatch(createRoute(route)),
	createCoordinate: coordinate => dispatch(createCoordinate(coordinate))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Feed);
