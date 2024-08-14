import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import { useEffect } from "react";
import { SWIGGY_API } from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

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

  const checkOnline = useOnlineStatus();

  if (checkOnline === false) {
    return (
      <h1>
        Looks like you don't have active Internet Connection. Please Check.
      </h1>
    );
  }

  return listOfRestaurant?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="mx-2 px-2 my-1 py-1">
        <input
          type="text"
          placeholder="Search Restaurants.."
          className="border border-solid border-black px-2 m-2"
          value={searchFilter}
          onChange={(e) => {
            setSearchFilter(e.target.value);
          }}
        />
        <button
          className="mx-2  bg-gray-100 rounded-lg"
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
          className="mx-2 bg-blue-100"
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
          className="mx-2 bg-green-100 px-2 mx-2"
          onClick={() => {
            vegList = listOfRestaurant.filter((res) => res.info.veg === true);
            setFilterListOfRestaurant(vegList);
          }}
        >
          Veg
        </button>
        <button
          className="mx-2 bg-red-100 px-2 mx-2"
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
      <div className="flex flex-wrap space-y-4">
        {filterListOfRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
