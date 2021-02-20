import {all} from 'redux-saga/effects'
import appSaga from './app/saga';
import authSaga from './auth/saga';

function* sagas() {
    yield all([
        appSaga(),
        authSaga(),
    ])
}

export default sagas;