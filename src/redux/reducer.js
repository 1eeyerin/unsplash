import {combineReducers} from 'redux';

import appReducer from './app/redux';
import authReducer from './auth/redux';
import photosReducer from './photos/redux';
import searchReducer from './search/redux';

const reducers = combineReducers({
    app: appReducer,
    auth: authReducer,
    photos: photosReducer,
    search: searchReducer,
});

export default reducers;