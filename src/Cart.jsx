import Products from "./Products";

export default function Cart({ items, remove }) {
  const total = items.reduce((acc, item) => acc + parseFloat(item.price), 0);

  return (
    <>
      <div className="Cart">
        <h2>Shopping Cart</h2>

        <div> cart total {total}</div>

        {items.length > 0 ? (
          items.map((item, index) => (
            <div key={index} className="ProductItem">
              <Products product={item} />
              <button onClick={() => remove(item)}>remove </button>
            </div>
          ))
        ) : (
          <p>No items in cart</p>
        )}
      </div>
    </>
  );
}
