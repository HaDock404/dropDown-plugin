import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import './styles/normalize.css'
import GlobalStyle from './styles/createGlobalStyle.jsx'

import HRnet from './components/HRnet';
import Header from './components/Header';
import Error from './pages/Error';
import Form from './components/Form';
import Employees from './components/Employees';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <GlobalStyle/>
        <Routes>
          <Route path="/" element={<><Header/><HRnet/><Form/></>}/>
          <Route path="/employee" element={<><Header/><Employees/></>}/>
          <Route path="*" element={<><Header/><Error/></>}/>
        </Routes>
    <React.StrictMode></React.StrictMode>
  </BrowserRouter>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
