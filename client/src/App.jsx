import React, { useEffect, useState } from 'react';
import ProductCard from './components/ProductCard.jsx';
import { fetchProducts } from './services/productService.js';

const sampleProducts = [
  {
    _id: 'sample-1',
    name: 'Wireless Keyboard',
    price: 1299,
    description: 'Compact keyboard for daily coding and office work.',
    category: 'Accessories',
    inStock: true
  },
  {
    _id: 'sample-2',
    name: 'USB-C Mouse',
    price: 699,
    description: 'Smooth, lightweight mouse with ergonomic design.',
    category: 'Accessories',
    inStock: true
  },
  {
    _id: 'sample-3',
    name: 'Laptop Stand',
    price: 999,
    description: 'Adjustable stand that keeps your desk setup comfortable.',
    category: 'Workspace',
    inStock: false
  }
];

function App() {
  const [products, setProducts] = useState([]);
  const [status, setStatus] = useState('loading');
  const [error, setError] = useState('');
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');

  useEffect(() => {
    async function loadProducts() {
      try {
        const data = await fetchProducts();
        setProducts(data.length > 0 ? data : sampleProducts);
        setStatus('success');
      } catch (err) {
        setProducts(sampleProducts);
        setError('Backend is not connected yet, so sample products are shown.');
        setStatus('success');
      }
    }

    loadProducts();
  }, []);

  const categories = ['All', ...new Set(products.map((product) => product.category))];
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === 'All' || product.category === category;

    return matchesSearch && matchesCategory;
  });
  const inStockCount = products.filter((product) => product.inStock).length;
  const outOfStockCount = products.length - inStockCount;

  return (
    <main className="app">
      <header className="topbar">
        <div>
          <strong>MERN Task 1</strong>
          <span>Products API + React Cards</span>
        </div>
        <a href="http://localhost:5000/api/products" target="_blank" rel="noreferrer">
          View API
        </a>
      </header>

      <section className="hero">
        <div>
          <p className="eyebrow">Maincrafts Technology Internship</p>
          <h1>Shop Product List</h1>
          <p className="intro">
            Products are coming from my Express and MongoDB backend. I kept the page simple so it is easy to check the API data.
          </p>
        </div>
        <div className="summary">
          <div>
            <span>Total</span>
            <strong>{products.length}</strong>
          </div>
          <div>
            <span>In stock</span>
            <strong>{inStockCount}</strong>
          </div>
          <div>
            <span>Out</span>
            <strong>{outOfStockCount}</strong>
          </div>
        </div>
      </section>

      {status === 'loading' && <p className="message">Loading products...</p>}
      {error && <p className="message warning">{error}</p>}

      <section className="toolbar">
        <input
          type="search"
          placeholder="Search product name"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
        <select value={category} onChange={(event) => setCategory(event.target.value)}>
          {categories.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </section>

      <section className="grid" aria-label="Products">
        {filteredProducts.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </section>

      {filteredProducts.length === 0 && (
        <p className="message">No products found for this search.</p>
      )}
    </main>
  );
}

export default App;
