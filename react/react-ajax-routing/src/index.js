import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/json';

const requestInterceptor = axios.interceptors.request.use(request => {
    console.log(request);
    // Edit request config here
    return request;
}, error => {
    console.error(error);
    return Promise.reject(error);
});

const responseInterceptor = axios.interceptors.response.use(response => {
    console.log(response);
    // Edit response config
    return response;
}, error => {
    console.error(error);
    return Promise.reject(error);
});

axios.interceptors.request.eject(requestInterceptor);
axios.interceptors.response.eject(responseInterceptor);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
