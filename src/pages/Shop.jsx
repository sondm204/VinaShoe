"use client"

import { useState } from "react"
import { products } from "../data/products"
import ProductCard from "../components/ProductCard"
import { Link } from "react-router-dom"
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";


const Shop = () => {
  const [filters, setFilters] = useState({
    availability: "",
    price: "",
    color: "",
  })

  const [sortBy, setSortBy] = useState("default")

  const handleFilterChange = (e) => {
    const { name, value } = e.target
    setFilters((prev) => ({ ...prev, [name]: value }))
  }

  const handleSortChange = (e) => {
    setSortBy(e.target.value)
  }

  // Apply filters and sorting
  const filteredProducts = [...products]

  // Apply sorting
  if (sortBy === "price-low-high") {
    filteredProducts.sort((a, b) => a.price - b.price)
  } else if (sortBy === "price-high-low") {
    filteredProducts.sort((a, b) => b.price - a.price)
  } else if (sortBy === "rating") {
    filteredProducts.sort((a, b) => b.rating - a.rating)
  }

  return (
    <>
      {/* Hero Banner */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="bg-[#ebece3] px-20 shadow-sm relative overflow-hidden">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0 flex flex-col items-center">
                <h1 className="text-6xl font-light mb-4">Xây dựng phong cách sống của bạn.</h1>
                <p className="text-gray-600 mb-6 text-lg">Khám phá bộ sưu tập giày đa dạng của chúng tôi</p>
              </div>
              <div className="md:w-2/3">
                <img
                  src="/image/giay.png"
                  alt="Featured bag"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl mb-8">Sản phẩm</h2>

          {/* Filters */}
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="relative">
              <select
                name="availability"
                value={filters.availability}
                onChange={handleFilterChange}
                className="appearance-none bg-white border border-gray-300 rounded-md py-2 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
              >
                <option value="" hidden>Khả dụng</option>
                <option value="in-stock">Còn hàng</option>
                <option value="out-of-stock">Hết hàng</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <i className="fas fa-chevron-down text-xs"></i>
              </div>
            </div>

            <div className="relative">
              <select
                name="price"
                value={filters.price}
                onChange={handleFilterChange}
                className="appearance-none bg-white border border-gray-300 rounded-md py-2 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
              >
                <option value="" hidden>Giá</option>
                <option value="0-50">100.000đ - 200.000đ</option>
                <option value="50-100">200.000đ - 300.000đ</option>
                <option value="100-150">300.000đ - 400.000đ</option>
                <option value="150+">400.000đ</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <i className="fas fa-chevron-down text-xs"></i>
              </div>
            </div>

            <div className="relative">
              <select
                name="color"
                value={filters.color}
                onChange={handleFilterChange}
                className="appearance-none bg-white border border-gray-300 rounded-md py-2 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
              >
                <option value="" hidden>Màu</option>
                <option value="black">Đen</option>
                <option value="brown">Nâu</option>
                <option value="green">Xanh lá</option>
                <option value="red">Đỏ</option>
                <option value="blue">Xanh dương</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <i className="fas fa-chevron-down text-xs"></i>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center mb-6 border-t border-t-gray-300 pt-6">
            <p className="text-gray-600">
              Showing 1-{filteredProducts.length} of {filteredProducts.length} results
            </p>

            <div className="relative">
              <select
                value={sortBy}
                onChange={handleSortChange}
                className="appearance-none bg-white border border-gray-300 rounded-md py-2 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
              >
                <option value="default" hidden>Sắp xếp theo</option>
                <option value="rating">Đánh giá</option>
                <option value="latest">Mới</option>
                <option value="price-low-high">Giá: từ thấp đến cao</option>
                <option value="price-high-low">Giá: từ cao đến thấp</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <i className="fas fa-chevron-down text-xs"></i>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center">
            <nav className="inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
              <Link
                href="#"
                className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                <span className="sr-only">Previous</span>
                <IoIosArrowBack />
              </Link>
              <Link
                href="#"
                aria-current="page"
                className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-accent text-sm font-medium text-gray-700 hover:bg-accent/90"
              >
                1
              </Link>
              <Link
                href="#"
                className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                2
              </Link>
              <Link
                href="#"
                className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                <span className="sr-only">Next</span>
                <IoIosArrowForward />
              </Link>
            </nav>
          </div>
        </div>
      </section>
    </>
  )
}

export default Shop
