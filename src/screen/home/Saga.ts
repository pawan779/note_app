import {call, put} from 'redux-saga/effects';
import {get} from 'lodash';
import {
  LOAD_HOME_DATA,
  LOAD_HOME_DATA_FAILURE,
  LOAD_HOME_DATA_SUCCESS,
} from './Action';

// const delay = (ms: Number) => new Promise(res => setTimeout(res, ms));
export function* loadHomeDataSaga() {
  yield put({
    type: LOAD_HOME_DATA,
  });
  try {
    const response = {
      data: {
        data: {
          title: 'Home',
          description: 'This is home page',
        },
      },
    };
    const payload = get(response, 'data');

    yield put({
      type: LOAD_HOME_DATA_SUCCESS,
      payload,
    });
  } catch (e:any) {
    // alert(e.message);
    console.log('viewedNotificationError', e, e.response);
    yield put({type: LOAD_HOME_DATA_FAILURE});
  }
}
export function* loadHomeSuccess() {
  yield put({
    type: LOAD_HOME_DATA_SUCCESS,
    payload: {
      data: {
        title: 'Home1',
        description: 'This is home page1',
      },
    },
  });
}
