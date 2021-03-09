import {all, takeLatest, call, put, select} from "redux-saga/effects";
import {Action} from "./redux";
import API from "../../api";

const saga = function* () {
    yield all([
        takeLatest(Action.Types.GET_TOPIC_LIST,function* ({data}) {
            const result = yield call(API.getTopicList, data);

            if(result) {
                yield put(Action.Creators.updateState({
                    list: result
                })) 
            }
        }),
        takeLatest(Action.Types.GET_TOPIC_PHOTO,function* ({data}) {

            yield put(Action.Creators.updateState({isLoading : true}))
            const {topicData} = yield select(state => state.topics);

            try {
                const result = yield call(API.getTopicPhoto, data);
                if(result) {
                    yield put(Action.Creators.updateState({
                        topicData: [
                            ...topicData,
                            ...result,
                        ]
                    }))
                }
            } catch (e) {
                console.log('@@ e',e);
            }

            yield put(Action.Creators.updateState({isLoading : false}))
        }),
    ])
}

export default saga;