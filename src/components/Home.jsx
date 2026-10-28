import React from 'react';
import Header from './Header';
import CardPizza from './CardPizza';

import imgnapo from '../assets/napo.jpg';
import imgesp from '../assets/esp.jpg';
import imgpeperoni from '../assets/peperoni.jpg';




const Home = () => {
  return (
    <div>
      <Header />
      <div className="container my-5">
        <div className="row">
          <div className="col-md-4 mb-4">
            <CardPizza
              name="Napolitana"
              price={5950}
              ingredients={["mozzarella", "tomates", "jamón", "orégano"]}
              img={imgnapo}
            />
          </div>
          <div className="col-md-4 mb-4">
            <CardPizza
              name="Española"
              price={6950}
              ingredients={["mozzarella", "gorgonzola", "parmesano", "provolone"]}
              img={imgesp}
            />
          </div>
          <div className="col-md-4 mb-4">
            <CardPizza
              name="Pepperoni"
              price={6950}
              ingredients={["mozzarella", "pepperoni", "orégano"]}
              img={imgpeperoni}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
