import React from 'react';

import { BrowserRouter, Link, Route, Routes as CustomRoutes} from 'react-router-dom';

import Welcome from './Welcome';
import Secured from './Secured';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <ul>
          <li><Link to="/">public component</Link></li>
          <li><Link to="/secured">secured component</Link></li>
        </ul>

        <CustomRoutes>
        
        <Route exact path="/" element={<Welcome/>} />
        <Route path="/secured" element={<Secured/>} />
      </CustomRoutes>
      </div>
    </BrowserRouter>
  );
}

export default App;
