import axios from 'axios';
import { takeEvery, put, call } from 'redux-saga/effects';

import { posts, postsSuccess, postsFailure } from '../modules/posts';

const postsApi = async () => {
  const res = await axios({
    url: 'https://jsonplaceholder.typicode.com/posts',
    method: 'GET',
  });
  return res;
};

function* postsSaga(action) {
  yield put(posts());

  try {
    const res = yield call(postsApi);

    yield put(postsSuccess(res.data));
  } catch (e) {
    console.log(e);
    yield put(postsFailure(e));
  }
}

export function* watchPostsSaga() {
  yield takeEvery('POSTS_REQUEST', postsSaga);
}
