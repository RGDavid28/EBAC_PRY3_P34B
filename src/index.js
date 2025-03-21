import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store  from '../src/components/store';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

//reportWebVitals();
