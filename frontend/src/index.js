import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from './landing_page/home/Homepage';
import SignUp from './landing_page/signup/Signup';
import Pricing from './landing_page/pricing/PricingPage';
import Products from './landing_page/products/productspage';
import Support from './landing_page/support/SupportPage';
import Footer from './landing_page/Footer';
import Navbar from './landing_page/Navbar';
import NotFound from './landing_page/NotFound';
import PricingPage from './landing_page/about/AboutPage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Navbar />
  <Routes>
    
    <Route path = "/" element={<HomePage />}/>
    <Route path = "/signup" element={<SignUp />}/>
    <Route path = "/about" element={<PricingPage />}/>
    <Route path = "/pricing" element={<Pricing />}/>
    <Route path = "/product" element={<Products />}/>
    <Route path = "/support" element={<Support />} />
    <Route path = "*" element={<NotFound />} />
    
  </Routes>
  <Footer />
  </BrowserRouter>
);


