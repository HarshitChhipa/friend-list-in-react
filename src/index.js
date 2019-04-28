import React from "react";
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from "redux";
import reduxThunk from 'redux-thunk';
import reducers from './reducers';
import "./assets/css/main.css";
import FriendsList from "./Components/FriendsList";
import {library} from '@fortawesome/fontawesome-svg-core';
import {faCircle as fasCircle, faCircle as farCircle, faStar, faTrashAlt} from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


const store = createStore(reducers, {},
    applyMiddleware(reduxThunk));


var destination = document.querySelector("#container");

library.add(faTrashAlt, faStar, farCircle, fasCircle);

ReactDOM.render(
    <Provider store={store}>
        <FriendsList/>
    </Provider>,
    destination
);
