"use client"

import { Link, useLocation } from "react-router-dom"
import { useCart } from "../context/CartContext"
import { useState } from "react"
import { CiSearch, CiUser } from "react-icons/ci";
import { FiShoppingBag } from "react-icons/fi";


const Header = () => {
  const location = useLocation()
  const { cartItems } = useCart()
  const [searchQuery, setSearchQuery] = useState("")

  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0)

  const handleSearch = (e) => {
    e.preventDefault()
    // Implement search functionality
    console.log("Searching for:", searchQuery)
  }

  return (
    <header className={`${location.pathname === "/" ? "bg-black/15  -mb-[74px] text-white" : "bg-white"} relative  bg-transparent top-0 left-0 w-full z-50 py-4 px-6 border-b border-gray-200`}>
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-serif">
          Giayvina.
        </Link>

        <nav className="hidden md:flex space-x-6 text-sm font-sans">
          <Link to="/" className="hover:underline">
            Trang chủ
          </Link>
          <Link to="/shop" className="hover:underline">
            Cửa hàng
          </Link>
          <Link to="/lookbook" className="hover:underline">
            Lookbook
          </Link>
          <Link to="/blogs" className="hover:underline">
            Blog
          </Link>
        </nav>

        <div className="flex items-center space-x-4 font-sans">
          <div className="relative hidden md:block">
            <form onSubmit={handleSearch}>
              <input
                type="text"
                placeholder="Tìm sản phẩm..."
                className={`${location.pathname === "/" ? "bg-transparent placeholder:text-white" : "bg-gray-100"}  rounded-full py-2 px-4 w-64 focus:outline-none border border-white text-white placeholder:text-xs`}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="submit" className="absolute right-3 top-2.5 text-gray-500">
                <CiSearch size={20} className={`${location.pathname === "/" ? "text-white" : ""} font-bold`} />
              </button>
            </form>
          </div>

          <Link to="/account" className="text-gray-800 hover:text-primary">
            <CiUser size={20} className={`${location.pathname === "/" ? "text-white" : ""} font-bold`} />

          </Link>

          <Link
            to="/cart"
            className={`${location.pathname === "/cart" ? "text-primary" : "text-gray-800 hover:text-primary"} relative`}
          >
            <FiShoppingBag size={20} className={`${location.pathname === "/" ? "text-white" : ""} font-bold`} />
            {cartItemCount > 0 && (
              <span className="absolute -top-3 -right-3 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {cartItemCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
