import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { configureStore  } from '@reduxjs/toolkit'
import rootReducer from "./reducers/index";
import { Provider } from 'react-redux';
import { thunk } from 'redux-thunk';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware:any) => getDefaultMiddleware().concat(thunk),
});

root.render(
  <Provider store={store}> 
    <App />
  </Provider>
);
