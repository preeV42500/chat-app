import React from 'react';
import './index.css';

const Message = ({author, text}) => (
  <div className="Message">
    <div className="Message-author">{author}</div>
    <div className="Message-text">{text}</div>
  </div>
);

const List = ({messages}) => (
  <div className="MessagePane-List">
    { messages.map(({id, author, text}) => <Message key={id} author={author} text={text} />) }
  </div>
);

const MessagePane = ({messages}) => (
  <div className="MessagePane">
    <List messages={messages} />
  </div>
);

MessagePane.defaultProps = {
  messages: []
};

MessagePane.propTypes = {
  messages: React.PropTypes.array.isRequired
};

export default MessagePane;
