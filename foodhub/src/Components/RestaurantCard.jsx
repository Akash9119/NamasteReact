import React from "react";

const RestaurantCard = ({img, name, categories, rating, deliveryTime}) => {
  return (
    <div className="restaurantCard w-[200px] m-6 hover:cursor-pointer hover:bg-slate-300 bg-slate-50 p-3 rounded-md">
      <img className="p-2" src={img} alt="FoodItem" />
      <h1 className="p-1">{name}</h1>
      <h2 className="p-1">{categories.join(", ")}</h2>
      <h3 className="p-1">{rating}</h3>
      <h3 className="p-1">{`Delivery Time: ${deliveryTime} mins`}</h3>
    </div>
  );
}

export default RestaurantCard;
