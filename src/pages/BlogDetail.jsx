import { Link, useLocation } from "react-router-dom"

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
                author: "Đường Minh Sơn",
                date: "26/04/2025",
                content: "Bài viết hay quá!",
            },
            {
                id: 2,
                author: "Thái Thị Thùy Linh",
                date: "26/04/2025",
                content:
                    "Bài blog vô cùng ý nghĩa, phù hợp cho genz chúng tôi.",
            },
        ],
    },
    {
        id: 2,
        title: "Dẫn đầu Xu Hướng Thời Trang 2025 Cùng Giày Thượng Phong",
        slug: "dan-dau-xu-huong-thoi-trang-2025-cung-giay-thuong-phong",
        date: "20/04/2025",
        author: "Bagberry Team",
        content: `
        <p>Năm 2025 hứa hẹn sẽ là một năm bùng nổ của thời trang, đặc biệt là trong lĩnh vực giày dép. Những xu hướng mới nhất không chỉ mang đến vẻ đẹp hiện đại, phong cách mà còn đề cao sự bền bỉ, thoải mái. Và Giày Thượng Phong, với sứ mệnh mang đến những sản phẩm chất lượng, đã nhanh chóng nắm bắt và tiên phong trong việc cập nhật những xu hướng này.</p>
        <br>
        <hr class="border-2 border-[#e67e22]">
        <br>
        <h2 class="text-xl uppercase font-bold pb-2">Xu Hướng Giày Thời Trang 2025: Sự Kết Hợp Hoàn Hảo</h2>
        <p>Chứng kiến sự lên ngôi của những thiết kế giày không chỉ đẹp mắt mà còn đề cao sự thoải mái và bền bỉ. Năm 2025, các nhà thiết kế đã chú trọng vào việc sử dụng chất liệu cao cấp, thân thiện với môi trường, đồng thời áp dụng công nghệ tiên tiến để tạo ra những đôi giày hoàn hảo nhất.</p>
        <br>
        <h2 class="text-xl uppercase font-bold pb-2">GIÀY THỂ THAO " TECHWEAR" LÊN NGÔI</h2>
        <p>Trong năm 2025, xu hướng thời trang "Techwear" đang dần lên ngôi, đánh dấu sự kết hợp hoàn hảo giữa phong cách thể thao năng động và công nghệ tiên tiến. Nắm bắt được xu hướng đó, Giày Thượng Phong đã cho ra mắt những mẫu giày thời trang thể thao với thiết kế tối giản, chất liệu cao cấp, chống thấm nước và thoáng khí, phù hợp với mọi hoạt động. Những đôi giày này không chỉ mang lại sự thoải mái và tiện dụng mà còn giúp người dùng thể hiện phong cách cá nhân và bắt kịp xu hướng giày 2025 đầy năng động.</p>
        <br>
        <h2 class="text-xl uppercase font-bold pb-2">GIÀY SNEAKER TỐI GIẢN</h2>
        <p>Phong cách tối giản (minimalism) tiếp tục thống trị với những thiết kế sneaker thanh lịch, tinh tế cùng màu sắc trung tính tạo nên vẻ ngoài trang nhã, dễ phối đồ. Chất liệu da Nappa/Alcantara cao cấp hoặc vải canvas bền bỉ không chỉ mang lại sự thoải mái tối đa cho người sử dụng mà còn đảm bảo độ bền đẹp theo thời gian. Những đôi sneaker tối giản này không chỉ là lựa chọn hoàn hảo cho những người yêu thích sự đơn giản, tinh tế mà còn là điểm nhấn thời trang, giúp họ tự tin thể hiện phong cách cá nhân trong mọi hoàn cảnh.</p>
        <br>
        <h2 class="text-xl uppercase font-bold pb-2">GIÀY BATA - PHONG CÁCH NĂNG ĐỘNG</h2>
        <p>Trong xu hướng thời trang hiện nay, giày bata còn là biểu tượng của phong cách năng động và cá tính. Với sự đa dạng trong thiết kế, từ những mẫu cổ điển đến những phiên bản cách tân, giày bata Thượng Phong dễ dàng kết hợp với nhiều loại trang phục, từ quần jeans bụi bặm đến váy áo nữ tính. Chất liệu cao cấp cùng đường may tỉ mỉ mang đến sự thoải mái tối đa cho người mang, giúp bạn tự tin sải bước trong mọi hoạt động thường ngày hay những chuyến du lịch khám phá.</p>
        <br>
        <h2 class="text-xl uppercase font-bold pb-2">Cập Nhật Xu Hướng Thời Trang Giày 2025 Cùng Giày Thượng Phong</h2>
        <p>Bạn muốn sở hữu những đôi giày không chỉ đẹp mắt, thời trang mà còn bền bỉ, chất lượng vượt trội? Hãy đến với Giày Thượng Phong! Chúng tôi cam kết mang đến cho bạn những sản phẩm đáp ứng mọi tiêu chí, giúp bạn tự tin tỏa sáng trong mọi hoàn cảnh.</p>
        <br>
        <h2 class="text-xl uppercase font-bold pb-2">Tại Sao Nên Chọn Giày Chính Hãng Thượng Phong?</h2>
        <p>Khi lựa chọn một đôi giày, chất lượng và phong cách luôn là những yếu tố được đặt lên hàng đầu. Tại Giày Thượng Phong, chúng tôi tự hào mang đến cho khách hàng những sản phẩm đáp ứng đầy đủ các tiêu chí khắt khe nhất. Bạn không chỉ sở hữu những đôi giày chất lượng mà còn khẳng định phong cách thời trang riêng biệt. Hãy cùng chúng tôi dẫn đầu xu hướng thời trang 2025 và tỏa sáng mỗi ngày!</p>

        `,
        image:
            "https://myluxurybargain.com/wp-content/uploads/2024/09/Luxury-Handbags-to-Elevate-Your-Casual-Outfits.jpg",
        comments: [
            {
                id: 1,
                author: "Đường Minh Sơn",
                date: "26/04/2025",
                content: "Bài viết hay quá!",
            },
            {
                id: 2,
                author: "Thái Thị Thùy Linh",
                date: "26/04/2025",
                content:
                    "Bài blog vô cùng ý nghĩa, phù hợp cho genz chúng tôi.",
            },
        ],
    },
    {
        id: 3,
        title: "\"Bước chân Thượng Phong\" - Sáng tạo phong cách của bạn",
        slug: "buoc-chan-thuong-phong-sang-tao-phong-cach-cua-ban",
        date: "18/04/2025",
        author: "Bagberry Team",
        content: `
        <p>Bạn đã sẵn sàng thể hiện cá tính và phong cách thời trang của mình qua một thử thách thú vị chưa? Giày Thượng Phong mang đến cuộc thi ảnh "Bước Chân Thượng Phong", nơi bạn có thể chia sẻ khoảnh khắc thời trang độc đáo và giành những giải thưởng hấp dẫn!</p>
        <br>
        <hr class="border-2 border-[#e67e22]">
        <br>

        <h2 class="text-xl uppercase font-bold pb-2">1. Thách Thức "Bước Chân Thượng Phong" - Cuộc Thi Ảnh Đầy Cảm Hứng</h2>
        <h3 class="text-lg font-bold">Cách Tham Gia</h3>
        <p>Thử thách này rất đơn giản nhưng đầy sáng tạo! Bạn chỉ cần:</p>
        <ul class="list-disc list-inside">
            <li>Chụp một bức ảnh diện giày Thượng Phong với phong cách cá nhân độc đáo.</li>
            <li>Đăng ảnh lên Facebook/Instagram cá nhân ở chế độ công khai kèm hashtag #BuocChanThuongPhong và tag fanpage chính thức của Giày Thượng Phong.</li>
            <li>Viết mô tả ngắn gọn về phong cách bạn chọn và cảm nhận khi mang giày Thượng Phong.</li>
        </ul>
        <br>
        <h3 class="text-lg font-bold">Tiêu Chí Chấm Điểm</h3>
        <p>Ban tổ chức sẽ đánh giá bài dự thi dựa trên:</p>
        <ul class="list-disc list-inside">
            <li>Sáng tạo & cá tính: Phong cách thời trang thể hiện dấu ấn riêng biệt.</li>
            <li>Chất lượng hình ảnh: Ảnh rõ nét, có bố cục đẹp.</li>
            <li>Tương tác từ cộng đồng: Lượt like, share và bình luận trên bài đăng.</li>
        </ul>
        <br>

        <h2 class="text-xl uppercase font-bold pb-2">2. Giải Thưởng Cuộc Thi Thời Trang Giày Thượng Phong</h2>
        <p>Cuộc thi mang đến nhiều phần quà hấp dẫn dành cho những bước chân ấn tượng nhất:</p>
        <ul class="list-disc list-inside">
            <li>Giải Nhất: 5.000.000 VNĐ + 01 đôi giày Thượng Phong phiên bản đặc biệt.</li>
            <li>Giải Nhì: 3.000.000 VNĐ + 01 đôi giày Thượng Phong bất kỳ.</li>
            <li>Giải Ba: 1.000.000 VNĐ + 01 voucher mua hàng trị giá 500.000 VNĐ.</li>
            <li>10 Giải Khuyến Khích: Mỗi giải 01 voucher 300.000 VNĐ.</li>
        </ul>
        <br>
        <h2 class="text-xl uppercase font-bold pb-2">3. Lợi Ích Khi Tham Gia Thử Thách Ảnh Giày</h2>
        <p>Không chỉ là một cuộc thi, đây còn là cơ hội để bạn:</p>
        <ul class="list-disc list-inside">
            <li>Thể hiện cá tính thời trang qua từng bước chân.</li>
            <li>Gây ấn tượng với cộng đồng yêu giày và nhận sự công nhận từ ban tổ chức.</li>
            <li>Sở hữu những phần thưởng giá trị và có cơ hội trở thành gương mặt đại diện cho Giày Thượng Phong.</li>
        </ul>
        <br>
        <h2 class="text-xl uppercase font-bold pb-2">4. Mẹo Chụp Ảnh "Đỉnh Cao" Để Dự Thi</h2>
        <p>Để có bức ảnh đẹp và tăng cơ hội chiến thắng, bạn có thể áp dụng một số mẹo sau:</p>
        <ul class="list-disc list-inside">
            <li>Chọn ánh sáng tốt: Chụp ngoài trời hoặc trong không gian có ánh sáng tự nhiên để ảnh sắc nét hơn.</li>
            <li>Tạo dáng sáng tạo: Đừng ngại thử những tư thế độc đáo, năng động.</li>
            <li>Chỉnh sửa nhẹ nhàng: Sử dụng các ứng dụng chỉnh ảnh để tăng độ sáng và tương phản mà vẫn giữ vẻ tự nhiên.</li>
        </ul>
        <br>
        <h2 class="text-xl uppercase font-bold pb-2">5. Thời Gian Cuộc Thi & Công Bố Kết Quả</h2>
        <ul class="list-disc list-inside">
            <li>Thời gian nhận bài dự thi: Từ ngày XX/XX đến XX/XX.</li>
            <li>Công bố kết quả: Ngày XX/XX trên fanpage Giày Thượng Phong.</li>
            <li>Trao giải: Trong vòng 7 ngày sau khi công bố kết quả.</li>
        </ul>
        <br>
        
        `,
        image:
            "https://myluxurybargain.com/wp-content/uploads/2024/09/Luxury-Handbags-to-Elevate-Your-Casual-Outfits.jpg",
        comments: [
            {
                id: 1,
                author: "Đường Minh Sơn",
                date: "26/04/2025",
                content: "Bài viết hay quá!",
            },
            {
                id: 2,
                author: "Thái Thị Thùy Linh",
                date: "26/04/2025",
                content:
                    "Bài blog vô cùng ý nghĩa, phù hợp cho genz chúng tôi.",
            },
        ],
    },
    {
        id: 4,
        title: "Chia Sẻ Trải Nghiệm Giày Thượng Phong: Cùng Lan Tỏa Phong Cách",
        slug: "chia-se-trai-nghiem-giay-thuong-phong-cung-lan-toa-phong-cach",
        date: "15/04/2025",
        author: "Thái Thị Thùy Linh",
        content: `
        <p>Bạn đã từng trải nghiệm sự thoải mái, bền bỉ và phong cách của Giày Thượng Phong chưa? Hãy cùng tham gia cộng đồng yêu giày để chia sẻ cảm nhận của bạn và lan toả phong cách cá nhân thông qua từng bước chân!</p>
        <br>
        <hr class="border-2 border-[#e67e22]">
        <br>

        <h2 class="text-xl uppercase font-bold pb-2">1. Cộng Đồng Thượng Phong – Nơi Hội Tụ Những Bước Chân Cá Tính</h2>
        <p>Giày không chỉ đơn thuần là một phụ kiện, mà còn là dấu ấn của phong cách cá nhân. Cộng đồng Thượng Phong là nơi để mọi người cùng nhau:</p>
        <ul class="list-disc list-inside">
            <li>Chia sẻ trải nghiệm thực tế khi sử dụng giày Thượng Phong.</li>
            <li>Review giày với những góc nhìn chân thực và khách quan.</li>
            <li>Gợi ý cách phối đồ ấn tượng để giúp đôi giày trở nên nổi bật hơn.</li>
        </ul>
        <br>

        <h2 class="text-xl uppercase font-bold pb-2">2. Tại Sao Bạn Nên Chia Sẻ Trải Nghiệm Giày Thượng Phong?</h2>
        <p>Khi tham gia chia sẻ trải nghiệm tại cộng đồng, bạn không chỉ giúp những người yêu giày có thêm góc nhìn thực tế mà còn nhận được nhiều lợi ích hấp dẫn:</p>
        <ul class="list-disc list-inside">
            <li><span class="font-bold">Nhận ưu đãi độc quyền:</span> Những bài review chất lượng có cơ hội nhận voucher giảm giá từ Thượng Phong.</li>
            <li><span class="font-bold">Kết nối với những tín đồ thời trang:</span> Học hỏi thêm những cách mix & match sáng tạo từ các thành viên khác.</li>
            <li><span class="font-bold">Gây ấn tượng & lan tỏa phong cách riêng:</span> Những bài chia sẻ nổi bật có thể được đăng tải trên fanpage chính thức của Giày Thượng Phong.</li>
        </ul>
        <br>

        <h2 class="text-xl uppercase font-bold pb-2">3. Cách Tham Gia Chia Sẻ Review Giày Thượng Phong</h2>
        <p>Hãy đơn giản hóa quá trình chia sẻ bằng 3 bước sau:</p>
        <ul class="list-disc list-inside">
            <li><span class="font-bold">Bước 1:</span> Chụp ảnh hoặc quay video về trải nghiệm thực tế của bạn khi mang giày Thượng Phong.</li>
            <li><span class="font-bold">Bước 2:</span> Viết bài review ngắn về chất lượng, kiểu dáng, độ bền và cảm giác sử dụng.</li>
            <li><span class="font-bold">Bước 3:</span> Đăng tải bài viết lên Facebook/Instagram cá nhân ở chế độ công khai kèm hashtag #ChiaSeTraiNghiem #ReviewGiayThuongPhong và tag fanpage chính thức.</li>
        </ul>
        <br>

        <h2 class="text-xl uppercase font-bold pb-2">4. Mẹo Viết Review Giày Thu Hút & Chân Thực</h2>
        <p class="pb-1"><span class="font-bold">Trải nghiệm thực tế:</span> Hãy kể câu chuyện của riêng bạn – bạn đã sử dụng giày Thượng Phong trong hoàn cảnh nào? (đi làm, đi chơi, thể thao…)</p>
        <p class="pb-1"><span class="font-bold">Hình ảnh/video chất lượng:</span> Một bức ảnh đẹp hoặc video sinh động sẽ giúp bài chia sẻ hấp dẫn hơn.</p>
        <p class="pb-1"><span class="font-bold">So sánh với các dòng giày khác:</span> Nếu bạn từng đi nhiều loại giày, đừng ngại đưa ra sự so sánh để giúp cộng đồng có cái nhìn khách quan.</p>
        <p class="pb-1"><span class="font-bold">Chia sẻ mẹo bảo quản:</span> Nếu bạn có kinh nghiệm giữ giày bền đẹp, đừng quên chia sẻ cùng mọi người.</p>
        
        <br>
        `,
        image:
            "https://myluxurybargain.com/wp-content/uploads/2024/09/Luxury-Handbags-to-Elevate-Your-Casual-Outfits.jpg",
        comments: [
            {
                id: 1,
                author: "Đường Minh Sơn",
                date: "26/04/2025",
                content: "Bài viết hay quá!",
            },
            {
                id: 2,
                author: "Thái Thị Thùy Linh",
                date: "26/04/2025",
                content:
                    "Bài blog vô cùng ý nghĩa, phù hợp cho genz chúng tôi.",
            },
        ],
    },
    {
        id: 5,
        title: "Giày Thượng Phong: Lựa Chọn Hoàn Hảo Cho Phong Cách",
        slug: "giay-thuong-phong-lua-chon-hoan-hao-cho-phong-cach",
        author: "Đường Minh Sơn",
        date: "10/04/2025",
        content: `
        <p>Giày Thượng Phong – thương hiệu giày lâu đời với thiết kế bền bỉ, giá cả phải chăng và phong cách đa dạng. Bài viết này sẽ mang đến những đánh giá chuyên sâu về giày Thượng Phong kết hợp cùng các review chân thực từ người dùng, khẳng định lý do tại sao đây là lựa chọn giày chất lượng mà bạn không thể bỏ qua.</p>
        <br>
        <hr class="border-2 border-[#e67e22]">
        <br>
        <h2 class="text-xl uppercase font-bold pb-2">1. LỊCH SỬ VÀ UY TÍN THƯƠNG HIỆU</h2>
        <h3 class="text-lg font-bold">Thành lập và phát triển</h3>
        <ul class="list-disc list-inside">
            <li><span class="font-bold">Nền tảng lâu đời:</span> Ra đời vào cuối thập niên 1950, Giày Thượng Phong nhanh chóng trở thành biểu tượng cho dòng giày thể thao “Made in Vietnam”.</li>
            <li><span class="font-bold">Sự tin cậy:</span> Nhiều thế hệ người tiêu dùng Việt đã lớn lên cùng những đôi giày Thượng Phong, đặc biệt là giày vải dùng trong các tiết học thể dục hay hoạt động thể thao trường học.</li>
        </ul>
        <br>
        <h3 class="text-lg font-bold">Vị thế trên thị trường</h3>
        <ul class="list-disc list-inside">
            <li><span class="font-bold">Phân khúc đa dạng:</span> Thượng Phong không chỉ tập trung vào giày thể thao mà còn mở rộng sang nhiều dòng sản phẩm khác như giày sneaker, giày vải thời trang và giày bảo hộ.</li>
            <li><span class="font-bold">Độ phủ thương hiệu:</span> Với mạng lưới phân phối trên toàn quốc, Giày Thượng Phong dễ dàng tiếp cận mọi đối tượng khách hàng, từ học sinh – sinh viên đến người đi làm.</li>
        </ul>
        <br>

        <h2 class="text-xl uppercase font-bold pb-2">2. THIẾT KẾ VÀ CHẤT LƯỢNG</h2>
        <h3 class="text-lg font-bold">Công nghệ sản xuất</h3>
        <ul class="list-disc list-inside">
            <li><span class="font-bold">Quy trình hiện đại:</span> Thượng Phong áp dụng công nghệ ép đế, may vải tiên tiến, giúp tăng độ bền và giảm thiểu lỗi sản phẩm.</li>
            <li><span class="font-bold">Kiểm soát chất lượng:</span> Mỗi sản phẩm đều trải qua khâu kiểm tra nghiêm ngặt trước khi đến tay người dùng, đảm bảo tính ổn định và độ an toàn khi sử dụng.</li>
        </ul>
        <br>
        <h3 class="text-lg font-bold">Chất liệu và độ bền</h3>
        <ul class="list-disc list-inside">
            <li><span class="font-bold">Chất liệu vải bạt/canvas cao cấp:</span> Đặc trưng của giày Thượng Phong là lớp vải bền chắc, chịu được ma sát cao, thoáng khí và dễ vệ sinh.</li>
            <li><span class="font-bold">Đế cao su dẻo:</span> Phần đế cao su tự nhiên có độ đàn hồi tốt, bám đường hiệu quả, hạn chế trơn trượt và giữ form giày lâu dài.</li>
            <li><span class="font-bold">Độ bền vượt trội:</span> Thời gian sử dụng trung bình của một đôi giày Thượng Phong có thể kéo dài từ 1 đến 3 năm, thậm chí lâu hơn nếu được bảo quản đúng cách.</li>
        </ul>
        <br>

        <h2 class="text-xl uppercase font-bold pb-2">3. ĐÁNH GIÁ THỰC TẾ TỪ KHÁCH HÀNG</h2>
        <h3 class="text-lg font-bold">Ưu điểm</h3>
        <ul class="list-disc list-inside">
            <li><span class="font-bold">Thoải mái khi di chuyển:</span> Nhiều khách hàng chia sẻ, giày Thượng Phong không gây bí chân, êm ái nhờ thiết kế ôm gọn.</li>
            <li><span class="font-bold">Giá thành hợp lý:</span> Mức giá phổ biến từ 100.000 – 300.000 VNĐ, phù hợp với đa số người tiêu dùng Việt.</li>
            <li><span class="font-bold">Dễ phối đồ:</span> Thiết kế tối giản, màu sắc đa dạng nên có thể kết hợp với nhiều phong cách trang phục khác nhau, từ năng động đến lịch sự.</li>
        </ul>
        <br>
        <h3 class="text-lg font-bold">Nhược điểm</h3>
        <ul class="list-disc list-inside">
            <li><span class="font-bold">Kiểu dáng truyền thống:</span> Một số mẫu vẫn giữ nét cổ điển, chưa quá phá cách cho người thích phong cách độc đáo.</li>
            <li><span class="font-bold">Khả năng chống thấm:</span> Đa phần giày vải Thượng Phong không phù hợp đi mưa lớn, cần có biện pháp bảo vệ hoặc lựa chọn mẫu giày da, giày có chất liệu chống nước tốt hơn.</li>
        </ul>
        <br>

        <h2 class="text-xl uppercase font-bold pb-2">4. CÁCH PHỐI ĐỒ VÀ BẢO QUẢN GIÀY</h2>
        <h3 class="text-lg font-bold">Phối đồ theo phong cách cá nhân</h3> <ul class="list-disc list-inside"> <li><span class="font-bold">Casual năng động:</span> Kết hợp quần jean, áo phông và mũ lưỡi trai để tạo nên một set đồ trẻ trung, năng động và đầy sức sống.</li> <li><span class="font-bold">Street style phá cách:</span> Phối giày Thượng Phong với quần jogger, áo hoodie và các phụ kiện nổi bật để thể hiện phong cách cá tính và ấn tượng mạnh mẽ.</li> <li><span class="font-bold">Thanh lịch, gọn gàng:</span> Giày vải màu trắng hoặc đen kết hợp cùng quần kaki và áo sơ mi tạo vẻ ngoài lịch sự, vẫn giữ được sự thoải mái cần thiết.</li> </ul> <h3 class="text-lg font-bold">Bí quyết bảo quản</h3> <ul class="list-disc list-inside"> <li><span class="font-bold">Vệ sinh định kỳ:</span> Giặt giày với nước ấm pha xà phòng nhẹ, tránh sử dụng bàn chải cứng có thể làm hỏng chất liệu vải.</li> <li><span class="font-bold">Phơi nơi thoáng mát:</span> Không phơi giày trực tiếp dưới nắng gắt; để giày khô tự nhiên giúp duy trì độ bền cho vải và đế giày.</li> <li><span class="font-bold">Bảo quản khô ráo:</span> Khi không sử dụng, hãy để giày ở nơi khô thoáng. Có thể nhét giấy vụn vào bên trong giày để giữ form dáng tốt hơn.</li> </ul>
        <br><br>
        <hr class="border-2 border-[#e67e22]">
        <br>
        <p>Giày Thượng Phong với lịch sử lâu đời, thiết kế bền bỉ và giá thành hợp lý thực sự xứng đáng là một “giày chất lượng” cho tủ đồ của bạn. Qua bài viết này, có thể thấy Thượng Phong không chỉ đáp ứng nhu cầu di chuyển mà còn trở thành tuyên ngôn phong cách của nhiều thế hệ người Việt.</p>
        <br>
        <p>Hãy trải nghiệm ngay để tự mình “đánh giá giày” Thượng Phong và cảm nhận sự khác biệt. Nếu bạn đang tìm kiếm một đôi giày thoải mái, bền đẹp và dễ phối đồ, đừng ngần ngại ghé thăm cửa hàng hoặc website chính thức của Thượng Phong. Chắc chắn, đây sẽ là khoản đầu tư xứng đáng cho phong cách và cuộc sống hàng ngày của bạn!</p>
        `,
        image:
            "https://myluxurybargain.com/wp-content/uploads/2024/09/Luxury-Handbags-to-Elevate-Your-Casual-Outfits.jpg",
        comments: [
            {
                id: 1,
                author: "Đường Minh Sơn",
                date: "26/04/2025",
                content: "Bài viết hay quá!",
            },
            {
                id: 2,
                author: "Thái Thị Thùy Linh",
                date: "26/04/2025",
                content:
                    "Bài blog vô cùng ý nghĩa, phù hợp cho genz chúng tôi.",
            },
        ],
    }
]


export default function BlogDetail() {
    const location = useLocation();
    const slug = location.pathname.split("/").pop();
    const post = blogPosts.find(post => post.slug === slug);
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
                    <div className="max-w-6xl mx-auto">
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
