import React from 'react';
import { Provider } from 'react-redux';
import RouteNav from './src/navigation/routeNav';
import store from './src/redux/store';

const App = () => (
  <Provider store={store}>
    <RouteNav />
  </Provider>
);

export default App;
