import React from 'react'
import { GiftedChat, Bubble, Send } from 'react-native-gifted-chat'
import io from 'socket.io-client'
import dismissKeyboard from 'dismissKeyboard';
import { getDataFiles } from '../../redux/actions/index'
import { connect } from 'react-redux'

class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      user: {
        _id: 2,
        name: 'Tony',
      }
    }
    this.onReceivedMessage = this.onReceivedMessage.bind(this);
    this._storeMessages = this._storeMessages.bind(this);
    this.props.dispatch(getDataFiles())
    this.socket = io('http://192.168.56.1:3000')
    this.socket.on('chat', this.onReceivedMessage);
    this.determineUser();
  }

  determineUser() {
    this.socket.emit('userJoined');
  }

  onReceivedMessage(messages) {
    this._storeMessages(messages);
  }

  onSend = (messages = []) => {
    dismissKeyboard();
    this.socket.emit('chat', messages[0]);
    this._storeMessages(messages);
  }

  _storeMessages(messages) {
    this.setState((previousState) => {
      return {
        messages: GiftedChat.append(previousState.messages, messages),
      };
    });
  }
  renderBubble = (props) => {

    if (props.currentMessage.user.name === "Tony")
      return (
        <Bubble {...props}
          position="right"
          wrapperStyle={
            {
              left: {
                backgroundColor: '#ddd',
              },
              right: {
                backgroundColor: '#5E34C2'
              }
            }} />
      )
    else
      return (
        <Bubble {...props}
          position="left"
          wrapperStyle={
            {
              left: {
                backgroundColor: '#ddd',
              },
              right: {
                backgroundColor: '#5E34C2'
              }
            }} />
      )

  }
  render() {
    return (
      <GiftedChat
        renderAvatar={null}
        renderBubble={props => this.renderBubble(props)}
        renderUsernameOnMessage={true}
        messages={this.state.messages}
        onSend={messages => this.onSend(messages)}
        user={this.state.user}
      />
    )
  }
}

const mapStateToProps = state => ({user: state.user.email})

export default connect(mapStateToProps)(Chat)