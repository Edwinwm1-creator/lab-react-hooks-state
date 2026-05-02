import React from 'react'

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="card">
      <h3>{product.name}</h3>
      <p>Price: {product.price}</p>
      
      <button 
        data-testid={`product-${product.id}`} 
        onClick={() => onAddToCart(product.name)}
      >
        Add to Cart
      </button>
    </div>
  )
}

export default ProductCard
