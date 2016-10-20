import React from 'react';
import { Provider } from 'react-redux';
import configureStore from '../store/store';
import App from './app';

const store = configureStore();

export default class ReduxContainer extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}
