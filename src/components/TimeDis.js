//import React, { Component, PropTypes } from 'react';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as service from '../services/post';

const propTypes = {
    number: PropTypes.number
};

const defaultProps = {
    number: -1
};

class TimeDis extends Component {
    
    constructor(props) {
        super();
        // initializes component state
        this.state = {
            postId: 1,
            fetching: false, // tells whether the request is waiting for response or not
            post: {
                title: null,
                body: null
            },
            comments: [],
            warningVisibility: false
        };
    }

    fetchPostInfo = async (postId) => {

        this.setState({
            fetching: true // requesting..
        });
            
        try{
            // wait for two promises
            const info = await Promise.all([
                service.getPost(postId)
            ]);

            // Object destructuring Syntax,
            // takes out required values and create references to them
        //    const {title, body} = info[0].data; //주석
            const comments = info[0].data;
            
            this.setState({
                postId,
                comments,
                fetching: false // done!
            });
        }catch(e){
            // if err, stop at this point
            this.setState({
                fetching: false
            });
        }
    }
    componentDidMount() {
        this.fetchPostInfo(1);
    }
    render() {
        const {postId, fetching, comments, warningVisibility} = this.state;
        return(
            <div>
                 <h1>{comments}</h1>
            </div>
        );
    }
}

TimeDis.propTypes = propTypes;
TimeDis.defaultProps = defaultProps;

export default TimeDis;