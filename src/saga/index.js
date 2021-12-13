import {takeLatest, takeEvery, fork, cancel} from 'redux-saga/effects';
import {LOAD_HOME_DATA_ATTEMPT} from '../screen/home/Action';
import {loadHomeDataSaga} from '../screen/home/Saga';
// import {networkSaga} from 'react-native-offline';

// WatcherSaga
function* rootSaga() {
  //   yield fork(networkSaga);
  yield takeLatest(LOAD_HOME_DATA_ATTEMPT, loadHomeDataSaga);
}

export default rootSaga;
