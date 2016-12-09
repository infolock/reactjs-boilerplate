import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { apiMiddleware } from 'redux-api-middleware';
import reducers from './reducers/';
import DevTools from './common/devTools';

const defaultMiddlewares = [thunkMiddleware, apiMiddleware];
const devMiddlewares = [];
const enhancer = (() => {
    if(process.env.NODE_ENV === 'development') {
        return compose(applyMiddleware(...devMiddlewares, createLogger(), ...defaultMiddlewares), DevTools.instrument());
    }

    return compose(applyMiddleware(...defaultMiddlewares));
})();

const configureStore = (initialState) => {
    const store = createStore(reducers, initialState, enhancer);

    if(process.env.NODE_ENV === 'development'){
        if(module.hot){
            module.hot.accept('./reducers/', () => {
                store.replaceReducer(require('./reducers/'));
            });
        }
    }

    return store;
}

export default configureStore;
