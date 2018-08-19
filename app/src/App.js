import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';

class App extends Component {
    constructor(props){
        super(props)
       this.greet=this.greet.bind(this);
    }
  render() {
    return (
      <div className="App">
          <h1>hello react </h1>
          <h1>{this.props.a} + {this.props.b} = {this.props.a + this.props.b}</h1>
          <button onClick={this.greet}>Greet</button>
      </div>
    );
  }

    greet(){
       console.log("greet button clicked");
    }
}
App.propTypes={
    a: PropTypes.number,
    b: PropTypes.number
};

export default App;
