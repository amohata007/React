import { CARD_LOGO } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props; // Destructuring..can also avoid and directly
  let { cloudinaryImageId, name, cuisines, avgRating, sla } = resData?.info; //do props.resData?.info
  if (cuisines.length > 3) {
    cuisines = cuisines.slice(0, 3);
  }
  return (
    <div className="m-4 p-4 w-64 rounded-lg bg-gray-100 hover:bg-gray-300 h-full text-center shadow-lg">
      <img
        className="w-52 rounded-lg h-48"
        alt="res-logo"
        src={CARD_LOGO + cloudinaryImageId}
      ></img>
      <h3 className="font-bold py-2 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} Stars ⭐</h4>
      <h4>{sla.deliveryTime} mins Estimated Time</h4>
    </div>
  );
};

export default RestaurantCard;
