import {all, takeLatest, call, put} from "redux-saga/effects";
import {Action} from "./redux";
import API from "../../api";

const saga = function* () {
    yield all([
        takeLatest(Action.Types.GET_PHOTOS, function* ({data}) {
            try {
                const result = yield call(API.getPhotos, data);
                if(result.data) {
                    yield put(Action.Creators.setPhotos(result.data))
                }
            } catch(e) {
                console.log('@@ e',e);
            }
        })
    ])
}

export default saga;