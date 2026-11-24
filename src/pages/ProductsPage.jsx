import ProductCard from '../components/ProductCard'
import products from '../data/products'

function ProductsPage() {
  return (
    <section>
      <h1>Our Products</h1>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  )
}

export default ProductsPage
