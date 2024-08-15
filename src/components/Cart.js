import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import ItemList from "./ItemList";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  const dispatch = useDispatch();
  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="w-6/12 m-auto p-4 m-4">
        <button
          className="p-2 m-2 bg-green-400 text-white rounded-lg"
          onClick={() => {
            dispatch(clearCart());
          }}
        >
          Clear Cart - ({cartItems.length})
        </button>
        {cartItems.length === 0 ? (
          "Add Itmes to your Cart"
        ) : (
          <ItemList items={cartItems} />
        )}
      </div>
    </div>
  );
};

export default Cart;
