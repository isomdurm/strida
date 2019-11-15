import { connect } from 'react-redux';

import { fetchWorkouts } from '../../actions/workout_actions';
import Workouts from './workout';

const mapStateToProps = ({ session, entities: { users, workouts } }) => {
  return {
  	workout: workouts,
    currentUser: users[session.id]
  };
};

const mapDispatchToProps = dispatch => ({
	fetchWorkouts: () => dispatch(fetchWorkouts())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Workouts);
