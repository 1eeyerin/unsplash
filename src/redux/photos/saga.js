import { all, takeLatest, call, put, select } from "redux-saga/effects";
import { Action } from "./redux";
import API from "../../api";

const saga = function* () {
  yield all([
    takeLatest(Action.Types.GET_PHOTOS, function* ({ data }) {
      yield put(Action.Creators.updateState({ isLoading: true }));
      const { list } = yield select(state => state.photos);

      try {
        const result = yield call(API.getPhotos, data);
        if (result) {
          yield put(Action.Creators.setPhotos([...list, ...result]));
        }
      } catch (e) {
        console.log("@@ e", e);
      }

      yield put(Action.Creators.updateState({ isLoading: false }));
    }),
    takeLatest(Action.Types.GET_POPUP_PHOTO, function* ({ id }) {
      try {
        const [resultPhotoById, resultPhotoRelated] = yield all([
          call(API.getPhotoById, id),
          call(API.getPhotoRelated, id)
        ]);

        if (resultPhotoById) {
          yield put(
            Action.Creators.updateState({
              popupPhoto: {
                ...resultPhotoById,
                related_photos: resultPhotoRelated.results,
                show: true
              }
            })
          );
        }
      } catch (e) {
        console.log("@@ e", e);
      }
    }),
    takeLatest(Action.Types.GET_DETAIL_PHOTO, function* ({ id }) {
      try {
        const [resultPhotoById, resultPhotoRelated] = yield all([
          call(API.getPhotoById, id),
          call(API.getPhotoRelated, id)
        ]);

        if (resultPhotoById) {
          yield put(
            Action.Creators.updateState({
              photo: {
                ...resultPhotoById,
                related_photos: resultPhotoRelated.results
              }
            })
          );
        }
      } catch (e) {
        console.log("@@ e", e);
      }
    })
  ]);
};

export default saga;
