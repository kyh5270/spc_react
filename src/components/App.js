import React, { Component, PropTypes } from 'react'; 
import Conter from './Conter';
import Counter from './Conter';

const propTypes = { };
const defaultProps = { };
class App extends Component { 
    constructor(props) { 
        super(props)
    }
    render() {
        return(
            <Counter/>
        );
    }
}
App.propTypes = propTypes;
App.defaultProps = defaultProps;
export default App;