import React, { Component } from 'react';
import TestRosBridge from './components/turtle_test_suite/test';

class App extends Component {
  render() {
    return (
      <div>
        <TestRosBridge/>
      </div>
    );
  }
}

export default App;