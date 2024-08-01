import Products from "./Products";

export default function Listing({ productsD, addToCart }) {
  return (
    <>
      <div className="ProductGrid">
        {productsD.map((x, index) => (
          <div key={index} className="ProductItem">
            <Products product={x} />
            <button className="ProductButton" onClick={() => addToCart(x)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
