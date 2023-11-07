import React from 'react';
import { Provider } from 'react-redux';
import { store, history } from './state-mangment/store';
import PublicRoutes from './router';

function App() {
  return (
    <Provider store={store}>
      <PublicRoutes history={history} />
    </Provider>
  );
}

export default App;
