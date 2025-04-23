"use client"

import { Link } from "react-router-dom"
import { useCart } from "../context/CartContext"

const ProductCard = ({ product, showAddToCart = true }) => {
  const { addToCart } = useCart()

  const handleAddToCart = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addToCart(product)
  }

  return (
    <div className="bg-white group rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <Link to={`/product/${product.id}`} className="block overflow-hidden relative">
        {product.isNew && (
          <span className="absolute z-50 top-2 right-2 bg-green-500 text-white text-xs py-1 px-2 rounded">New</span>
        )}
        <img
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          className="w-full h-64 object-contain group-hover:scale-105 transition duration-500"
        />
      </Link>
      <div className="p-4">
        <Link to={`/product/${product.id}`}>
          <h3 className="text-md font-medium mb-1">{product.name}</h3>
        </Link>
        <div className="flex text-yellow-400 mb-2">
          {[...Array(5)].map((_, i) => (
            <i
              key={i}
              className={`fas ${i < Math.floor(product.rating) ? "fa-star" : i < product.rating ? "fa-star-half-alt" : "far fa-star"}`}
            ></i>
          ))}
        </div>
        <div className="flex justify-between items-center">
          <p className="text-gray-900 font-medium">
            {product.onSale && (
              <span className="line-through text-gray-500 mr-2">{product.originalPrice.toLocaleString("de-DE")}đ</span>
            )}
            {product.price.toLocaleString("de-DE")}đ
          </p>
          {showAddToCart && (
            <button
              onClick={handleAddToCart}
              className="text-accent hover:text-accent/80"
              aria-label={`Add ${product.name} to cart`}
            >
              <i className="fas fa-shopping-cart hover:scale-110 transition duration-200 ease-in-out"></i>
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProductCard
