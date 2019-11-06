import * as React from 'karet';
import * as U from 'karet.util';
import { render } from 'react-dom';

import * as serviceWorker from './serviceWorker';
import Main from './Main';
import { createStore } from 'core/state';

import './index.scss';

const store = createStore();

render(<Main state={U.view([], store)} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
