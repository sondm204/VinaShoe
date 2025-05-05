import { Link } from "react-router-dom"
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";



const Footer = () => {
  return (
    <footer className="bg-[#eeefe6] pt-16 pb-8 font-sans">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-10 mb-12">
          <div className="col-span-1">
            <div className="border-b border-b-gray-300">
              <h3 className="text-xl mb-4 font-serif font-semibold">Thượng Phong</h3>
              <p className="text-gray-600 mb-4">
                Bộ sưu tập giày vượt thời gian của chúng tôi có thể sử dụng hàng ngày và thỉnh thoảng với giá cả phải chăng.
              </p>
            </div>

            <div className="mt-4 flex gap-20">
              <div>
                <h4 className="font-medium mb-2">Email</h4>
                <p className="text-gray-600 mb-1">Giaythuongphong@gmail.com</p>
                <p className="text-gray-600">0868255205</p>
              </div>
              <div>
                <h4 className="font-medium mb-4">Theo dõi</h4>
                <div className="flex space-x-4">
                  <Link href="#" className="hover:text-accent">
                    <FaFacebook size={20} className="hover:scale-110 transition duration-200 ease-in-out" />
                  </Link>
                  <Link href="#" className="hover:text-accent">
                    <FaInstagram size={20} className="hover:scale-110 transition duration-200 ease-in-out" />
                  </Link>
                  <Link href="#" className="hover:text-accent">
                    <FaTwitter size={20} className="hover:scale-110 transition duration-200 ease-in-out" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-1 grid grid-cols-3 gap-8 text-sm">
            <div className="col-span-1">
              <h4 className="font-medium mb-4 text-lg">Cửa hàng</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="#" className="text-black hover:text-accent hover:border-b hover:border-black pb-1">
                    Điều khoản
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-black hover:text-accent hover:border-b hover:border-black pb-1">
                    Liên hệ
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-black hover:text-accent hover:border-b hover:border-black pb-1">
                    Quà tặng
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-black hover:text-accent hover:border-b hover:border-black pb-1">
                    Khuyến mãi
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-black hover:text-accent hover:border-b hover:border-black pb-1">
                    Giờ mở cửa
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-black hover:text-accent hover:border-b hover:border-black pb-1">
                    Bảng kích thước
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-span-1">
              <h4 className="font-medium mb-4 text-lg">Liên kết</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="#" className="text-black hover:text-accent hover:border-b hover:border-black pb-1">
                    Thương hiệu
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-black hover:text-accent hover:border-b hover:border-black pb-1">
                    Nhân sự
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-black hover:text-accent hover:border-b hover:border-black pb-1">
                    Về chúng tôi
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-black hover:text-accent hover:border-b hover:border-black pb-1">
                    Chiến dịch
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-span-1">
              <h4 className="font-medium mb-4 text-lg">Địa chỉ</h4>
              <p className="text-black">79 Hồ Tùng Mậu, Cầu Giấy, Hà Nội</p>
            </div>
          </div>



        </div>

        <div className="border-t border-gray-200 pt-8">
          <p className="text-black text-center text-sm">
            Copyright © Agni© {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
