function Sidebar() {
  const categories = ['Electronics', 'Fashion', 'Mobiles', 'Shoes']

  return (
    <aside className="sidebar">
      <h2>Categories</h2>
      <ul>
        {categories.map((category) => (
          <li key={category}>{category}</li>
        ))}
      </ul>
    </aside>
  )
}

export default Sidebar
