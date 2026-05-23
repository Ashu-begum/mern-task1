import React from 'react';

function ProductCard({ product }) {
  return (
    <article className="product-card">
      <div className="card-header">
        <span className="category">{product.category}</span>
        <span className={product.inStock ? 'stock in' : 'stock out'}>
          {product.inStock ? 'In stock' : 'Out of stock'}
        </span>
      </div>

      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <div className="card-footer">
        <strong className="price">Rs. {product.price}</strong>
        <small>Product ID: {product._id.slice(-5)}</small>
      </div>
    </article>
  );
}

export default ProductCard;
