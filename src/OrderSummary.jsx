import { useLocation } from "react-router-dom";
import Products from "./Products";

function OrderSummary() {
  const location = useLocation();
  const { cartItems } = location.state || { cartItems: [] };
  const total = cartItems.reduce(
    (acc, item) => acc + parseFloat(item.price),
    0
  );

  return (
    <div>
      <h1>Order Successful</h1>
      <h2>Order Summary</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index} className="ProductItem">
            <Products product={item} />
          </li>
        ))}
      </ul>
      <h2>Order Total: {total}</h2>
    </div>
  );
}

export default OrderSummary;
