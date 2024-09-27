
import React  from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './Pages/AuthContext';

import OrdersPage from './Pages/Orderspage';
import Landingpage from './Pages/Landingpage';
import SignInpage from './Pages/SignInpage';
import RegisterPage from './Pages/Userform'; 
import Mobilepage from './Pages/MobilePage';
import Computerpage from './Pages/Computerpage';
import Mobilesingle from './singels/Mobilesingle';
import Usercart from './Stores/Usercart';
import Navbar from './Components/Navbar';
import EmartPage from './Pages/Emartpage';
import Products from './Components/products';
import Logoutpage from './Pages/Logoutpage';
import OrderConfirmation from './Pages/OrderConfirmation';
import OrderSuccess from './Pages/OrderSuccess';
import MyOrders from './Pages/MyOrders';
import './App.css';
import { useEffect } from 'react';

const App = () => {
  return (
    <AuthProvider>
   
        <AppContent />
  
    </AuthProvider>
  );
};

const AppContent = () => {
  const { isAuthenticated } = useAuth();

  return (
    <>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/signin" element={<SignInpage />} />
        <Route path="/register" element={<RegisterPage />} /> 
        <Route path="/logout" element={<Logoutpage />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/order-confirmation" element={<OrderConfirmation />} />
        <Route path="/order-success" element={<OrderSuccess />} />
        <Route path="/my-orders" element={<MyOrders />} />

        <Route path="/mobiles" element={isAuthenticated ? <Mobilepage /> : <Navigate to="/signin" />} />
        <Route path="/computers" element={isAuthenticated ? <Computerpage /> : <Navigate to="/signin" />} />
        <Route path="/mobiles/:id" element={isAuthenticated ? <Mobilesingle /> : <Navigate to="/signin" />} />
        <Route path="/cart" element={isAuthenticated ? <Usercart /> : <Navigate to="/signin" />} />
        <Route path="/e-mart" element={isAuthenticated ? <EmartPage /> : <Navigate to="/signin" />} />
        <Route path="/products" element={isAuthenticated ? <Products /> : <Navigate to="/signin" />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

export default App;
