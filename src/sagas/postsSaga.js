import axios from 'axios';
import { takeEvery } from 'redux-saga/effects';
import createAsyncSaga from '../core/utils/reduxUtil';
import { getAsyncAction, ASYNC_POSTS } from '../modules/posts';

const postsApi = async () => {
  const res = await axios({
    url: 'https://jsonplaceholder.typicode.com/posts',
    method: 'GET',
  });
  return res.data;
};

const postsSaga = createAsyncSaga(getAsyncAction, postsApi);

export function* watchPostsSaga() {
  yield takeEvery(ASYNC_POSTS.REQUEST, postsSaga);
}
