import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

const App = () => (
  <div className="App">
    <Provider store={store}>
      <Header />
      <Main />
    </Provider>
  </div>
);

export default App;
