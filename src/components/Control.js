//import React, { Component, PropTypes } from 'react';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = { 
    onPlus : PropTypes.func,
    onSubstract : PropTypes.func,
    onRandomizeColor : PropTypes.func
};

function createWarning(funcName){
    return () => console.warn(funcName + ' is not defined');
}

const defaultProps = {
    onPlus: createWarning('onPlus'),
    onSubstract: createWarning('onSubstract'),
    onRandomizeColor: createWarning('onRandomizeColor')
 };
class Control extends Component { 
    constructor(props) { 
        super(props)
    }
    render() {
        return(
            <div>
                <button onClick={this.props.onPlus}>+</button>
                <button onClick={this.props.onSubstract}>-</button>
                <button onClick={this.props.onRandomizeColor}>Randomize Color</button>
            </div>
        );
    }
}
Control.propTypes = propTypes;
Control.defaultProps = defaultProps;
export default Control;