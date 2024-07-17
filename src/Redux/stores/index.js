import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import rootReducer from '../reducers'


import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
    reducer: rootReducer,
});
