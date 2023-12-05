import React from 'react';
import logo from './logo.svg';
import './App.css';
import CustomToast from './Components/Toast/CustomToast';
import CustomCard from './Components/Card/CustomCard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Placeholder } from 'react-bootstrap';
import CustomNavbar from './Components/Navbar/CustomNavbar';
import CustomFooter from './Components/Footer/CustomFooter';
import Sidebar from './Components/Sidebar/CustomSidebar';

function App() {
  return (
    <BrowserRouter>
        <CustomNavbar />
        <CustomToast title="warning" description='helloooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo!' />
        <CustomToast title="warning" description='helloooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo!' />
        <CustomToast title="warning" description='helloooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo!' />

        <Routes>
            <Route
                path="/"
                element={<Placeholder />}
            />
            <Route
                path="/contact"
                element={<Placeholder />}
            />
        </Routes>

        <CustomFooter />
    </BrowserRouter>
  );
}

export default App;
