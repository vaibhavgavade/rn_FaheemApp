import {combineReducers} from 'redux';
import {MyReducer} from './Myreducer';

export const rootReducer = combineReducers({
  reduce1: MyReducer,
});
