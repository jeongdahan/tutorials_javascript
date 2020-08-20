import { handleActions } from 'redux-actions';
import { produce } from 'immer';
import { asyncActionCreator, asyncAction } from '../core/utils/reduxUtil';

// 1. 각 모듈별 함수 구분을 위한 prefix 각 모듈 파일명 + '/'의 조합으로 구성
const prefix = 'posts/';

// 2. 액션에 대해서 정의
export const ASYNC_POSTS = asyncActionCreator(`${prefix}POSTS`);

// 3. 액션 생성자 함수에 대해서 정의
export const getAsyncAction = asyncAction(ASYNC_POSTS);

// 4. 리듀서의 값을 정의
const initialState = {
  posts: {
    isLoading: false,
    data: null,
    error: null,
  },
};

// 5. 리듀서를 정의
export const postsReducer = handleActions(
  {
    [ASYNC_POSTS.REQUEST]: (state) =>
      produce(state, (draft) => {
        draft.posts.isLoading = true;
      }),
    [ASYNC_POSTS.SUCCESS]: (state, action) =>
      produce(state, (draft) => {
        draft.posts.isLoading = false;
        draft.posts.data = action.payload;
      }),
    [ASYNC_POSTS.FAILURE]: (state, action) =>
      produce(state, (draft) => {
        draft.posts.isLoading = false;
        draft.posts.data = initialState.posts.data;
        draft.posts.error = action.payload;
      }),
  },
  initialState
);
