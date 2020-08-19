const POSTS = 'POSTS';
const POSTS_SUCCESS = 'POSTS_SUCCESS';
const POSTS_FAILURE = 'POSTS_FAILURE';

export const posts = () => ({ type: POSTS });
export const postsSuccess = (payload) => ({ type: POSTS_SUCCESS, payload });
export const postsFailure = () => ({ type: POSTS_FAILURE });

const initialState = {
  posts: {
    isLoading: false,
    data: null,
    error: null,
  },
};

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case POSTS:
      return {
        ...state,
        posts: {
          isLoading: true,
          data: null,
          error: null,
        },
      };
    case POSTS_SUCCESS:
      return {
        ...state,
        posts: {
          isLoading: false,
          data: action.payload,
          error: null,
        },
      };
    case POSTS_FAILURE:
      return {
        ...state,
        posts: {
          isLoading: false,
          data: null,
          error: action.payload,
        },
      };
    default:
      return state;
  }
};
