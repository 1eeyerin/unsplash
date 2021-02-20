import {createActions, createReducer} from "reduxsauce";

const initialState = {
    sidebar: false,
}

export const Action = createActions({
    updateState: ['props'],
}, {
    prefix: 'APP/'
});

export default createReducer(initialState,{
    [Action.Types.UPDATE_STATE] : (state, {props}) => ({
        ...state,
        ...props
    })
});