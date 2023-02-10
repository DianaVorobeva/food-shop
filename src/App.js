import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Catalog from './Catalog';
import Home from './Home';
import Delivery from './Delivery';
import Contact from './Contact';
import logo from './logo.png'


function App() {
  return (

       <Router>
        <nav>
          <Link to ="/" className='link'><img src={logo} width="80px" alt='logo'/></Link>
          <Link to ="/catalog" className='link'>Catalog</Link>
          <Link to ="/delivery" className='link'>Delivery</Link>
          <Link to ="/contact" className='link'>Contact</Link>
      </nav>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/catalog" element={<Catalog/>}/>
          <Route path="/delivery" element={<Delivery/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </Router>
   
  );
}

export default App;
