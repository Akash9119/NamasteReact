import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { RouterProvider } from 'react-router-dom';
import { routerPath } from "./App";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={routerPath}/>
);

reportWebVitals();
