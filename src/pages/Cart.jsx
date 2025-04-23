"use client"

import { Link } from "react-router-dom"
import { useCart } from "../context/CartContext"
import Button from "../components/Button"

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal } = useCart()

  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity < 1) return
    updateQuantity(productId, newQuantity)
  }

  const subtotal = getCartTotal()
  const shipping = 0
  const tax = subtotal * 0.08
  const total = subtotal + shipping + tax

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl font-light mb-6">Giỏ hàng của bạn đang trống</h1>
        <p className="text-gray-600 mb-8">Có vẻ như bạn chưa có sản phẩm nào trong giỏ hàng.</p>
        <Button to="/shop" size="lg">
          Quay lại mua hàng
        </Button>
      </div>
    )
  }

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-light mb-8">
          Giỏ hàng ({cartItems.length} sản phẩm)
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-6">
              {cartItems.map((item) => (
                <div key={item.id} className="p-6 border-b border-gray-200 last:border-b-0">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-24 md:h-24 mb-4 md:mb-0">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        className="w-full h-full object-cover rounded-md"
                      />
                    </div>

                    <div className="md:ml-6 flex-grow">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                        <div>
                          <h3 className="text-lg font-medium mb-1">{item.name}</h3>
                          <p className="text-gray-600 text-sm mb-2">
                            {item.colors && item.colors.length > 0 && `Màu: ${item.colors[0]}`}
                          </p>
                        </div>
                        <p className="text-lg font-medium">{(item.price * item.quantity).toLocaleString("de-DE")}đ</p>
                      </div>

                      <div className="flex justify-between items-center mt-4">
                        <div className="flex items-center">
                          <button
                            className="bg-gray-100 px-3 py-1 rounded-l-md hover:bg-gray-200"
                            onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                          >
                            -
                          </button>
                          <input
                            type="number"
                            value={item.quantity}
                            min="1"
                            className="w-12 text-center border-y border-gray-100 py-1 focus:outline-none"
                            readOnly
                          />
                          <button
                            className="bg-gray-100 px-3 py-1 rounded-r-md hover:bg-gray-200"
                            onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                          >
                            +
                          </button>
                        </div>

                        <button className="text-gray-500 hover:text-accent" onClick={() => removeFromCart(item.id)}>
                          <span className="text-sm">Loại bỏ sản phẩm</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Continue Shopping */}
            <div className="flex justify-between items-center">
              <Link to="/shop" className="text-accent hover:text-accent/80 flex items-center">
                <i className="fas fa-arrow-left mr-2"></i> Continue shopping
              </Link>

              <button className="text-gray-600 hover:text-accent flex items-center">
                <i className="fas fa-sync-alt mr-2"></i> Cập nhật giỏ hàng
              </button>
            </div>
          </div>

          {/* Order Summary */}
          <div>
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 className="text-xl font-medium mb-6">Tóm tắt giỏ hàng</h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Tổng giá</span>
                  <span className="font-medium">{subtotal.toLocaleString("de-DE")}đ</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-600">Phí vận chuyển</span>
                  <span className="font-medium">{shipping.toLocaleString("de-DE")}đ</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-600">Thuế</span>
                  <span className="font-medium">{tax.toLocaleString("de-DE")}đ</span>
                </div>

                <div className="border-t border-gray-200 pt-4 flex justify-between">
                  <span className="font-medium">Thành tiền</span>
                  <span className="font-medium text-xl">{total.toLocaleString("de-DE")}đ</span>
                </div>
              </div>

              <Button to="/checkout" fullWidth>
                Tiến hành thanh toán
              </Button>
            </div>

            {/* Coupon Code */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-medium mb-4">Áp dụng mã giảm giá</h3>

              <div className="flex">
                <input
                  type="text"
                  placeholder="Nhập mã giảm giá"
                  className="flex-grow border border-gray-300 rounded-l-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                />
                <button className="bg-accent hover:bg-accent/90 text-white py-2 px-4 rounded-r-md">Apply</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cart
