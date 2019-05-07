import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Header from './common/header';
import Index from './pages/index'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Header/>
        <Index/>
      </Provider>
    )
  }
}

export default App;
