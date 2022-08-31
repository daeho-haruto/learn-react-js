import React, { Component } from 'react';
import TestRosBridge from './components/turtle_test_suite/test';
// import ScrollBox from './components/02_study/ScrollBox';

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