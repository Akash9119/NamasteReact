import React from "react";
import PizzaImage from "../Resources/PizzaImage.jpeg";

const RestaurantCard = () => {
  return (
    <div className="restaurantCard w-[200px] h-[300px] m-4 hover:cursor-pointer hover:border-2 bg-slate-50">
    <img className="p-2" src={PizzaImage} alt="PizzaImage" />
    <h1 className="p-1">Pizza Palace</h1>
    <h2 className="p-1">Fast Food, Italian, Europe</h2>
    <h3 className="p-1">4.5 Stars</h3>
    <h3 className="p-1">14 Minutes</h3>
    <button className="bg-slate-600 text-white px-2 py-1 rounded-lg ml-12 mt-1 text-md">Order Now</button>
    </div>
  )
}

export default RestaurantCard