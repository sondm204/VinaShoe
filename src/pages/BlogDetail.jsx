import { Link } from "react-router-dom"

// Mock blog data - in a real app, this would come from a database or API
const blogPosts = [
    {
        id: 1,
        title: "GIÀY THƯỢNG PHONG - BIỂU TƯỢNG BỀN BỈ VÀ TỰ HÀO VIỆT",
        slug: "giay-thuong-phong-bieu-tuong-ben-bi-va-tu-hao-viet",
        date: "25/04/2025",
        author: "Bagberry Team",
        content: `
        <h2 class="text-xl uppercase font-bold pb-2">Lịch sử hình thành và phát triển</h2>
        <p>Giày Thượng Phong, một biểu tượng sức mạnh Việt, đã trải qua một hành trình phát triển đầy thăng trầm. Từ những ngày đầu thành lập, thương hiệu đã khẳng định vị thế của mình trên thị trường giày dép Việt Nam.</p>
        <p>Hành trình của Giày Thượng Phong bắt đầu từ năm 1957, tiền thân là Xí nghiệp X30. Ngay từ khi thành lập, Giày Thượng Phong đã đảm nhận nhiệm vụ sản xuất mũ cứng và dép cao su cho bộ đội Việt Nam, đồng hành cùng quân đội nước ta trong những năm tháng hào hùng ấy. Khởi đầu đầy khó khăn, nhưng bằng sự cống hiến và nỗ lực không ngừng, thương hiệu đã phát triển và mở rộng sản xuất.  Đến năm 1993, thương hiệu chính thức mang tên Giày Thượng Phong, đánh dấu một bước ngoặt quan trọng trong quá trình phát triển.N đã đồng hành cùng bộ đội… </p>
        <br>
        <h2 class="text-xl uppercase font-bold pb-2">Cốt lõi giá trị của Giày Thượng Phong</h2>
        <p>Giày Thượng Phong không chỉ là một thương hiệu giày dép mà còn là biểu tượng của những giá trị cốt lõi làm nên bản sắc thương hiệu. Đó là lòng tự hào Việt Nam, tinh thần sáng tạo không ngừng và cam kết về chất lượng sản phẩm.</p>
        <br>
        <h3 class="text-lg font-bold">Chất lượng sản phẩm</h3>
        <p>Giày Thượng Phong chú trọng lựa chọn chất liệu cao cấp, đảm bảo độ bền và sự thoải mái tối đa cho người sử dụng. Quy trình sản xuất được áp dụng  công nghệ tiên tiến, tạo ra những đôi giày với chất lượng vượt trội. Mọi công đoạn, từ lựa chọn nguyên liệu đến hoàn thiện sản phẩm, đều tuân thủ các tiêu chuẩn khắt khe. Đặc biệt, Giày Thượng Phong khéo léo lồng ghép những giá trị văn hóa truyền thống vào thiết kế hiện đại, tạo nên sự độc đáo và khác biệt, đáp ứng được nhu cầu và thị hiếu của khách hàng qua từng thời kỳ.</p>
        <br>
        <h3 class="text-lg font-bold">Tinh thần và niềm tự hào dân tộc</h3>
        <p>Những thiết kế mang đậm dấu ấn Việt Nam đã giúp Giày Thượng Phong trở thành sứ giả văn hóa, lan tỏa những giá trị tốt đẹp của nước ta đến bạn bè quốc tế. Các giá trị cốt lõi của Giày Thượng Phong bao gồm sự bền bỉ, thể hiện qua chất lượng của sản phẩm; sự sáng tạo qua từng thiết kế và niềm tự hào nguồn gốc bởi sự trân trọng, phát huy những giá trị truyền thống của thương hiệu.</p>
        <br>
        <h2 class="text-xl uppercase font-bold pb-2">Định hướng phát triển trong tương lai</h2>
        <p>Ngày nay, Giày Thượng Phong vẫn giữ vững vị thế của mình trên thị trường. Thương hiệu không ngừng nỗ lực để phát triển, mở rộng thị trường, đồng thời giữ gìn và phát huy những giá trị cốt lõi đã làm nên tên tuổi của Giày Thượng Phong.
        <p>Giày Thượng Phong sẽ không ngừng nghiên cứu và phát triển những mẫu mã mới, đáp ứng nhu cầu đa dạng của người tiêu dùng, đặc biệt là giới trẻ. Bên cạnh các dòng sản phẩm truyền thống, thương hiệu sẽ tập trung vào việc tạo ra những sản phẩm mang tính thời trang, hiện đại và ứng dụng công nghệ mới. Không những vậy, giày Thượng Phong cũng sẽ tiếp tục đề cao tinh thần Việt, trân trọng những giá trị truyền thống của dân tộc, xây dựng thương hiệu dựa trên sự bền bỉ, uy tín và chất lượng, góp phần vào sự phát triển của ngành công nghiệp giày dép Việt Nam, trở thành thương hiệu giày Việt tốt nhất.</p></p>
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
    {
        id: 2,
        
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
