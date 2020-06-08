import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import configureStore from "./Store"
import { Provider } from 'react-redux';
import "antd/dist/antd.css"

const store = configureStore();

const Root = () =>(
    <Provider store={store}>
        <App/>
    </Provider>)


ReactDOM.render( <Root />, document.getElementById('root'));

