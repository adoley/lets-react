import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';

class App extends Component {
  render() {
    return (
      <div className="App">
          <h1>hello react </h1>
          <h1>{this.props.a} + {this.props.b} = {this.props.a + this.props.b}</h1>
      </div>
    );
  }

}
App.propTypes={
    a: PropTypes.number,
    b: PropTypes.number
};

export default App;
