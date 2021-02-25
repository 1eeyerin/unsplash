import {bindActionCreators} from 'redux'
import store from "./store";

import {Action as AppAction} from './app/redux'
import {Action as AuthAction} from './auth/redux'
import {Action as PhotosAction} from './photos/redux'

const {dispatch} = store;

export const appActions = bindActionCreators(AppAction.Creators, dispatch);
export const authActions = bindActionCreators(AuthAction.Creators, dispatch);
export const photosActions = bindActionCreators(PhotosAction.Creators, dispatch);
