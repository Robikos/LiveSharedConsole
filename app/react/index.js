import RWR from 'react-webpack-rails';
RWR.run();

import ReduxContainer from './containers/redux_container';
import App from './containers/app';

RWR.registerComponent('ReduxContainer', ReduxContainer);
RWR.registerComponent('App', App);
