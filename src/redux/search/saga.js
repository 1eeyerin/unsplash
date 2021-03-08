import {all, takeLatest, call, put} from "redux-saga/effects";
import {Action} from "./redux";
import API from "../../api";

const saga = function* () {
    yield all([
        takeLatest(Action.Types.SEARCH_PHOTOS, function* ({data}) {
            try {
                yield put(Action.Creators.updateState({
                    searchResults: {},
                }))
                const result = yield call(API.searchPhotos, data);
                if(result) {
                    yield put(Action.Creators.updateState({
                        searchResults: result,
                    }))
                }
            } catch (e) {
                console.log('@@ e',e);
            }
        })
    ])
}

export default saga;