import React from "react";
import RestaurantCard from "./RestaurantCard";

const resInfo = [
  {
    id:1,
    name: "Burger Palace",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrBZNZ_wOKuVqM9FaBFyrvZ1k8QyMcBQP8Lw&usqp=CAU",
    categories: ["Fast Food", "Burger", "Cold Drink", "Chicken"],
    rating: "4.4 Stars",
    deliveryTime: 14
  },
  {
    id:2,
    name: "Pizzq Palace",
    img: "https://img.freepik.com/free-psd/freshly-baked-pizza-with-cut-slice-isolated-transparent-background_191095-9041.jpg?size=338&ext=jpg&ga=GA1.1.1546980028.1703635200&semt=sph",
    categories: ["Fast Food", "Pizza", "Italian", "Cold Drink", "Vegetables"],
    rating: "4.8 Stars",
    deliveryTime: 23
  }
]

const Hero = () => {
  return (
    <div className="hero">
      <div className="search-container p-1 flex justify-center">
        <div className="search p-2 m-3 border-2 rounded-full w-[40%] h-9"></div>
      </div>
      <div className="restaurantCardContainer flex flex-wrap">
        {resInfo.map((restaurant) => (
          <RestaurantCard key={restaurant.id} {...restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Hero;
