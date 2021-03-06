import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import AuthReducer from './containers/Auth/Redux/auth-reducer'
import HomepageReducer from './containers/Homepage/Redux/homepage-reducer'
import createSagaMiddleware from 'redux-saga'
import './assets/css/bootstrap.css'
import './assets/css/font-awesome.css'
import './assets/css/easy-responsive-tabs.css'
import './assets/js/global'
import './assets/css/style.css'
// import cartReducer from ''

import rootSagaWatcher from './redux-store/sagasWatcher'

const rootReducer = combineReducers({
    auth: AuthReducer,
    homepage: HomepageReducer
})
const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware))
)
sagaMiddleware.run(rootSagaWatcher)
const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>);
ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
