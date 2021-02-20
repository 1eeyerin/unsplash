import {createBrowserHistory} from 'history';

const HISTORY = createBrowserHistory();

export const navigate = url => {
    HISTORY.push(url);
};

export const navigateReplace = url => {
    HISTORY.replace(url);
};

export default HISTORY;