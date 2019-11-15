import { connect } from 'react-redux';

import { fetchPosts } from '../../actions/post_actions';
import Posts from './posts';

const mapStateToProps = ({ session, entities: { users, posts } }) => {
  return {
  	post: posts,
    currentUser: users[session.id]
  };
};

const mapDispatchToProps = dispatch => ({
	fetchPosts: () => dispatch(fetchPosts())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts);
