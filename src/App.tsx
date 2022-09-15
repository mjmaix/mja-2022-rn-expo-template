import React from 'react';

import { Provider } from 'react-redux';

import { AppRoutes } from './AppRoutes';
import { store } from './state-management';

function App() {
  return (
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  );
}

export default App;
