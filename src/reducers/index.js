//counter랑 ui reducers 합치기

import {combineReducers} from 'redux';
import counter from './counter';
import ui from './ui';
//import time from './time';

const reducers = combineReducers({
    counter,ui//,time
});

export default reducers;
