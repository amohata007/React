import { CARD_LOGO } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props; // Destructuring..can also avoid and directly
  const { cloudinaryImageId, name, cuisines, avgRating, sla } = resData?.info; //do props.resData?.info
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={CARD_LOGO + cloudinaryImageId}
      ></img>
      <h3 className="resName">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} Stars</h4>
      <h4>{sla.deliveryTime} mins Estimated Time</h4>
    </div>
  );
};

export default RestaurantCard;
