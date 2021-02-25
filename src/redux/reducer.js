import {combineReducers} from 'redux';

import appReducer from './app/redux';
import authReducer from './auth/redux';
import photosReducer from './photos/redux';

const reducers = combineReducers({
    app: appReducer,
    auth: authReducer,
    photos: photosReducer,
});

export default reducers;