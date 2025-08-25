import React from 'react'
import './foodBody.css';
import Card from '../../card/Card';
import menuDataAPI from '../../../assets/data/menuDataAPI';
// Simulated API data (object array)
const foodItems = menuDataAPI.menu.food;

const FoodBody = () => {
   return (
    <div className="container-food flex-wrap mt-3 d-flex  justify-content-center">
      {foodItems.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
}

export default FoodBody
