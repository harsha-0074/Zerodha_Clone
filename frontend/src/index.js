import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from './landing_page/home/Homepage';
import SignUp from './landing_page/signup/Signup';
import Pricing from './landing_page/pricing/PricingPage';
import products from './landing_page/products/productspage';
import support from './landing_page/support/SupportPage';
import Footer from './landing_page/Footer';
import Navbar from './landing_page/Navbar';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Navbar />
  <Routes>
    
    <Route path = "/" element={<HomePage />}/>
    <Route path = "/signup" element={<SignUp />}/>
    <Route path = "/about" element={<HomePage />}/>
    <Route path = "/pricing" element={<Pricing />}/>
    <Route path = "/product" element={<product />}/>
    <Route path = "/support" element={<support />} />
    
  </Routes>
  <Footer />
  </BrowserRouter>
);


