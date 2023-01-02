import React from 'react';
import { Provider } from 'react-redux';
import RouteNav from './src/navigation/routeNav';
import store from './src/redux/store';
import firebase, { initializeApp, getApps, getApp } from '@react-native-firebase/app';
import { firebaseConfig } from './src/config/firebaseConfig';

if (!firebase.app.length) {
  firebase.initializeApp(firebaseConfig)
}
if (!getApps().length) {
  initializeApp(firebaseConfig)
}
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()

const App = () => (

  <Provider store={store}>
    <RouteNav />
  </Provider>
);

export default App;
