"use client"

import React from "react"

import { useState } from "react"
import { useParams, Link } from "react-router-dom"
import { getProductById, getRelatedProducts } from "../data/products"
import { useCart } from "../context/CartContext"
import Button from "../components/Button"
import ProductCard from "../components/ProductCard"

const ProductDetail = () => {
  const { id } = useParams()
  const product = getProductById(id)
  const relatedProducts = getRelatedProducts(id)
  const { addToCart } = useCart()

  const [quantity, setQuantity] = useState(1)
  const [activeTab, setActiveTab] = useState("description")
  const [selectedImage, setSelectedImage] = useState(0)

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h2 className="text-2xl font-medium mb-4">Product not found</h2>
        <p className="mb-6">The product you are looking for does not exist.</p>
        <Button to="/shop">Return to shop</Button>
      </div>
    )
  }

  const handleQuantityChange = (value) => {
    const newQuantity = quantity + value
    if (newQuantity > 0) {
      setQuantity(newQuantity)
    }
  }

  const handleAddToCart = () => {
    addToCart(product, quantity)
  }

  return (
    <>
      {/* Product Detail */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* Product Images */}
            <div className="md:col-span-3">
              <div className="gap-4">
                <div className="bg-white p-4 rounded-lg mb-4 w-full h-[500px]">
                  <img
                    src={product.images[selectedImage] || "/placeholder.svg"}
                    alt={product.name}
                    className="object-contain w-full h-full"
                  />
                </div>

                <div className="flex gap-2 overflow-x-auto">
                  {product.images.map((image, index) => (
                    <div
                      key={index}
                      className={`bg-white w-[150px] h-[150px] p-1 rounded-lg cursor-pointer ${selectedImage === index ? "border border-accent shadow-md" : ""}`}
                      onClick={() => setSelectedImage(index)}
                    >
                      <img
                        src={image || "/placeholder.svg"}
                        alt={`${product.name} view ${index + 1}`}
                        className="object-contain w-full h-full"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div className="md:col-span-2">
              <h1 className="text-3xl font-medium mb-2">{product.name}</h1>

              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400 mr-2">
                  {[...Array(5)].map((_, i) => (
                    <i
                      key={i}
                      className={`fas ${i < Math.floor(product.rating) ? "fa-star" : i < product.rating ? "fa-star-half-alt" : "far fa-star"}`}
                    ></i>
                  ))}
                </div>
                <a href="#reviews" className="text-gray-600 text-sm">
                  ({product.reviews} đánh giá)
                </a>
              </div>

              <p className="text-2xl font-medium text-gray-900 mb-6">
                {product.onSale && (
                  <span className="line-through text-gray-500 mr-2">{product.originalPrice.toLocaleString("de-DE")}đ</span>
                )}
                {product.price.toLocaleString("de-DE")}đ
              </p>

              <div className="bg-gray-100 p-4 rounded-lg mb-6">
                <p className="text-gray-700">{product.description}</p>
              </div>

              <div className="mb-6">
                <label htmlFor="quantity" className="block text-gray-700 font-medium mb-2">
                  Số lượng
                </label>
                <div className="flex items-center">
                  <button
                    className="bg-gray-200 px-3 py-2 rounded-l-md hover:bg-gray-300"
                    onClick={() => handleQuantityChange(-1)}
                  >
                    -
                  </button>
                  <input
                    type="number"
                    id="quantity"
                    value={quantity}
                    min="1"
                    className="w-16 text-center border-y border-gray-200 py-2 focus:outline-none"
                    readOnly
                  />
                  <button
                    className="bg-gray-200 px-3 py-2 rounded-r-md hover:bg-gray-300"
                    onClick={() => handleQuantityChange(1)}
                  >
                    +
                  </button>
                </div>
              </div>

              <Button onClick={handleAddToCart} fullWidth className="mb-4">
                <i className="fas fa-shopping-cart mr-2"></i> Add to cart
              </Button>

              <div className="border-t border-gray-200 pt-6 mt-6">
                <div className="flex items-center mb-2">
                  <span className="font-medium w-24">Mã:</span>
                  <span className="text-gray-600">{product.sku}</span>
                </div>
                <div className="flex items-center mb-2">
                  <span className="font-medium w-24">Loại:</span>
                  <Link to={`/shop?category=${product.category}`} className="text-accent hover:underline">
                    {product.category}
                  </Link>
                </div>
                <div className="flex items-center">
                  <span className="font-medium w-24">Thẻ:</span>
                  <div className="flex flex-wrap gap-2">
                    {product.tags.map((tag, index) => (
                      <React.Fragment key={tag}>
                        <Link to={`/shop?tag=${tag}`} className="text-accent hover:underline">
                          {tag}
                        </Link>
                        {index < product.tags.length - 1 && <span>,</span>}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Tabs */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="border-b border-gray-200 mb-8">
            <div className="flex flex-wrap -mb-px">
              <button
                className={`inline-block py-4 px-6 border-b-2 ${activeTab === "description" ? "border-accent text-accent" : "border-transparent hover:text-gray-600"} font-medium`}
                onClick={() => setActiveTab("description")}
              >
                Mô tả
              </button>
              <button
                className={`inline-block py-4 px-6 border-b-2 ${activeTab === "reviews" ? "border-accent text-accent" : "border-transparent hover:text-gray-600"} font-medium`}
                onClick={() => setActiveTab("reviews")}
                id="reviews"
              >
                Đánh giá ({product.reviews})
              </button>
            </div>
          </div>

          <div className="prose max-w-none">
            {activeTab === "description" ? (
              <>
                <h2 className="text-2xl font-light mb-4">Description</h2>
                <p className="mb-4">
                  The {product.name} is a testament to our commitment to quality and style. Crafted from premium
                  leather, this {product.category.toLowerCase()} combines functionality with elegant design.
                </p>
                <p className="mb-4">Features:</p>
                <ul className="list-disc pl-6 mb-6">
                  <li>Premium full-grain leather</li>
                  <li>Secure closure</li>
                  <li>Interior card slots and zippered pocket</li>
                  <li>Detachable strap</li>
                  <li>Custom Bagberry hardware</li>
                </ul>
                <p>Dimensions: 8" x 5" x 2"</p>
              </>
            ) : (
              <>
                <h2 className="text-2xl font-light mb-4">Customer Reviews</h2>
                <div className="mb-8">
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400 mr-2">
                      {[...Array(5)].map((_, i) => (
                        <i
                          key={i}
                          className={`fas ${i < Math.floor(product.rating) ? "fa-star" : i < product.rating ? "fa-star-half-alt" : "far fa-star"}`}
                        ></i>
                      ))}
                    </div>
                    <span className="text-gray-600">Based on {product.reviews} reviews</span>
                  </div>

                  <div className="border-t border-gray-200 pt-6">
                    <h3 className="text-lg font-medium mb-2">Add a review</h3>
                    <p className="text-gray-600 mb-4">
                      Your email address will not be published. Required fields are marked *
                    </p>

                    <form>
                      <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Your rating *</label>
                        <div className="flex text-gray-400">
                          {[...Array(5)].map((_, i) => (
                            <button key={i} type="button" className="text-2xl mr-1 focus:outline-none">
                              <i className="far fa-star"></i>
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="mb-4">
                        <label htmlFor="review" className="block text-gray-700 mb-2">
                          Your review *
                        </label>
                        <textarea
                          id="review"
                          rows="4"
                          className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                        ></textarea>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <label htmlFor="name" className="block text-gray-700 mb-2">
                            Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                          />
                        </div>

                        <div>
                          <label htmlFor="email" className="block text-gray-700 mb-2">
                            Email *
                          </label>
                          <input
                            type="email"
                            id="email"
                            className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                          />
                        </div>
                      </div>

                      <Button type="submit">Submit Review</Button>
                    </form>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-light mb-8">Sản phẩm liên quan</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default ProductDetail
