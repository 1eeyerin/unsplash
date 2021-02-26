import {createActions, createReducer} from "reduxsauce";

const initialState = {
    searchResults: {},
}

export const Action = createActions({
    updateState: ['props'],
    searchPhotos: ['data'],
}, {
    prefix: 'SEARCH/'
});

export default createReducer(initialState,{
    [Action.Types.UPDATE_STATE] : (state, {props}) => ({
        ...state,
        ...props
    }),
});