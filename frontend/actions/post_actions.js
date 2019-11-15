import * as APIUtil from '../util/post_api_util';

export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const RECEIVE_POST = 'RECEIVE_POST';

export const receivePosts = posts => ({
  type: RECEIVE_POSTS,
  posts
});

export const receivePost = post => ({
  type: RECEIVE_POST,
  post
});

export const fetchPosts = filters => dispatch => (
  APIUtil.fetchPosts(filters).then(posts => (
    dispatch(receivePosts(posts))
  ))
);

export const createPost = post => dispatch => (
  APIUtil.createPost(post).then(post => {
    return dispatch(receivePost(post));
  })
);