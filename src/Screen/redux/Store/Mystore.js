import thunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import {rootReducer} from '../reducer/CombineReducer';
import logger from 'redux-logger';

export const MyStore = createStore(rootReducer, applyMiddleware(thunk, logger));
