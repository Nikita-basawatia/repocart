export default function Products({ product }) {
  return (
    <div className="Productdiv">
      <img className="ProductImage" src={product?.image} />

      <div className="ProductDetails">
        <h2>{product?.name || "No name available"}</h2>

        <h2>{product?.price || "No name available"}</h2>
        <h2>{product?.storage || ""}</h2>
      </div>
    </div>
  );
}
