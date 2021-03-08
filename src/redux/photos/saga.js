import {all, takeLatest, call, put} from "redux-saga/effects";
import {Action} from "./redux";
import API from "../../api";

const saga = function* () {
    yield all([
        takeLatest(Action.Types.GET_PHOTOS, function* ({data}) {
            try {
                const result = yield call(API.getPhotos, data);
                if(result) {
                    yield put(Action.Creators.setPhotos(result))
                }
            } catch(e) {
                console.log('@@ e',e);
            }
        }),
        takeLatest(Action.Types.GET_PHOTO_BY_ID, function* ({id}) {
            try {

                const [resultPhotoById, resultPhotoRelated] = yield all([
                    call(API.getPhotoById, id),
                    call(API.getPhotoRelated, id)
                ])

                if(resultPhotoById) {
                    yield put(Action.Creators.updateState({
                        popupPhoto : {
                            ...resultPhotoById,
                            related_photos: resultPhotoRelated.results,
                            show: true,
                        }
                    }))
                }
            } catch (e) {
                console.log('@@ e',e);
            }
        })

    ])
}

export default saga;