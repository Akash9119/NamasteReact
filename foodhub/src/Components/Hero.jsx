import React from "react";
import RestaurantCard from "./RestaurantCard";

const Hero = () => {
  return (
    <div className="hero">
      <div className="search-container p-1 flex justify-center">
        <div className="search p-2 m-3 border-2 rounded-full w-[40%] h-9"></div>
      </div>
      <div className="restaurantCard flex justify-between">
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </div>
  );
};

export default Hero;
