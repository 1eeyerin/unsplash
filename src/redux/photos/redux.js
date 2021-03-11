import {createActions, createReducer} from "reduxsauce";

const initialState = {
    list: [],
    popupPhoto: {
        show: false,
    }
}

export const Action = createActions({
    updateState: ['props'],
    getPhotos: ['data'],
    getPopupPhoto: ['id'],
    getDetailPhoto: ['id'],
    setPhotos: ['photos'],
}, {
    prefix: 'PHOTOS/'
});

export default createReducer(initialState,{
    [Action.Types.UPDATE_STATE] : (state, {props}) => ({
        ...state,
        ...props
    }),
    [Action.Types.SET_PHOTOS] : (state, {photos}) => ({
        ...state,
        list: photos,
    })
});