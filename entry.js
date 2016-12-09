import './styles/main.less';

require('es6-promise').polyfill();

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import AppRouter from './src/router/router';
import { Provider } from 'react-redux';

// Store
import configureStore from 'configureStore';
const store = configureStore();

render(
    <Provider store={ store }>
        <Router history={ browserHistory }>
            { AppRouter }
        </Router>
    </Provider>, document.getElementById('page')
);
