import React from 'react';
import { renderRoutes } from 'react-router-config';
import routes from './routes';

import { HashRouter } from 'react-router-dom';
import './global/normalize.less';

function App() {
  return (
    <HashRouter>
      { renderRoutes(routes) }
    </HashRouter>
  );
}

export default App;
