import React from 'react'
import './dessert.css'
import Card from '../../card/Card';
import menuDataAPI from '../../../assets/data/menuDataAPI';
// Simulated API data (object array)
const foodItems = menuDataAPI.menu.desserts;
const Dessert = () => {
  return (
    <div className="container-drink flex-wrap mt-3 d-flex  justify-content-center">
      {foodItems.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
}

export default Dessert;