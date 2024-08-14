import { MENU_LOGO } from "../utils/constants";

const ItemList = ({ items }) => {
  console.log("item", items);
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-300 border-b-2 text-left flex justify-between"
        >
          <div className="w-10/12">
            <div className="py-2 font-bold">
              <span className="">{item.card.info.name}</span>
              <span> - रु{item.card.info.price / 100}</span>
            </div>
            <p className="text-sm">{item.card.info.description}</p>
          </div>
          <div className="w-2/12">
            <div className="absolute">
              <button className="p-2 shadow-lg bg-gray-500 rounded-lg hover:bg-gray-700 text-white font-bold">
                Add+
              </button>
            </div>
            <img src={MENU_LOGO + item.card.info.imageId}></img>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
