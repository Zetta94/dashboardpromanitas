//IMPORTS
import React from 'react';
import ReactDOM from 'react-dom/client';
//ROUTER-DOM && REDUX
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import Store from './Redux/Store';
//COMPONENTS
import Dashboard from './Dashboard';
import About from './Components/About/About';
import Login from './Components/Login/Login';
import Deleted from './Components/Deleted/Deleted';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <Provider store={Store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/about" element={<About/>}/>
        <Route path="/board" element={<Dashboard/>}/>
        <Route path="/deleted" element={<Deleted/>}/>
      </Routes>
    </BrowserRouter>
  </Provider>
);


