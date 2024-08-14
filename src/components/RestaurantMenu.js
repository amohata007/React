import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestuarantMenu = () => {
  const { resId } = useParams();
  const resMenu = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(null);

  if (resMenu === null) {
    return <Shimmer />;
  }

  const { name, areaName, cuisines, costForTwoMessage } =
    resMenu?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  const itemCategory =
    resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (category) =>
        category.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  console.log(itemCategory);

  return (
    <div className="text-center m-6">
      <h1 className="font-bold text-2xl text-blue-500">{name}</h1>
      <h2 className="font-bold text-orange-400">
        {cuisines.join(" ,")} - {costForTwoMessage}
      </h2>
      {itemCategory.map((element, index) => (
        //Controlled Component
        <RestaurantCategory
          key={element?.card?.card.title}
          data={element?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestuarantMenu;
