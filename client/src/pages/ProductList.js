import React from 'react';
import './ProductList.scss';

function ProductList() {
  const products = [
    { id: 1, title: 'Product 1' },
    { id: 2, title: 'Product 2' },
    { id: 3, title: 'Product 3' },
    { id: 4, title: 'Product 4' },
    { id: 5, title: 'Product 5' },
    { id: 6, title: 'Product 6' },
    // Add more products as needed
  ];

  return (
    <div className="productList">
      <div className="container">
        <div className="title">Products</div>
        <div className="subtitle">Subtitle Here</div>
        <div className="cards">
          {products.map((product) => (
            <div className="card">
              <div className="card-title">{product.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductList;
