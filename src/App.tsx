import React from 'react';
import logo from './logo.svg';
import './App.css';
import CustomToast from './Components/Toast/CustomToast';
import CustomCard from './Components/Card/CustomCard';
import { BrowserRouter, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { Container, Placeholder } from 'react-bootstrap';
import CustomNavbar from './Components/Navbar/CustomNavbar';
import CustomFooter from './Components/Footer/CustomFooter';
import Sidebar from './Components/Sidebar/CustomSidebar';
import CustomSidebar from './Components/Sidebar/CustomSidebar';
import Products from './Pages/Products';
import Contacts from './Pages/Contacts';
import Product from './Pages/SingleProduct';

function App() {
  return (
    <BrowserRouter>
      <Container className='col-md-6'>
        <CustomNavbar />
        
            <Routes>
                <Route 
                  path="/" 
                  element={<Products />} 
                />
                <Route 
                  path="/products" 
                  element={<Products />} 
                />
                <Route
                    path="/products/:category"
                    element={<Products />}
                />
                <Route
                    path="/contact/:id"
                    element={<Contacts />}
                />
                <Route
                    path="/product/:id"
                    element={<Product />}
                />

            </Routes>
      </Container>
      <CustomFooter />
    </BrowserRouter>
  );
}

export default App;
