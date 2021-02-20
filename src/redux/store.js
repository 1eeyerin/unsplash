import {createStore, applyMiddleware} from 'redux';
import reducers from "./reducer";
import createSagaMiddleware from 'redux-saga';
import sagas from "./saga";
import { composeWithDevTools } from 'redux-devtools-extension';

const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducers, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(sagas);

export default store;