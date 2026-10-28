import React from 'react';
import headerImg from '../assets/Header.jpg'; 

const Header = () => {
  return (
    <header className="text-white text-center py-5 position-relative" style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${headerImg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '300px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <h1>¡Pizzería Mamma Mía!</h1>
      <p className="lead">¡Tenemos las mejores pizzas que podrás encontrar!</p>
      <hr className="w-50 mx-auto border-light" />
    </header>
  );
};

export default Header;
