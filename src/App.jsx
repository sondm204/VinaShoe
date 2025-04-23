import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import Shop from "./pages/Shop"
import Lookbook from "./pages/Lookbook"
import ProductDetail from "./pages/ProductDetail"
import Cart from "./pages/Cart"
import Checkout from "./pages/Checkout"
import NotFound from "./pages/NotFound"
import { CartProvider } from "./context/CartContext"
import Blog from "./pages/Blog"
import BlogDetail from "./pages/BlogDetail"

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="shop" element={<Shop />} />
            <Route path="lookbook" element={<Lookbook />} />
            <Route path="product/:id" element={<ProductDetail />} />
            <Route path="blogs" element={<Blog />} />
            <Route path="blogs/:slug" element={<BlogDetail />} />
            <Route path="cart" element={<Cart />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </CartProvider>
  )
}

export default App
