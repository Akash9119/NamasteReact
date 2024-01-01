import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import resInfo from "../utils/mockRestaurantData";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";

const Hero = () => {
  const [resData, setResData] = useState(resInfo);
  const [filterRes, setFilterRes] = useState([]);
  let searchData = resData;
  const [seachFilter, setSeachFilter] = useState("");
  const filterTopRated = () => {
    setResData(resData.filter(res => parseFloat(res.rating) >= 4.5));
  }

  const filteredData = () => {
    const filter = searchData.filter(res => (res.name.toLowerCase().includes(seachFilter.toLowerCase())));
    setFilterRes(filter);
  }

  useEffect(() => {
    const dataFetcher = async() => {
      const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.3104294&lng=73.1813327&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
      const jsonData = await data.json();
      // console.log(jsonData);
    }
    dataFetcher();
  }, [])

  const onlinStatus = useOnlineStatus();
  if(onlinStatus === false) {
    return <h1 className="text-bold text-3xl m-8 p-2">Check Your Internet Connection...</h1>
  }

  return resData.length === 0 ? <Shimmer /> : (
    <div className="hero">
      <div className="search-container p-1 flex justify-center">
        <div className="search p-2 m-3 border-2 rounded-full w-[40%] h-9"></div>
      </div>
      <div className="filter flex justify-around">
        <button className="p-1 bg-orange-400 border-black border-2 rounded-2xl" onClick={filterTopRated} >
          Top Rated Restaurant
        </button>
        <div>
          <input className="bg-slate-200 mx-6 px-3 rounded-md border-black border-2" type="text" name="search" value={seachFilter} onChange={(e) => setSeachFilter(e.target.value)}/>
          <button className="bg-red-600 text-white px-4 rounded-sm border-black border-2 font-bold" onClick={filteredData}>Search</button>
        </div>
      </div>
      <div className="restaurantCardContainer flex flex-wrap">
  {filterRes.length > 0 ? (
    filterRes.map((restaurant) => (
      <RestaurantCard key={restaurant.id} {...restaurant} />
    ))
  ) : (
    resData.map((restaurant) => (
      <RestaurantCard key={restaurant.id} {...restaurant} />
    ))
  )}
</div>

    </div>
  );
};

export default Hero;
