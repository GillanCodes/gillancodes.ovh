import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from "./reducers/index";
import { Provider } from 'react-redux';
import { thunk } from 'redux-thunk';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const store = createStore(
  rootReducer, applyMiddleware(thunk)
)

root.render(
  <Provider store={store}> 
    <App />
  </Provider>
);