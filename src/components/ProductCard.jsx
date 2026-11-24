function ProductCard({ name, price, image }) {
  return (
    <article className="product-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p className="price">${price}</p>
      <button type="button">Add to Cart</button>
    </article>
  )
}

export default ProductCard
