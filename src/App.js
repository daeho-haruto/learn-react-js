import React, {Component} from 'react';
import TodoListTemplate from './components/01_study/TodoListTemplate';
import Form from './components/01_study/Form';

class App extends Component {
  render() {
    return (
      <TodoListTemplate form={<Form/>}>
        템플릿 완성
      </TodoListTemplate>
    );
  }
}

export default App;
