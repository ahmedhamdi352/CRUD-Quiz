import React from 'react';
import { Provider } from 'react-redux';
import { store, history } from './state-mangment/store';
import PublicRoutes from './router';

function App() {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <PublicRoutes history={history} />
      </Provider>
    </React.StrictMode>
  );
}

export default App;
