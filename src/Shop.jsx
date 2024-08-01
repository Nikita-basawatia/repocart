import Products from "./Products";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Cart from "./Cart";
import Listing from "./Listing";
import { useState } from "react";

const productsD = [
  {
    name: "Iphone 11 Pro (Silver)",
    price: "999",
    storage: "64gb",
    image:
      "https://images.macrumors.com/t/t8mQpgi4RXiEEcyl2DXUbY8bzMw=/400x0/article-new/2017/09/iphonexdesign-800x669.jpg?lossy",
  },
  {
    name: "Iphone 11 Pro (Grey)",
    price: "1199",
    storage: "128gb",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo4yKD_E4wrvvmPdcaSeltSnalPXIpofLEqU4uVHDqNDHdmTqBTrpUNlK3ZA&s",
  },
  {
    name: "Iphone 11 Pro (Gold)",
    price: "1399",
    storage: "256gb",
    image:
      "data:image/jpeg;base64,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",
  },
  {
    name: "Iphone 11 Pro (Midnight Green)",
    price: "1599",
    storage: "512gb",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReUDXNLymNopvuN_5CTtI3TijRJVVPEO3GqCFsIELiJNcedMjbQRX86H8f7w&s",
  },
];

export default function Shop() {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
    const cartItemsString = cartItems.map(
      (item) => `${item.name} (${item.price})`
    );
  };

  const remove = (item) => {
    const updatedCartItems = cartItems.filter((cartItem) => cartItem !== item);
    setCartItems(updatedCartItems);
  };

  const placeOrder = () => {
    navigate("/order-summary", { state: { cartItems } });
  };
  return (
    <>
      <div className="ShopContainer">
        <Listing productsD={productsD} addToCart={addToCart} />
        <Cart items={cartItems} remove={remove} />
      </div>
      <div className="OrderButtonContainer">
        <button
          className="OrderButton"
          onClick={placeOrder}
          disabled={cartItems.length === 0}
        >
          Order
        </button>
      </div>
    </>
  );
}
