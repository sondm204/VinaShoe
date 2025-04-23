"use client"

import { useState } from "react"
import { useCart } from "../context/CartContext"
import Button from "../components/Button"

const Checkout = () => {
  const { cartItems, getCartTotal, clearCart } = useCart()
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    country: "United States",
    address: "",
    apartment: "",
    city: "",
    state: "California",
    zip: "",
    phone: "",
    email: "",
    createAccount: false,
    notes: "",
    paymentMethod: "bank",
    terms: false,
  })

  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))

    // Clear error when field is updated
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  const validateForm = () => {
    const newErrors = {}

    // Required fields
    const requiredFields = ["firstName", "lastName", "country", "address", "city", "state", "zip", "phone", "email"]
    requiredFields.forEach((field) => {
      if (!formData[field]) {
        newErrors[field] = "This field is required"
      }
    })

    // Email validation
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    // Terms agreement
    if (!formData.terms) {
      newErrors.terms = "You must agree to the terms and conditions"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (validateForm()) {
      // Process the order
      console.log("Order submitted:", { formData, items: cartItems })

      // Clear cart and redirect to success page
      clearCart()
      // In a real app, you would redirect to a success page
      alert("Order placed successfully!")
    }
  }

  const subtotal = getCartTotal()
  const shipping = 0
  const tax = subtotal * 0.08
  const total = subtotal + shipping + tax

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl font-light mb-6">Your cart is empty</h1>
        <p className="text-gray-600 mb-8">You need to add items to your cart before checking out.</p>
        <Button to="/shop" size="lg">
          Continue shopping
        </Button>
      </div>
    )
  }

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-light mb-8">Thanh toán</h1>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Billing Details */}
            <div>
              <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                <h2 className="text-xl font-medium mb-6">Hóa đơn chi tiết</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="firstName" className="block text-gray-700 mb-2">
                      Họ *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className={`w-full border ${errors.firstName ? "border-red-500" : "border-gray-300"} rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent`}
                    />
                    {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
                  </div>

                  <div>
                    <label htmlFor="lastName" className="block text-gray-700 mb-2">
                      Tên *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className={`w-full border ${errors.lastName ? "border-red-500" : "border-gray-300"} rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent`}
                    />
                    {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
                  </div>
                </div>

                <div className="mb-4">
                  <label htmlFor="company" className="block text-gray-700 mb-2">
                    Tên công ty (tùy chọn)
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="country" className="block text-gray-700 mb-2">
                    Quốc gia *
                  </label>
                  <select
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className={`w-full border ${errors.country ? "border-red-500" : "border-gray-300"} rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent`}
                  >
                    <option value="United States">Vietnam</option>
                    <option value="Canada">Canada</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="Australia">Australia</option>
                  </select>
                  {errors.country && <p className="text-red-500 text-sm mt-1">{errors.country}</p>}
                </div>

                <div className="mb-4">
                  <label htmlFor="address" className="block text-gray-700 mb-2">
                    Địa chỉ *
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Số nhà, tên đường"
                    className={`w-full border ${errors.address ? "border-red-500" : "border-gray-300"} rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent mb-2`}
                  />
                  {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}

                  <input
                    type="text"
                    name="apartment"
                    value={formData.apartment}
                    onChange={handleChange}
                    placeholder="Tên tòa nhà. (tùy chọn)"
                    className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="city" className="block text-gray-700 mb-2">
                    Thành phố *
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className={`w-full border ${errors.city ? "border-red-500" : "border-gray-300"} rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent`}
                  />
                  {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
                </div>

                <div className="mb-4">
                  <label htmlFor="state" className="block text-gray-700 mb-2">
                    Thành phố *
                  </label>
                  <select
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    className={`w-full border ${errors.state ? "border-red-500" : "border-gray-300"} rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent`}
                  >
                    <option value="California">Hà Nội</option>
                    <option value="New York">Hồ Chí Minh</option>
                    <option value="Texas">Đà Nẵng</option>
                    <option value="Florida">Hải Phòng</option>
                  </select>
                  {errors.state && <p className="text-red-500 text-sm mt-1">{errors.state}</p>}
                </div>

                <div className="mb-4">
                  <label htmlFor="phone" className="block text-gray-700 mb-2">
                    Số điện thoại *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full border ${errors.phone ? "border-red-500" : "border-gray-300"} rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent`}
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>

                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full border ${errors.email ? "border-red-500" : "border-gray-300"} rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent`}
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                <div className="mb-4">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="createAccount"
                      name="createAccount"
                      checked={formData.createAccount}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    <label htmlFor="createAccount" className="text-gray-700">
                      Tạo tài khoản mới?
                    </label>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-medium mb-4">Thông tin bổ sung</h3>

                <div>
                  <label htmlFor="notes" className="block text-gray-700 mb-2">
                    Ghi chú đơn hàng (Tùy chọn)
                  </label>
                  <textarea
                    id="notes"
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    rows="4"
                    placeholder="Ghi chú cho đơn vị vận chuyển"
                    className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                  ></textarea>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div>
              <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                <h2 className="text-xl font-medium mb-6">Đơn hàng của bạn</h2>

                <div className="border-b border-gray-200 pb-4 mb-4">
                  <div className="flex justify-between font-medium mb-4">
                    <span>Sản phẩm</span>
                    <span>Giá tiền</span>
                  </div>

                  <div className="space-y-2 mb-4">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex justify-between">
                        <span className="text-gray-600">
                          {item.name} × {item.quantity}
                        </span>
                        <span>{(item.price * item.quantity).toLocaleString("de-DE")}đ</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-between">
                    <span className="font-medium">Tổng giá</span>
                    <span>{subtotal.toLocaleString("de-DE")}đ</span>
                  </div>
                </div>

                <div className="border-b border-gray-200 pb-4 mb-4">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">Phí vận chuyển</span>
                    <span>{shipping.toLocaleString("de-DE")}đ</span>
                  </div>
                  <p className="text-gray-600 text-sm">Miễn phí vận chuyển</p>
                </div>

                <div className="border-b border-gray-200 pb-4 mb-4">
                  <div className="flex justify-between">
                    <span className="font-medium">Thuế</span>
                    <span>{tax.toLocaleString("de-DE")}đ</span>
                  </div>
                </div>

                <div className="flex justify-between mb-6">
                  <span className="font-medium">Thành tiền</span>
                  <span className="font-medium text-xl">{total.toLocaleString("de-DE")}đ</span>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="border border-gray-200 rounded-md p-4">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="payment_bank"
                        name="paymentMethod"
                        value="bank"
                        checked={formData.paymentMethod === "bank"}
                        onChange={handleChange}
                        className="mr-2"
                      />
                      <label htmlFor="payment_bank" className="font-medium">
                        Chuyển khoản trực tiếp
                      </label>
                    </div>
                    <p className="text-gray-600 text-sm mt-2 pl-5">
                      Thanh toán trực tiếp vào tài khoản ngân hàng của chúng tôi. Vui lòng sử dụng Mã đơn hàng của bạn làm tham chiếu thanh toán.
                    </p>
                  </div>

                  <div className="border border-gray-200 rounded-md p-4">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="payment_check"
                        name="paymentMethod"
                        value="check"
                        checked={formData.paymentMethod === "check"}
                        onChange={handleChange}
                        className="mr-2"
                      />
                      <label htmlFor="payment_check" className="font-medium">
                        Thanh toán khi nhận hàng
                      </label>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="terms"
                      name="terms"
                      checked={formData.terms}
                      onChange={handleChange}
                      className={`mr-2 ${errors.terms ? "border-red-500" : ""}`}
                    />
                    <label htmlFor="terms" className={`text-gray-700 ${errors.terms ? "text-red-500" : ""}`}>
                      Tôi đã đọc và đồng ý với các {" "}
                      <a href="#" className="text-blue-500 hover:underline">
                        điều khoản và điều kiện
                      </a>{" "}
                      của trang web *
                    </label>
                  </div>
                  {errors.terms && <p className="text-red-500 text-sm mt-1">{errors.terms}</p>}
                </div>

                <Button type="submit" fullWidth>
                  Thanh toán
                </Button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Checkout
