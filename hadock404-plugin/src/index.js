import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import App from './lib/App';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
        <Routes>
          <Route path="/" element={<App label="test"/>}/>
        </Routes>
  </BrowserRouter>,
);