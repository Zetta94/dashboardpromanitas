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
import Users from './Components/Users/Users';
import Adposts from './Components/Adposts/Adposts';
import Contracts from './Components/Contracts/Contracts'
import Services from './Components/Services/Services'
import FormUsers from './Components/Form/FormUsers';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <Provider store={Store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/about" element={<About/>}/>
        <Route path="/board" element={<Dashboard/>}/>
        <Route path= '/users' element ={<Users/>}/>
        <Route path= '/adposts' element ={<Adposts/>}/>
        <Route path= '/contracts' element ={<Contracts/>}/>
        <Route path= '/services' element ={<Services/>}/>
        <Route path= '/formusers/:id' element={<FormUsers/>} />
      </Routes>
    </BrowserRouter>
  </Provider>
);


