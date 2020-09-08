//import React, { Component, PropTypes } from 'react';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as service from '../services/post';

const initialState = {
    comments : ''
};

//state 값이 없으면 자동으로 initialState가 되게함
export default function time(state=initialState,action){

    const info = await Promise.all([
        service.getPost(1),
    ]);

    const comments = info[0].data;

    if(action.type === types.SET_COLOR){
        return{
            color: action.color
        };
    }else{
        return state;
    }
}
