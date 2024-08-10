import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import { useEffect } from "react";
import { SWIGGY_API } from "../utils/constants";
import Shimmer from "./Shimmer";

const Body = () => {
  //State Variable
  let [listOfRestaurant, setListOfRestaurant] = useState([]);
  let [filterListOfRestaurant, setFilterListOfRestaurant] = useState([]);

  let [searchFilter, setSearchFilter] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_API);
    const json = await data.json();
    console.log(json);
    setListOfRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterListOfRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="top-rated">
        <input
          type="text"
          placeholder="Search Restaurants.."
          value={searchFilter}
          onChange={(e) => {
            setSearchFilter(e.target.value);
          }}
        />
        <button
          className="btn-search"
          onClick={() => {
            const filteredData = listOfRestaurant.filter((e) =>
              e.info.name.toLowerCase().includes(searchFilter.toLowerCase())
            );
            setFilterListOfRestaurant(filteredData);
          }}
        >
          Search
        </button>
        <button
          className="res-btn"
          onClick={() => {
            filteredList = listOfRestaurant.filter(
              (res) => res.info.avgRating > 4.4
            );
            setFilterListOfRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
        <button
          className="veg-btn"
          onClick={() => {
            vegList = listOfRestaurant.filter((res) => res.info.veg === true);
            setFilterListOfRestaurant(vegList);
          }}
        >
          Veg
        </button>
        <button
          className="non-veg-btn"
          onClick={() => {
            nonVegList = listOfRestaurant.filter(
              (res) => res.info.veg === undefined
            );
            setFilterListOfRestaurant(nonVegList);
          }}
        >
          Non-Veg
        </button>
      </div>
      <div className="res-container">
        {filterListOfRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
