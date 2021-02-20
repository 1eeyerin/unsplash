import React from 'react';
import ReactDOM from 'react-dom';

import App from './view/App';
import {Router} from "react-router-dom";
import {Provider} from 'react-redux';
import store from "./redux/store";
import HISTORY from "./lib/History";

ReactDOM.render(
    <Provider store={store}>
        <Router history={HISTORY}>
            <App/>
        </Router>
    </Provider>,
    document.getElementById('root')
)
;


