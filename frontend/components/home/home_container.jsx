import { connect } from 'react-redux';

import { signout, signin } from '../../actions/session_actions';
import Home from './home';

const mapStateToProps = ({ session, entities: { users } }) => {
  return {
    currentUser: users[session.id]
  };
};

const mapDispatchToProps = dispatch => ({
  signout: () => dispatch(signout()),
  signin: () => dispatch(signin())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
