import RWR, { integrationsManager } from 'react-webpack-rails';
import RWRRedux from 'rwr-redux';

integrationsManager.register('redux-store', RWRRedux.storeIntegrationWrapper);
integrationsManager.register('redux-container', RWRRedux.containerIntegrationWrapper);

import Store from './store/store';
RWRRedux.registerStore('Store', Store);

import App from './containers/app';
RWRRedux.registerContainer('App', App);
