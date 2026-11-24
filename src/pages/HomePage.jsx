import ProductCard from '../components/ProductCard'
import products from '../data/products'

function HomePage() {
  return (
    <section>
      <div className="welcome">
        <h1>Welcome to MyShop</h1>
        <p>Discover quality products at great prices.</p>
      </div>
      <h2 className="section-title">Featured Products</h2>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  )
}

export default HomePage
