//import React, { Component, PropTypes } from 'react';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SockJsClient from "react-stomp";

const propTypes = {
    number: PropTypes.number
};

const defaultProps = {
    number: -1
};

class Chat extends Component {

    constructor(props) {
        super(props);
        this.state = {
            clientConnected : false,
            messages : [],
            msg_v: {
                CreatedTime: null,
                Value: null
            }
          };
    }

    onMessageReceive = (msg, topic) => {
        //alert(JSON.stringify(msg) + " @ " +  JSON.stringify(this.state.messages)+" @ " + JSON.stringify(topic));
        this.setState(prevState => ({
          messages: [...prevState.messages, msg],
          msg_v:msg
        }));
      }

    render() {
        const wsSourceUrl = "http://10.151.13.160:8765/api/timecheck/live";

      //  console.log(this.state.messages[this.state.messages.length-1]);
     //   console.log(this.state.msg_v.CreatedTime);

        const {CreatedTime, Value} = this.state.msg_v;
        return(
            
            <div>
                <SockJsClient url={ wsSourceUrl } 
                topics={["/topic/test"]}
                 onMessage={ this.onMessageReceive } 
                 ref={ (client) => { this.clientRef = client }}
                onConnect={ () => {this.setState({ clientConnected: true }) } }
                 onDisconnect={ () => { this.setState({ clientConnected: false }) } }
                 debug={ false } 
                 style={[{width:'100%', height:'100%'}]}/>

                <h2>{CreatedTime}</h2>
                <h2>{Value}</h2>
            </div>
        );
    }
}

Chat.propTypes = propTypes;
Chat.defaultProps = defaultProps;

export default Chat;