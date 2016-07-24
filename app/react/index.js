import RWR from 'react-webpack-rails';
RWR.run();

import Application from './containers/application';
RWR.registerComponent('Application', Application);
