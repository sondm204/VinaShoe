import { Link } from "react-router-dom"
import Button from "../components/Button"

const Lookbook = () => {
  return (
    <>
      {/* Lookbook Header */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-light mb-4">Chiến dịch & Lookbook</h1>
          <p className="text-gray-600 max-w-3xl">
            Lookbook của chúng tôi giới thiệu những bộ sưu tập ảnh tinh tế, kể câu chuyện về sự thanh lịch và tiện dụng. Dù bạn đang tìm kiếm một đôi giày cổ điển, một đôi giày thời trang, hay một bộ sưu tập thanh nhã, hoàn hảo cho mỗi dịp đặc biệt.
          </p>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="mb-6">
                <img
                  src="https://lebrouges.in/cdn/shop/files/Onitsuka-Tiger-Mexico-66-Party-White-Blue-2700-3.webp?v=1717070581"
                  alt="Party specialist"
                  className="w-full h-96 object-cover rounded-lg"
                />
              </div>
              <div>
                <span className="text-accent text-sm font-medium">Party specialist</span>
                <h2 className="text-2xl font-light mt-2 mb-4">Đôi giày dành cho các bữa tiệc của bạn.</h2>
                <Button to="/shop">Mua sắm</Button>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="mb-6">
                <img
                  src="https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lugasphiy13m9e"
                  alt="Editor's pick"
                  className="w-full h-96 object-cover rounded-lg"
                />
              </div>
              <div>
                <span className="text-accent text-sm font-medium">Sport specialist</span>
                <h2 className="text-2xl font-light mt-2 mb-4">Đôi giày dành cho các hoạt động thể thao</h2>
                <Button to="/shop">Mua sắm</Button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="grid grid-cols-2 gap-4 mb-6">
                <img
                  src="https://images.asics.com/is/image/asics/1184A083_100_SR_RT_GLB-1?$product$"
                  alt="Clutch detail"
                  className="w-full h-48 object-cover rounded-lg"
                />
                <img
                  src="https://images.asics.com/is/image/asics/1184A083_601_SR_RT_GLB?$product$"
                  alt="Backpack"
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <div>
                <h2 className="text-2xl font-light mt-2 mb-4">Giày thời trang dành cho trẻ em</h2>
                <Button to="/shop">Đến cửa hàng</Button>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="mb-6">
                <span className="text-accent text-sm font-medium">Outdoor specialist</span>
                <img
                  src="https://i.ebayimg.com/images/g/E~YAAOSwOR1mL48d/s-l1200.jpg"
                  alt="Outdoor bags"
                  className="w-full h-96 object-cover rounded-lg mt-4"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Bags Section */}
      <section className="py-12 bg-accent text-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-light text-black">Giày mới cho mọi dịp lễ của bạn</h2>
            <Link to="/shop" className="text-white hover:underline">
              See all
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg overflow-hidden group">
              <div className="overflow-hidden">
                <img
                  src="https://tyhisneaker.com/wp-content/uploads/2024/08/giay-onitsuka-tiger-mexico-66-black-white-like-auth-5.png"
                  alt="Side bags"
                  className="w-full h-64 object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-4 text-gray-900">
                <h3 className="text-lg font-medium mb-1">Giày ngoài trời</h3>
                <p className="text-gray-600 text-sm">Hoàn hảo đi ngoài trời</p>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden group">
              <div className="overflow-hidden">
                <img
                  src="https://bizweb.dktcdn.net/100/410/787/products/300-jpeg.jpg?v=1741836677527"
                  alt="Cross-body bags"
                  className="w-full h-64 object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-4 text-gray-900">
                <h3 className="text-lg font-medium mb-1">Giày thể thao</h3>
                <p className="text-gray-600 text-sm">Đôi giày phù hợp cho các hoạt động thể thao</p>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden group">
              <div className="overflow-hidden">
                <img
                  src="https://giaygiare.vn/upload/images/onitsuka-tiger-mexico-66-bronze-green.jpg"
                  alt="Pouches & Clutches"
                  className="w-full h-64 object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-4 text-gray-900">
                <h3 className="text-lg font-medium mb-1">Giày unisex</h3>
                <p className="text-gray-600 text-sm">Dành cho mọi lứa tuổi</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Lookbook
