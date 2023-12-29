import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import resInfo from "../utils/mockRestaurantData";

const Hero = () => {
  const [resData, setResData] = useState(resInfo);
  const filterTopRated = () => {
    setResData(resData.filter(res => parseFloat(res.rating) >= 4.5));
  }

  useEffect(() => {
    const dataFetcher = async() => {
      const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.3104294&lng=73.1813327&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
      const jsonData = await data.json();
      console.log(jsonData);
    }
    dataFetcher();
  }, [])

  return (
    <div className="hero">
      <div className="search-container p-1 flex justify-center">
        <div className="search p-2 m-3 border-2 rounded-full w-[40%] h-9"></div>
      </div>
      <div className="filter flex justify-center">
        <button className="p-1 bg-orange-400 border-black border-2 rounded-2xl" onClick={filterTopRated} >
          Top Rated Restaurant
        </button>
      </div>
      <div className="restaurantCardContainer flex flex-wrap">
        {resData.map((restaurant) => (
          <RestaurantCard key={restaurant.id} {...restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Hero;
