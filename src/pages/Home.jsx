import { Link } from "react-router-dom"
import Button from "../components/Button"
import ProductCard from "../components/ProductCard"
import { getFeaturedProducts } from "../data/products"
import { useState, useEffect } from "react"

const images = [
  "image/slide1.jfif",
  "image/slide2.jfif",
  "image/slide3.jfif",
  "image/slide4.jfif",
  "image/slide5.jfif",
];

const Home = () => {
  const featuredProducts = getFeaturedProducts()

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000); // 5s

    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative">
        <div className="relative w-full h-screen overflow-hidden">
          {images.map((img, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-700 ${index === current ? "opacity-100 z-0" : "opacity-0 z-[-1]"
                }`}
            >
              <img
                src={img}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
              {/* Overlay đen mờ */}
              <div className="absolute inset-0 bg-black opacity-30" />
            </div>
          ))}

          {/* Nút điều hướng */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-3xl z-20"
          >
            ‹
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-3xl z-20"
          >
            ›
          </button>
        </div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white font-sans">
          <div className="w-[50%] flex flex-col items-center">
            <h1 className="text-5xl md:text-6xl font-light mb-6">Our timeless shoe collections</h1>
            <p className="text-lg max-w-xl mb-10">
              Designed for the way you live your life. ThuongPhong are beautiful in their simplicity.
            </p>
            <Button to="/shop" size="lg" type="primary">
              Đến cửa hàng
            </Button>
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-2xl font-bold">Bộ sưu tập mới</h2>
            <Link to="/shop" className="text-accent hover:text-accent/80">
              Xem tất cả
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 md:px-16 bg-white border border-t-gray-200">
  <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
    {/* Tầm nhìn */}
    <div className="w-full overflow-hidden rounded-lg order-1 md:order-1">
      <img src="/image/tamnhin.jpg" alt="Tầm nhìn" className="w-full h-auto" />
    </div>
    <div className="text-center md:text-left flex flex-col justify-center order-2 md:order-2">
      <h2 className="text-4xl md:text-7xl font-bold pb-3">Tầm nhìn</h2>
      <p className="text-lg md:text-xl">"Trở thành thương hiệu giày Việt Nam hàng đầu, nổi bật với sản phẩm chất lượng cao và thiết kế tinh tế, vươn ra thế giới và khẳng định vị thế của giày Việt trên thị trường quốc tế. Chúng tôi không chỉ tạo ra những đôi giày, mà còn xây dựng một phong cách sống, một trải nghiệm đi đôi với sự tự hào về nguồn gốc Việt Nam, hòa quyện giữa truyền thống và hiện đại."</p>
    </div>

    {/* Sứ mệnh */}
    <div className="w-full overflow-hidden rounded-lg order-3 md:order-4">
      <img src="/image/sumenh.jpg" alt="Sứ mệnh" className="w-full h-auto" />
    </div>
    <div className="text-center md:text-left flex flex-col justify-center order-4 md:order-3">
      <h2 className="text-4xl md:text-7xl font-bold pb-3">Sứ mệnh</h2>
      <p className="text-lg md:text-xl">"Cung cấp cho khách hàng những đôi giày không chỉ đẹp, chất lượng mà còn thể hiện cá tính và phong cách riêng của họ. Chúng tôi cam kết tạo ra những sản phẩm bền bỉ, thoải mái và phù hợp với nhu cầu đa dạng của từng khách hàng, đồng thời nâng cao nhận thức về bảo vệ môi trường và phát triển bền vững trong mỗi công đoạn sản xuất."</p>
    </div>

    {/* Giá trị cốt lõi */}
    <div className="w-full overflow-hidden rounded-lg order-5 md:order-5">
      <img src="/image/giatri.jfif" alt="Giá trị cốt lõi" className="w-full h-auto" />
    </div>
    <div className="text-center md:text-left flex flex-col justify-center order-6 md:order-6 mt-10">
      <h2 className="text-4xl md:text-7xl font-bold pb-3">Giá trị cốt lõi</h2>
      <ul className="text-lg md:text-xl">
        <li>Chất lượng: Cam kết sản phẩm bền, đẹp và an toàn.</li>
        <li>Sáng tạo: Luôn đổi mới trong thiết kế.</li>
        <li>Trách nhiệm: Bảo vệ môi trường và cộng đồng.</li>
        <li>Khách hàng: Luôn lắng nghe và phục vụ tận tâm.</li>
        <li>Tự hào: Đưa bản sắc Việt vươn xa.</li>
      </ul>
    </div>
  </div>
</section>



      {/* Collections */}
      {/* <section className="py-16 px-6 md:px-16 bg-white border border-t-gray-200">
        <div className="flex flex-col-reverse lg:flex-row justify-between gap-12">

          <div className="gap-4 w-[50%] mt-20 relative">
            <div className="bg-red-500 w-full h-[500px]">
            </div>
            <div className="bg-green-500 w-[400px] h-[400px] absolute top-[200px] left-[400px]">
            </div>
          </div>

          <div className="w-[50%] text-center lg:text-left space-y-6">
            <div>
              <h2 className="text-4xl font-light leading-snug">
                Complete your<br />
                <span className="font-medium">dazzling look</span> with our<br />
                collections
              </h2>
              <Link
                className="inline-flex items-center gap-3 bg-[#df6724] hover:bg-black transition-all duration-300 text-white text-sm px-6 py-3 rounded-full"
              >
                Go to collections
                <span className="text-xl">&#8594;</span>
              </Link>
            </div>
            <div className="w-full flex justify-end">
              <img className="w-[400px]" src="https://demo.agnidesigns.com/bagberry/wp-content/uploads/2023/02/home-image-7.jpeg" alt="Bag" />
            </div>
          </div>
        </div>
      </section> */}

      {/* Featured Collections */}
      <section className="py-16 bg-white border border-t-gray-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-light text-center mb-12">Bộ sưu tập</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group">
              <div className="overflow-hidden mb-4">
                <img
                  src="https://img.lazcdn.com/g/p/5d9e2be4aff14aaa6b6f48d9ba88310e.jpg_360x360q75.jpg_.webp"
                  alt="Crossbody bag"
                  className="w-full h-80 object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <h3 className="text-xl font-medium mb-2">Giày thể thao</h3>
              <p className="text-gray-600 mb-4">Hoàn hảo cho việc sử dụng hàng ngày với phong cách và chức năng.</p>
              <Link to="/shop" className="text-accent hover:text-accent/80 flex items-center">
                Cửa hàng <i className="fas fa-arrow-right ml-2"></i>
              </Link>
            </div>

            <div className="group">
              <div className="overflow-hidden mb-4">
                <img
                  src="https://product.hstatic.net/200000858991/product/z5375972103525_ab6c7d260b90cad87a3c7077e7a70cc8_9f998090dab84fe88879a50929974cf8.jpg"
                  alt="Tote bag"
                  className="w-full h-80 object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <h3 className="text-xl font-medium mb-2">Giày thời trang</h3>
              <p className="text-gray-600 mb-4">Thoải mái và thanh lịch để làm việc và giải trí.</p>
              <Link to="/shop" className="text-accent hover:text-accent/80 flex items-center">
                Shop now <i className="fas fa-arrow-right ml-2"></i>
              </Link>
            </div>

            <div className="group">
              <div className="overflow-hidden mb-4">
                <img
                  src="https://capvirgo.com/wp-content/uploads/2020/05/e478b37e-1.jpg"
                  alt="Wallet"
                  className="w-full h-80 object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <h3 className="text-xl font-medium mb-2">Giày trẻ em</h3>
              <p className="text-gray-600 mb-4">Vừa vặn đôi chân các bạn nhỏ.</p>
              <Link to="/shop" className="text-accent hover:text-accent/80 flex items-center">
                Shop now <i className="fas fa-arrow-right ml-2"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* Why Choose Us */}
      <section className="py-16 bg-[#df6724] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-light mb-12">Tại sao bạn nên chọn GiayVina?</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              {/* <div className="flex justify-center mb-4">
                <i className="fas fa-medal text-4xl"></i>
              </div> */}
              <h3 className="text-4xl font-medium mb-3">20+</h3>
              <p className="text-white/80">
                Chúng tôi có hơn 20 chi nhánh cửa hàng trên toàn quốc.
              </p>
            </div>

            <div>
              {/* <div className="flex justify-center mb-4">
                <i className="fas fa-gem text-4xl"></i>
              </div> */}
              <h3 className="text-4xl font-medium mb-3">500+</h3>
              <p className="text-white/80">
                Số lượng đôi giày bán được trên trang chính chúng tôi vượt qua con số 500.
              </p>
            </div>

            <div>
              {/* <div className="flex justify-center mb-4">
                <i className="fas fa-star text-4xl"></i>
              </div> */}
              <h3 className="text-4xl font-medium mb-3">10+</h3>
              <p className="text-white/80">
                Chúng tôi có hơn 10 năm kinh nghiệm trong thị trường giày Việt Nam và quốc tế.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
