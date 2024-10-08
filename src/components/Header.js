import { useState, useContext } from "react";
import { HEADER_LOGO } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const data = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className="flex justify-between bg-yellow-100 shadow-lg sm:bg-green-100 lg:bg-pink-100">
      <div className="logo-container">
        <img className="w-24" src={HEADER_LOGO} alt="Food_Logo"></img>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">
            Online Status: {onlineStatus === true ? "✅" : "❌"}
          </li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4 font-bold">
            <Link to="/cart">Cart - ({cartItems.length})</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <button
            className="btn-login"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
          {/* <li className="px-4 font-bold">{data.loggedInUser}</li> */}
        </ul>
      </div>
    </div>
  );
};

export default Header;
