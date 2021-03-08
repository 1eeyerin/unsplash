import {createActions, createReducer} from "reduxsauce";

const initialState = {
    searchResults: {
        results: []
    },
}

export const Action = createActions({
    updateState: ['props'],
    searchPhotos: ['data'],
    deleteHistory: ['props'],
}, {
    prefix: 'SEARCH/'
});

export default createReducer(initialState, {
    [Action.Types.UPDATE_STATE]: (state, {props}) => ({
        ...state,
        ...props
    }),
    [Action.Types.DELETE_HISTORY]: (state, {props}) => ({
        ...state,
        searchResults: {
            results: []
        },
    }),
});