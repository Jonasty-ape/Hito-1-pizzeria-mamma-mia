
import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Cart from './components/Cart';
import Register from './components/Register';
import Login from './components/Login';
import Footer from './components/Footer';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      
    
      <Home />
      <Cart />
      

      <Register />
      <Login />
      <Footer />
    </div>
  );
}

export default App;
