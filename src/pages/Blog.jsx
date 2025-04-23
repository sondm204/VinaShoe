import { Link } from "react-router-dom"

// Mock blog data
const blogPosts = [
    {
        id: 1,
        title: "Giày Thượng Phong - Biểu tượng bền bỉ và tự hào Việt",
        slug: "giay-thuong-phong-bieu-tuong-ben-bi-va-tu-hao-viet",
        excerpt: "Discover how our premium handbags can transform your everyday outfits into fashion statements.",
        date: "25/04/2025",
        image:
            "https://lh3.googleusercontent.com/iHuOUWDxwwchgBNE5f1zxjuIsTtn-83MqgwUTEWvK46IIBAj0RcBBJXomI6ekOPRDj-bdMBZ9B0NqnTMtydz5OrC4GtD9qSYf4U0gaq1uAnUWsPAZO83nKkAICCDXzWJug=w1280",
        author: "Bagberry Team",
    },
    {
        id: 2,
        title: "Dẫn đầu Xu Hướng Thời Trang 2025 Cùng Giày Thượng Phong",
        slug: "dan-dau-xu-huong-thoi-trang-2025-cung-giay-thuong-phong",
        excerpt: "Explore our latest designer handbag collection and find the perfect addition to your wardrobe.",
        date: "March 1, 2023",
        image:
            "https://lh4.googleusercontent.com/M8T7L9wUY6Y53nCS6p1K3R2--WtjJ93QpXGosmxOGBf2ybTig_PHD2jmnU0eehAjxXorSspAYZPEIDQ5zsieXX10lnXnvN97KlvxQ_MQAXfK8oxxcAPuRdPUk_10OVJEZQ=w1280",
        author: "Bagberry Team",
    },
    {
        id: 3,
        title: "\"Bước chân Thượng Phong\" - Sáng tạo phong cách của bạn",
        slug: "buoc-chan-thuong-phong-sang-tao-phong-cach-cua-ban",
        excerpt: "Learn why our handbags combine style with practicality to become essential accessories for modern life.",
        date: "March 1, 2023",
        image:
            "https://myluxurybargain.com/wp-content/uploads/2024/09/Luxury-Handbags-to-Elevate-Your-Casual-Outfits.jpg",
        author: "Bagberry Team",
    },
    {
        id: 4,
        title: "Chia Sẻ Trải Nghiệm Giày Thượng Phong: Cùng Lan Tỏa Phong Cách",
        slug: "chia-se-trai-nghiem-giay-thuong-phong-cung-lan-toa-phong-cach",
        excerpt: "With so many styles, colors, and designs to choose from, your perfect handbag is waiting for you.",
        date: "March 1, 2023",
        image:
            "https://myluxurybargain.com/wp-content/uploads/2024/09/Luxury-Handbags-to-Elevate-Your-Casual-Outfits.jpg",
        author: "Bagberry Team",
    },
    {
        id: 5,
        title: "Giày Thượng Phong: Lựa Chọn Hoàn Hảo Cho Phong Cách ",
        slug: "giay-thuong-phong-lua-chon-hoan-hao-cho-phong-cach",
        excerpt: "Discover why investing in a quality handbag is not just a purchase, but a long-term investment.",
        date: "March 1, 2023",
        image:
            "https://myluxurybargain.com/wp-content/uploads/2024/09/Luxury-Handbags-to-Elevate-Your-Casual-Outfits.jpg",
        author: "Bagberry Team",
    },
]

export default function Blog() {
    return (
        <main>
            {/* Blog Header */}
            <section className="bg-[#f8f0e5] py-16">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl font-light mb-4">Blog của chúng tôi</h1>
                    <p className="text-gray-600 max-w-2xl">
                    húng tôi mong muốn cung cấp cho bạn những suy nghĩ và thông tin từ biên tập viên.
                    </p>
                </div>
            </section>

            {/* Blog Posts Grid */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {blogPosts.map((post) => (
                            <article key={post.id} className="border border-gray-200 rounded-lg mb-8">
                                <Link to={`/blogs/${post.slug}`} className="block mb-4">
                                    <div className="relative overflow-hidden">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            fill
                                            className="object-cover hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                </Link>
                                <div className="p-4">
                                    <p className="text-gray-500 text-sm mb-2">{post.date}</p>
                                    <h2 className="text-xl font-medium mb-3">
                                        <Link to={`/blogs/${post.slug}`} className="hover:text-[#e67e22]">
                                            {post.title}
                                        </Link>
                                    </h2>
                                    <Link to={`/blogs/${post.slug}`} className="text-black underline hover:text-[#e67e22]">
                                        Continue reading
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>

                    {/* Pagination */}
                    <div className="flex justify-center mt-12">
                        <nav className="inline-flex" aria-label="Pagination">
                            <span className="px-3 py-2 rounded-full bg-[#e67e22] text-white">1</span>
                            <Link to="/blogs/page/2" className="px-3 py-2 text-gray-700 hover:text-[#e67e22]">
                                2
                            </Link>
                            <Link to="/blogs/page/2" className="px-3 py-2 text-gray-700 hover:text-[#e67e22]">
                                Next Page
                            </Link>
                        </nav>
                    </div>
                </div>
            </section>
        </main>
    )
}
