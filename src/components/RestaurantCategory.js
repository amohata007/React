import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  // const [showItems, setShowItem] = useState(false);
  // const handleClick = () => {
  //   // showItems === false ? setShowItem(true) : setShowItem(false);
  //   setShowItem(!showItems);
  // };
  //   console.log(data);
  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div className="mx-auto my-4 w-6/12 bg-gray-100 p-6 shadow-lg">
      <div
        className="flex justify-between cursor-pointer"
        onClick={handleClick}
      >
        <span className="font-bold">
          {data.title} ({data.itemCards.length})
        </span>
        <span>⬇️</span>
      </div>
      {showItems && <ItemList items={data.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
