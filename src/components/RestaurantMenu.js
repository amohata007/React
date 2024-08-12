import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { RES_API } from "../utils/constants";
import Shimmer from "./Shimmer";

const RestuarantMenu = () => {
  const [resMenu, setResMenu] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(RES_API + resId);
    const json = await data.json();
    console.log(json?.data, "check");
    setResMenu(json?.data);
  };

  if (resMenu === null) {
    return <Shimmer />;
  }

  const { name, areaName, costForTwoMessage, avgRating, cuisines } =
    resMenu?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h2>{areaName}</h2>
      <h2>{costForTwoMessage}</h2>
      <h2>{avgRating}</h2>
      <h2>{cuisines.join(", ")}</h2>
      <h4>Menu - </h4>
      <ul>
        {itemCards.map((e) => (
          <li key={e.card.info.imageId}>{e.card.info.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default RestuarantMenu;
