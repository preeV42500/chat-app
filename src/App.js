import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


const Message = ({author, text}) => (
  <div className="Message">
    <div className="Message-author">{author}</div>
    <div className="Message-text">{text}</div>
  </div>
)


class App extends Component {
  render() {
    return (
      <div className="App">

        <Message author="Ben" text="hi" />
        <Message author="Jen" text="hi to you too" />

      </div>
    );
  }
}

export default App;
