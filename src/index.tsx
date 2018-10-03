// import blue from '@material-ui/core/colors/blue';

import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from './store';

import createDevTools from './tools/devTools';
import { WindowResize } from './store/layout/actions';

const benzina = {
  primary: {
    main: '#e82129',
  },
  secondary: {
    main: '#989898',
  },
}

const theme = createMuiTheme({
  palette: {
    primary: benzina.primary,
    secondary: benzina.secondary
  }
});

const store = createStore(
  rootReducer,
  createDevTools()
  );



window.addEventListener('resize', (ev) => {
    store.dispatch(WindowResize());
});

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
