import { Link } from "react-router-dom"

// Mock blog data
const blogPosts = [
    {
        id: 1,
        title: "Elevate your style with our luxurious handbags",
        slug: "elevate-your-style-with-our-luxurious-handbags",
        excerpt: "Discover how our premium handbags can transform your everyday outfits into fashion statements.",
        date: "March 1, 2023",
        image:
            "https://myluxurybargain.com/wp-content/uploads/2024/09/Luxury-Handbags-to-Elevate-Your-Casual-Outfits.jpg",
        author: "Bagberry Team",
    },
    {
        id: 2,
        title: "Upgrade your handbag collection with our designer styles",
        slug: "upgrade-your-handbag-collection-with-our-designer-styles",
        excerpt: "Explore our latest designer handbag collection and find the perfect addition to your wardrobe.",
        date: "March 1, 2023",
        image:
            "https://myluxurybargain.com/wp-content/uploads/2024/09/Luxury-Handbags-to-Elevate-Your-Casual-Outfits.jpg",
        author: "Bagberry Team",
    },
    {
        id: 3,
        title: "Functional and fashionable: our handbags are a must-have",
        slug: "functional-and-fashionable-our-handbags-are-a-must-have",
        excerpt: "Learn why our handbags combine style with practicality to become essential accessories for modern life.",
        date: "March 1, 2023",
        image:
            "https://myluxurybargain.com/wp-content/uploads/2024/09/Luxury-Handbags-to-Elevate-Your-Casual-Outfits.jpg",
        author: "Bagberry Team",
    },
    {
        id: 4,
        title: "Find your new favorite handbag in our wide selection",
        slug: "find-your-new-favorite-handbag-in-our-wide-selection",
        excerpt: "With so many styles, colors, and designs to choose from, your perfect handbag is waiting for you.",
        date: "March 1, 2023",
        image:
            "https://myluxurybargain.com/wp-content/uploads/2024/09/Luxury-Handbags-to-Elevate-Your-Casual-Outfits.jpg",
        author: "Bagberry Team",
    },
    {
        id: 5,
        title: "Invest in a timeless handbag that will stand the test of time",
        slug: "invest-in-a-timeless-handbag-that-will-stand-the-test-of-time",
        excerpt: "Discover why investing in a quality handbag is not just a purchase, but a long-term investment.",
        date: "March 1, 2023",
        image:
            "https://myluxurybargain.com/wp-content/uploads/2024/09/Luxury-Handbags-to-Elevate-Your-Casual-Outfits.jpg",
        author: "Bagberry Team",
    },
    {
        id: 6,
        title: "Make a statement with our eye-catching handbags",
        slug: "make-a-statement-with-our-eye-catching-handbags",
        excerpt: "Bold colors, unique designs, and premium materials make our handbags stand out from the crowd.",
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
