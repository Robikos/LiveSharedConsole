import RWR from 'react-webpack-rails';
RWR.run();

import App from './containers/app';
RWR.registerComponent('App', App);
