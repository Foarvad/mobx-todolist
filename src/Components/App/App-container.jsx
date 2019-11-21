import React, { Component } from 'react';

import AppView from './App-view';
import Todo from 'Components/Todo';


class App extends Component {
  render() {
    return (
      <AppView>
        <Todo />
      </AppView>
    );
  }
}

export default App;
