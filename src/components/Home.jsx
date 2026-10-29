import React from 'react';
import Header from './Header';
import CardPizza from './CardPizza';
import { pizzas } from '../pizzas';


import imgnapo from '../assets/napo.jpg';
import imgesp from '../assets/esp.jpg';
import imgpeperoni from '../assets/peperoni.jpg';
import imgbacon from '../assets/bacon.jpg';
import imgcuatroest from '../assets/cuatroest.jpg';
import imgpollohot from '../assets/pollohot.jpg';


const imagenesLocales = {
  P001: imgnapo,
  P002: imgesp,
  P003: imgpeperoni,
  P004: imgcuatroest,
  P005: imgbacon,
  P006: imgpollohot

};

const Home = () => {
  return (
    <div>
      <Header />
      <div className="container my-5">
        <div className="row">
          {pizzas.map((pizza) => (
            <div className="col-md-4 mb-4" key={pizza.id}>
              <CardPizza
                name={pizza.name}
                price={pizza.price}
                ingredients={pizza.ingredients}
                img={imagenesLocales[pizza.id] || pizza.img}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

