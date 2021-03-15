import { all, takeLatest, call, put, select } from "redux-saga/effects";
import { Action } from "./redux";
import API from "../../api";

const saga = function* () {
  yield all([
    takeLatest(Action.Types.SEARCH_PHOTOS, function* ({ data }) {
      yield put(Action.Creators.updateState({ isLoading: true }));
      const { searchResults } = yield select(state => state.search);

      try {
        const result = yield call(API.searchPhotos, data);
        if (result) {
          yield put(
            Action.Creators.updateState({
              searchResults: {
                ...result,
                results: [...searchResults.results, ...result.results]
              }
            })
          );
        }
      } catch (e) {
        console.log("@@ e", e);
      }

      yield put(Action.Creators.updateState({ isLoading: false }));
    })
  ]);
};

export default saga;
