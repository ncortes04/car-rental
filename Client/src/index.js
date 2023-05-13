import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import userReducers from './features/user'
import carReducers from './features/cars'
import "@fontsource/plus-jakarta-sans"
import checkoutReducer from './features/checkout';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

const root = ReactDOM.createRoot(document.getElementById('root'));

const rootReducer = {
  user: userReducers,
  car: carReducers,
  checkout: checkoutReducer,
};

const store = configureStore({
  reducer: rootReducer,
  middleware: [...getDefaultMiddleware(), thunk],
});
root.render(
  <React.StrictMode>
     <Provider store={store}>
      <App />
    </Provider>,
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
