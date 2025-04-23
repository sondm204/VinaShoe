import { Link } from "react-router-dom"

// Mock blog data - in a real app, this would come from a database or API
const blogPosts = [
    {
        id: 1,
        title: "Elevate your style with our luxurious handbags",
        slug: "elevate-your-style-with-our-luxurious-handbags",
        date: "March 1, 2023",
        author: "Bagberry Team",
        content: `
      <p>Of all the types of bags available, cross body handbags are perhaps the most practical and versatile. They're perfect for running errands, traveling, or even a night out on the town. Cross body bags come in a variety of sizes and styles, making it easy to find one that suits your needs.</p>
      <br>
      <p>First and foremost, the main advantage of a cross body handbag is its hands-free design. Unlike shoulder bags that constantly slip off your shoulder, cross body bags stay securely in place, leaving your hands free to carry other things or simply move around without constantly adjusting your bag.</p>
      <br>
      <h2>Stylish Handbags for Every Occasion</h2>
      <br>
      <p>Our cross body bags come in a variety of styles to suit any occasion. From elegant options for formal events to casual, everyday bags for errands and casual outings. Additionally, cross body bags often have multiple compartments and spaces, allowing you to carefully store your belongings and keep them organized.</p>
      <br>
      <ul>
        <li>Our bags come in a variety of colors to match any outfit and occasion.</li>
        <li>The bags come in a variety of sizes, shapes, and sizes.</li>
        <li>We offer high-quality bags at affordable prices.</li>
      </ul>
      <br>
      <h2>About Our Collection</h2>
      <br>
      <p>When it comes to style, cross body bags are incredibly versatile. They come in a wide range of designs, from casual to formal, making them suitable for almost any outfit. For a more casual look, opt for a canvas or leather cross body bag. These styles are perfect for everyday wear.</p>
      <br>
      <p>If you're looking for something more elegant, consider a cross body bag made of a luxurious material like silk or satin. These are perfect for a night out or special occasion. Additionally, many high-end designers offer cross body bags as part of their collections, so you can find a style that fits your personal taste and budget.</p>
      <br>
      <p>Another great thing about cross body bags is that they come in different sizes, making them suitable for a variety of purposes. If you're looking for a bag to carry just your phone and wallet, a small cross body bag might be the perfect choice for you. On the other hand, if you're looking for something more compact, a smaller cross body bag will do the trick.</p>
      <br>
      <p>Lastly, it's worth noting that cross body bags are popular among both men and women. While some styles are more feminine or specifically designed for men.</p>
      <br>
      <p>In conclusion, cross body handbags are a great choice for anyone looking for a practical, versatile, and stylish bag. Whether you're running errands, traveling, or going out for the night, a cross body bag will keep your hands free and your belongings secure. So why not give one a try? You might just find that it's the perfect bag for you.</p>
    `,
        image:
            "https://myluxurybargain.com/wp-content/uploads/2024/09/Luxury-Handbags-to-Elevate-Your-Casual-Outfits.jpg",
        comments: [
            {
                id: 1,
                author: "Jessica",
                date: "March 3, 2023",
                content: "Love this blog!",
            },
            {
                id: 2,
                author: "James",
                date: "March 5, 2023",
                content:
                    "Just got a cross body handbag and it's perfect for daily use. Definitely agree with many of what's said here. Practical, stylish, and it holds only essential stuff.",
            },
        ],
    },
]


export default function BlogDetail() {
    const post = blogPosts[0];
    return (
        <main>
            {/* Blog Post Header */}
            <section className="bg-[#f8f0e5] py-16">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl font-light mb-4">{post.title}</h1>
                    <div className="flex items-center text-sm text-gray-600">
                        <span>By</span>
                        <Link href="#" className="ml-1 text-[#e67e22]">
                            {post.author}
                        </Link>
                        <span className="mx-2">•</span>
                        <span>{post.date}</span>
                    </div>
                </div>
            </section>

            {/* Featured Image */}
            <section className="py-8">
                <div className="container mx-auto px-4">
                    <div className="relative overflow-hidden">
                        <img
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover w-full"
                            priority
                        />
                    </div>
                </div>
            </section>

            {/* Blog Content */}
            <section className="py-8">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto">
                        <div className="prose max-w-none text-lg" dangerouslySetInnerHTML={{ __html: post.content }} />

                        {/* Product Showcase */}
                        <div className="my-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <img
                                    src="https://demo.agnidesigns.com/bagberry/wp-content/uploads/2023/02/product-thumbnail-114-799x1024.jpeg"
                                    alt="Model with yellow suit and blue handbag"
                                    width={400}
                                    height={400}
                                    className="object-cover"
                                />
                            </div>
                            <div>
                                <img
                                    src="https://demo.agnidesigns.com/bagberry/wp-content/uploads/2023/02/product-thumbnail-113-1199x1536.jpeg"
                                    alt="Yellow handbag closeup"
                                    width={400}
                                    height={400}
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        {/* Banner */}
                        <div className="my-12 relative right-0">
                            <div className="aspect-[3/1] relative">
                                <img
                                    src="https://demo.agnidesigns.com/bagberry/wp-content/uploads/2023/02/about-collection-1-2048x915.jpeg"
                                    alt="Timeless and reliable bags"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <h2 className="text-3xl font-light text-white">Timeless & reliable bags.</h2>
                                </div>
                            </div>
                        </div>

                        {/* Comments Section */}
                        <div className="mt-16 border-t border-gray-200 pt-8">
                            <h3 className="text-2xl font-light mb-6">
                                {post.comments.length} responses to "{post.title}"
                            </h3>

                            <div className="space-y-8">
                                {post.comments.map((comment) => (
                                    <div key={comment.id} className="bg-gray-100 p-6 rounded">
                                        <div className="flex items-start">
                                            <div className="mr-4">
                                                <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                                            </div>
                                            <div>
                                                <h4 className="font-medium">{comment.author}</h4>
                                                <p className="text-sm text-gray-500 mb-2">{comment.date}</p>
                                                <p>{comment.content}</p>
                                                <button className="text-sm text-[#e67e22] mt-2">Reply</button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Comment Form */}
                            <div className="mt-12">
                                <h3 className="text-2xl font-light mb-6">Leave a Reply</h3>
                                <p className="text-gray-600 mb-6">Your email address will not be published.</p>

                                <form className="space-y-4">
                                    <div>
                                        <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-1">
                                            Comment <span className="text-red-500">*</span>
                                        </label>
                                        <textarea
                                            id="comment"
                                            rows={6}
                                            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#e67e22]"
                                            required
                                        ></textarea>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                                Name <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#e67e22]"
                                                required
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                                Email <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#e67e22]"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-1">
                                            Website
                                        </label>
                                        <input
                                            type="url"
                                            id="website"
                                            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#e67e22]"
                                        />
                                    </div>

                                    <div className="flex items-center">
                                        <input
                                            type="checkbox"
                                            id="save-info"
                                            className="h-4 w-4 text-[#e67e22] focus:ring-[#e67e22] border-gray-300 rounded"
                                        />
                                        <label htmlFor="save-info" className="ml-2 block text-sm text-gray-700">
                                            Save my name, email, and website in this browser for the next time I comment.
                                        </label>
                                    </div>

                                    <button type="submit" className="bg-[#e67e22] hover:bg-[#e67e22]/90 text-white py-3 px-6 rounded-md">
                                        Post Comment
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
