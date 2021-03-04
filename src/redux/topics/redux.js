import {createActions, createReducer} from "reduxsauce";

const initialState = {
    list: [],
    topicData:[],
}

export const Action = createActions({
    updateState: ['props'],
    getTopicList: ['data'],
    getTopicPhoto: ['data'],
}, {
    prefix: 'TOPICS/'
});

export default createReducer(initialState,{
    [Action.Types.UPDATE_STATE] : (state, {props}) => ({
        ...state,
        ...props
    }),
});