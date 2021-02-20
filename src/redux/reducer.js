import {combineReducers} from 'redux';

import appReducer from './app/redux';
import authReducer from './auth/redux';

const reducers = combineReducers({
    app: appReducer,
    auth: authReducer,
});

export default reducers;