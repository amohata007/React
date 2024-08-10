import resObj from "../utils/testData";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

const Body = () => {
  //State Variable
  let [listOfRestaurant, setListOfRestaurant] = useState(resObj);
  let dupListOfResttaurant = resObj; //So what before filtering we have all data

  //Normal JS variable
  // let listOfRestaurant2 = [
  //   {
  //     info: {
  //       id: "175281",
  //       name: "Jalaram Locho & Khaman",
  //       cloudinaryImageId: "ilmplqyvasqq0igkmobz",
  //       costForTwo: "₹250 for two",
  //       cuisines: ["Gujarati", "Snacks", "Fast Food", "Street Food", "Indian"],
  //       avgRating: 4.4,
  //       veg: true,
  //       sla: {
  //         deliveryTime: 34,
  //       },
  //     },
  //   },
  //   {
  //     info: {
  //       id: "175282",
  //       name: "KFC",
  //       cloudinaryImageId: "ilmplqyvasqq0igkmobz",
  //       costForTwo: "₹250 for two",
  //       cuisines: ["Gujarati", "Snacks", "Fast Food", "Street Food", "Indian"],
  //       avgRating: 3.4,
  //       veg: true,
  //       sla: {
  //         deliveryTime: 44,
  //       },
  //     },
  //   },
  //   {
  //     info: {
  //       id: "175261",
  //       name: "Burger King",
  //       cloudinaryImageId: "ilmplqyvasqq0igkmobz",
  //       costForTwo: "₹250 for two",
  //       cuisines: ["Gujarati", "Snacks", "Fast Food", "Street Food", "Indian"],
  //       avgRating: 4.2,
  //       veg: true,
  //       sla: {
  //         deliveryTime: 24,
  //       },
  //     },
  //   },
  // ];
  return (
    <div className="body">
      <div className="top-rated">
        <button
          className="res-btn"
          onClick={() => {
            listOfRestaurant = dupListOfResttaurant;
            filteredList = listOfRestaurant.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
        <button
          className="veg-btn"
          onClick={() => {
            listOfRestaurant = dupListOfResttaurant;
            vegList = listOfRestaurant.filter((res) => res.info.veg === true);
            setListOfRestaurant(vegList);
          }}
        >
          Veg
        </button>
        <button
          className="non-veg-btn"
          onClick={() => {
            listOfRestaurant = dupListOfResttaurant;
            nonVegList = listOfRestaurant.filter(
              (res) => res.info.veg === false
            );
            setListOfRestaurant(nonVegList);
          }}
        >
          Non-Veg
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
