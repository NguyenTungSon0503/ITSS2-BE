const seedJobs = async (prisma) => {
  await prisma.job.upsert({
    where: {
      id: 1,
    },
    create: {
      title: 'Chuyên Viên Kinh Doanh (AM)',
      description:
        '<p>Chịu trách nhiệm kinh doanh sản phẩm, dịch vụ, các giải pháp VT-CNTT cho nhóm KHDN.Xây dựng và triển khai kế hoạch bán hàng đối với tập khách hàng mục tiêu và chịu trách nhiệm hoàn thành các chỉ tiêu doanh thu được giao.Duy trì, phát triển doanh thu trên tập khách hàng/đối tác bán hàng đã phát triển và phát triển doanh thu mới khách hàng tổ chức – doanh nghiệp.Phối hợp với các đơn vị có liên quan cung cấp dịch vụ cho khách hàng; phối hợp thực hiện chăm sóc sau bán hàng, giải quyết khiếu nại của khách hàng.</p>',
      requirements:
        '<ul><li>Bằng cấp: Đại học chính quy trở lên, ưu tiên các ngành Kinh tế, Công nghệ thông tin, Điện tử Viễn thông. Tiếng Anh TOEIC 150-350 hoặc tương đương. Kinh nghiệm bán hàng VT-CNTT cho KHDN. Ngoại hình ưa nhìn, giao tiếp tốt, không quá 30 tuổi. Tinh thần trách nhiệm, nhiệt tình. Ưu tiên: Năng động, có ý chí vươn lên.</li></ul>',
      advantages:
        '<ul><li>Mức lương cạnh tranh, thu nhập lên tới 300 triệu đồng/năm, tùy thuộc vào kết quả công việc được giao, không áp dụng mức trần tiền lương.</li><li>Chế độ chính sách: được tham gia đóng bảo hiểm xã hội, bảo hiểm y tế, chăm sóc sức khỏe và các chế độ đãi ngộ khác.</li><li>Mức lương cạnh tranh, thu nhập cao, trên cơ sở lương cứng tối thiểu giao KPI/KRI và lương kinh doanh trên cơ sở đơn giá doanh thu phát sinh mới, không áp dụng mức trần tiền lương. Được thưởng Quý / Năm theo kết quả hoàn thành của cá nhân và đơn vị.</li><li>Được làm việc trong môi trường chuyên nghiệp, năng động, chủ động trong công việc.</li><li>Được ưu tiên trọng dụng nhân tài theo quy chế quản trị tài năng của Tập đoàn VNPT và Tổng Công ty VNPT Vinaphone.</li></ul>',
      company_id: 1,
      salary_min: 15000,
      salary_max: 20000,
      expired_at: '2024-01-31T23:59:59Z',
      years_of_experience: 2,
      job_location: 'Hoan Kiem, Ha Noi, Viet Nam',
      thumbnail_url:
        'https://example.com/images/graphic_designer_thumbnail.jpg',
      //jobs_type: 'Bán thời gian, Toàn thời gian',
      majorsId: 8,
      is_domestic: true,
    },
    update: {},
  });

  await prisma.job.upsert({
    where: {
      id: 2,
    },
    create: {
      title: 'Senior Data Engineer',
      description:
        '<p>Thiết kế các luồng đồng bộ dữ liệu, làm sạch dữ liệu, chuẩn hóa dữ liệu đầu vào, luồng đánh giá chất lượng dữ liệu, tổng hợp dữ liệu báo cáo, xuất dữ liệu lớn theo tài liệu nghiệp vụ.Khảo sát hiện trạng hệ thống Big Data đang chạy.Thực hiện quản lý ETL metadata (từ điển dữ liệu, logic của các luồng ETL,...).Kiểm tra code và phê duyệt tích hợp mã nguồn (merge code).Kiểm tra và phê duyệt kịch bản upcode với các yêu cầu nâng cấp.Cài đặt và triển khai nền tảng dữ liệu lớn cho các dự án mới.Viết tài liệu phục vụ chuyển giao hệ thống (Hướng dẫn cài đặt triển khai, Hướng dẫn vận hành, khai thác).Quản lý team dự án với quy mô vừa và nhỏ (team 2-5 người).Training kỹ năng và chuyên môn cho vị trí Associate</p>',
      requirements:
        '<ul><li>Bằng cấp: Đại học hoặc trên Đại học chuyên ngành CNTT/ĐTVT</li><li>Tiếng Anh: Toeic tối thiểu 650 hoặc chứng chỉ tương đương</li><li>Tối thiểu 3 năm làm việc trong các dự án với vai trò Kỹ sư dữ liệu lớn hoặc tương đương</li><li>Có khả năng nghiên cứu, đánh giá, cập nhật và tiếp cận công nghệ mới, Nghiên cứu tài liệu, xây dựng bảng câu hỏi khảo sát</li><li>Thanh thạo quy trình sản xuất và công cụ quản lý sản xuất phần mềm</li><li>Kiến thức về lập trình, cấu trúc dữ liệu & giải thuật</li><li>Kiến thức về lập trình lưu trữ, xử lý dữ liệu phân tán, xử lý dữ liệu lớn (Hadoop, Spark, Elastic search, ...)</li></ul>',
      advantages:
        '<ul><li>Chế độ Thu nhập hấp dẫn và tăng theo năng lực, kinh nghiệm</li><li>Vị trí cấp tập đoàn, quản trị toàn bộ ngành dọc, level Chuyên viên chính chỉ chiếm 15% định biên trong tập đoàn</li><li>Môi trường làm việc cởi mở và năng động, khuyến khích trao đổi ý tưởng ở mọi cấp, cho phép bạn làm việc, sáng tạo theo cách riêng</li><li>Được khơi gợi cảm hứng làm việc với văn phòng xanh, không gian mở, hiện đại tiêu chuẩn quốc tế</li></ul>',
      company_id: 2,
      salary_min: 25000,
      salary_max: 40000,
      expired_at: '2024-01-31T23:59:59Z',
      years_of_experience: 3,
      job_location: 'Manhattan, New York, USA',
      thumbnail_url:
        'https://example.com/images/graphic_designer_thumbnail.jpg',
      //jobs_type: 'Bán thời gian, Thực tập',
      majorsId: 15,
      is_domestic: false,
    },
    update: {},
  });

  await prisma.job.upsert({
    where: {
      id: 3,
    },
    create: {
      title: 'Video Editor',
      description:
        '<p>Tiếp nhận yêu cầu và lên kế hoạch làm việc hàng tuần.Thực hiện việc quay clip,video,TVC,... và dựng phim, cắt ghép, chỉnh sửa,...Edit video cho nền tảng tiktok theo yêu cầu công việc.Phối hợp với Content cùng làm việc đạt hiệu quả.Có khả năng tư duy hình ảnh, setup ánh sáng, góc máy, hình ảnh tốt.Quản lý kho hình ảnh, video của hệ thống team.Hiểu cách sử dụng, bảo quản thiết bị được giao</p>',
      requirements:
        '<ul><li>Tối thiểu 6 tháng ở vị trí tương đương</li><li>Nam/nữ: 21-30 tuổi</li><li>Thành thạo Adobe Premiere, After Effect, Capcut</li><li>Có kiến thức, kỹ năng làm việc tạo các sản phẩm thương mại điện tử (tiki, shopee, lazada,..) hoặc animation là một lợi thế</li><li>Vui vẻ, năng động, sáng tạo và có trách nhiệm</li><li>Tiếng Anh giao tiếp tốt là một lợi thế</li><li>Lắng nghe, khả năng giao tiếp tốt</li></ul>',
      advantages:
        '<ul><li>Thời gian làm việc: Thứ 2-thứ 6: 8h30-17h, thứ 7: 8h30-12h</li><li>Mức lương: thỏa thuận, xứng đáng với năng lực</li><li>Chế độ nghỉ phép năm, nghỉ lễ, Tết theo quy định</li><li>Tham gia BHXH, BHTN, BHYT đầy đủ</li><li>Thưởng lễ 30/04, 01/05, 01/06, 02/09, tết dương lịch, âm lịch,...</li><li>Xét nâng lương định kỳ</li><li>Môi trường làm việc năng động, hòa đồng, thân thiện, sếp tận tâm, nhiệt tình</li><li>Được tham gia vào các khóa đào tạo, nâng cao năng lực của công ty</li></ul>',
      company_id: 3,
      salary_min: 20000,
      salary_max: 30000,
      expired_at: '2024-03-31T23:59:59Z',
      years_of_experience: 1,
      job_location: 'Hoan Kiem, Ha Noi, Viet Nam',
      thumbnail_url:
        'https://example.com/images/graphic_designer_thumbnail.jpg',
      //jobs_type: 'Bán thời gian',
      majorsId: 30,
      is_domestic: true,
    },
    update: {},
  });

  await prisma.job.upsert({
    where: {
      id: 4,
    },
    create: {
      title: 'Nhân Viên Phân Tích Dữ Liệu ',
      description:
        '<p>Phân tích và hiểu các xu hướng hoặc mô hình trong các bộ dữ liệu phức tạp bằng cách sử dụng ngôn ngữ kịch bản. Phát triển và duy trì các bảng điều khiển và hình ảnh minh họa để hỗ trợ phân tích hoạt động và khám phá dữ liệu. Nâng cao hiệu suất hoạt động của doanh nghiệp thông qua phân tích, báo cáo và dự báo. Triển khai mô hình và phân tích thống kê của các bộ dữ liệu có cấu trúc và không có cấu trúc để phát triển các chỉ số, báo cáo và hình ảnh minh họa về xu hướng và mô hình. Đồng thời, triển khai thử nghiệm A/B để nâng cao thêm quá trình ra quyết định dựa trên dữ liệu.</p>',
      requirements:
        '<ul><li>1-2 năm kinh nghiệm liên quan tập trung vào các nhiệm vụ liên quan đến dữ liệu</li><li>Kinh nghiệm làm việc trong lĩnh vực ngân hàng, tài chính, thương mại điện tử hoặc các công ty giao hàng</li><li>Thành thạo SQL, Python và các công cụ BI</li><li>Kinh nghiệm trong quản lý dữ liệu, ETL và các chức năng phân tích</li><li>Tư duy phân tích mạnh mẽ, ý thức kinh doanh và kỹ năng giao tiếp tốt</li><li>Kỹ năng giải quyết vấn đề đã được chứng minh, chú ý đến chi tiết và kỹ năng tổ chức xuất sắc</li><li>Kiến thức cơ bản về các phương pháp học máy không giám sát và giám sát</li><li>Hiểu rõ về nguyên lý Agile, các thực hành và phương pháp Scrum</li><li>Kinh nghiệm trong Spark là một điểm cộng</li></ul>',
      advantages:
        '<ul><li>Làm việc trong một đội ngũ nhanh chóng, được hỗ trợ đầy đủ bởi BOM. Thay đổi có thể được thực hiện trong vài tuần</li><li>Có một lộ trình rõ ràng để phát triển</li><li>Làm việc trong một đội ngũ sẵn sàng đảm nhận rủi ro và thách thức "thực hành tốt nhất"</li><li>Mức lương có thể thương lượng theo năng lực (thưởng cuối năm,... )</li><li>Đầy đủ quyền lợi với bảo hiểm xã hội. Kiểm tra sức khỏe hàng năm và bảo hiểm PTI theo chính sách của công ty</li><li>Mối quan hệ nhân viên: chuyến công ty, xây dựng đội ngũ,...</li><li>Nghỉ phép có lương: 12 ngày/năm</li></ul>',
      company_id: 4,
      salary_min: 13000,
      salary_max: 18000,
      expired_at: '2024-01-31T23:59:59Z',
      years_of_experience: 3,
      job_location: 'Westminster, London, United Kingdom',
      thumbnail_url:
        'https://example.com/images/graphic_designer_thumbnail.jpg',
      //jobs_type: 'Bán thời gian, Toàn thời gian, Làm từ xa',
      majorsId: 28,
      is_domestic: false,
    },
    update: {},
  });

  await prisma.job.upsert({
    where: {
      id: 5,
    },
    create: {
      title: 'Nhân Viên Tester (Manual Test)',
      description:
        '<p>Đọc và hiểu các tài liệu mô tả hệ thống, yêu cầu nghiệp vụ, và tài liệu thiết kế liên quan. Xây dựng các kịch bản kiểm thử (Testcase) và thực hiện kiểm thử sản phẩm của công ty. Tham gia việc lập các bộ tài liệu kiểm thử như Quy trình kiểm thử, Kế hoạch kiểm thử, và Điểm kiểm thử (Test Point). Nghiên cứu và cập nhật kiến thức mới và các công cụ kiểm thử để hỗ trợ công việc. Đề xuất các cải tiến trong quy trình kiểm thử và thực hiện các nhiệm vụ khác khi được giao.</p>',
      requirements:
        '<ul><li>Có ít nhất 01 năm kinh nghiệm tại vị trí tương đương. Tốt nghiệp Đại học ngành CNTT, Toán tin, Điện tử viễn thông. Sử dụng thành thạo các công cụ test và quản lý lỗi. Hiểu biết về quy trình Test, chiến lược và kỹ thuật test phần mềm, lập tài liệu test tốt. Chủ động, sáng tạo, nhiệt tình, trách nhiệm, tư duy logic tốt. Cẩn thận, tỉ mỉ, cần cù, nhanh nhẹn, sức khỏe tốt, làm việc độc lập hoặc nhóm với cường độ cao. Sẵn sàng làm thêm giờ khi có yêu cầu. Kỹ năng giao tiếp tốt, quản lý thời gian. Ưu tiên: Làm việc theo quy trình phần mềm, hiểu biết về QA, QC. Kinh nghiệm test ứng dụng trên Mobile, web. Kỹ năng đọc/viết tài liệu kỹ thuật tiếng Anh.</li></ul>',
      advantages:
        '<ul><li>Chế độ lương & thưởng hấp dẫn: Mức lương thỏa thuận theo năng lực, thưởng lễ Tết, lương tháng 13, thưởng dự án, thưởng hiệu quả cá nhân, hỗ trợ ăn sáng, phụ cấp ăn trưa, gửi xe, xăng xe, điện thoại, phụ cấp trang điểm, quà tặng lễ. Bảo hiểm & chăm sóc sức khỏe toàn diện: BHXH, BHYT, BHTN, gói bảo hiểm sức khỏe cao cấp, khám sức khỏe định kỳ. Môi trường làm việc hiện đại: Cung cấp máy tính, trang thiết bị hiện đại, văn phòng làm việc Hi-tech, không gian ăn nhẹ miễn phí (nước uống, snack).</li></ul>',
      company_id: 5,
      salary_min: 10000,
      salary_max: 15000,
      expired_at: '2024-01-31T23:59:59Z',
      years_of_experience: 2,
      job_location: 'Hoan Kiem, Ha Noi, Viet Nam',
      thumbnail_url:
        'https://example.com/images/graphic_designer_thumbnail.jpg',
      //jobs_type: 'Bán thời gian, Thực tập',
      majorsId: 16,
      is_domestic: true,
    },
    update: {},
  });

  await prisma.job.upsert({
    where: {
      id: 6,
    },
    create: {
      title: 'Nhân Viên Vẽ Minh Họa',
      description:
        '<p>Thiết kế thiệp, mini-game, banner, đồ họa minh họa, và các hình ảnh trong ứng dụng di động. Xây dựng guideline thiết kế, trình bày sản phẩm, và hỗ trợ các bộ phận khác trong dự án. Tiến hành đánh giá sản phẩm sau khi hoàn thiện. Nghiên cứu và áp dụng các xu hướng thiết kế mới, cũng như các kỹ thuật và công cụ hỗ trợ thiết kế. Hỗ trợ các phòng ban khác đối với các công việc thiết kế nếu cần.</p>',
      requirements:
        '<ul><li>Tốt nghiệp đại học chuyên ngành Thiết kế, Mỹ thuật,... Đọc hiểu Tiếng Anh cơ bản, ưu tiên có thể nghiên cứu tài liệu bằng Tiếng Anh. Có khả năng vẽ tay/ sử dụng tốt wacom. Sử dụng thành thạo các công cụ thiết kế như Adobe Photoshop, Illustrator,... Có kiến thức và kinh nghiệm về graphic design. Có khả năng research dữ liệu và tài nguyên phục vụ cho phát triển dự án. Có tư duy logic và tư duy hệ thống trong thiết kế. Có khả năng làm việc nhóm hoặc độc lập. Có khả năng chịu áp lực về deadline. Có khả năng xử lý tốt các tình huống phát sinh.</li></ul>',
      advantages:
        '<ul><li>Chế độ lương & thưởng hấp dẫn: Mức lương thỏa thuận theo năng lực, thưởng lễ Tết, lương tháng 13, thưởng dự án, thưởng hiệu quả cá nhân, hỗ trợ ăn sáng, phụ cấp ăn trưa, gửi xe, xăng xe, điện thoại, phụ cấp trang điểm, quà tặng lễ. Bảo hiểm & chăm sóc sức khỏe toàn diện: BHXH, BHYT, BHTN, gói bảo hiểm sức khỏe cao cấp, khám sức khỏe định kỳ. Môi trường làm việc hiện đại: Cung cấp máy tính, trang thiết bị hiện đại, văn phòng làm việc Hi-tech, không gian ăn nhẹ miễn phí (nước uống, snack).</li></ul>',
      company_id: 6,
      salary_min: 15000,
      salary_max: 23000,
      expired_at: '2024-01-31T23:59:59Z',
      years_of_experience: 2,
      job_location: 'Shibuya, Tokyo, Japan',
      thumbnail_url:
        'https://example.com/images/graphic_designer_thumbnail.jpg',
      //jobs_type: 'Bán thời gian, Toàn thời gian',
      majorsId: 29,
      is_domestic: false,
    },
    update: {},
  });

  await prisma.job.upsert({
    where: {
      id: 7,
    },
    create: {
      title: 'Nhân Viên Kế Toán , Tài Chính',
      description:
        '<p>Kiểm tra và xét duyệt chứng từ kế toán. Ghi sổ kế toán cho các nghiệp vụ kinh tế phát sinh. Tổng hợp và phân tích số liệu, lập các báo cáo theo yêu cầu. Hướng dẫn các bộ phận liên quan trong quá trình thanh quyết toán chi phí và công nợ.</p>',
      requirements:
        '<ul><li>Giới tính: Nam - Sinh năm: 199x (ưu tiên nam dưới 28 tuổi tại một số tỉnh) - Tốt nghiệp Đại Học chính quy chuyên ngành kế toán, tài chính, ngân hàng - Am hiểu chuyên môn, ưu tiên có kinh nghiệm - Sức khỏe tốt - Tiếng Anh Toeic 650 trở lên (riêng tại Viettel tỉnh: Toeic 550)</li></ul> ',
      advantages:
        '<ul><li>Chế độ Thu nhập hấp dẫn và tăng theo năng lực, kinh nghiệm - Vị trí cấp tập đoàn, quản trị toàn bộ ngành dọc, level Chuyên viên chính chỉ chiếm 15% định biên trong tập đoàn - Môi trường làm việc cởi mở và năng động, khuyến khích trao đổi ý tưởng ở mọi cấp, cho phép bạn làm việc, sáng tạo theo cách riêng. - Được khơi gợi cảm hứng làm việc với văn phòng xanh, không gian mở, hiện đại tiêu chuẩn quốc tế. - Được thư giãn, khơi nguồn sáng tạo với Happy Time mỗi ngày. - Thưởng thức bữa trưa tại Tập đoàn, được chọn lọc bởi các chuyên gia dinh dưỡng. - Cơ hội tham gia gắn kết với tập thể, tổ chức với các hoạt động team building - Chế độ chăm sóc y tế đặc biệt cho CBNV và người thân với trang thiết bị hiện đại.</li></ul>        ',
      company_id: 7,
      salary_min: 17000,
      salary_max: 25000,
      expired_at: '2024-03-31T23:59:59Z',
      years_of_experience: 3,
      job_location: 'Ninh Kieu, Can Tho, Viet Nam',
      thumbnail_url:
        'https://example.com/images/graphic_designer_thumbnail.jpg',
      //jobs_type: 'Toàn thời gian',
      majorsId: 9,
      is_domestic: true,
    },
    update: {},
  });

  await prisma.job.upsert({
    where: {
      id: 8,
    },
    create: {
      title: 'Chuyên Viên Pháp Lý ',
      description:
        '<p>Xây dựng nội quy lao động, thỏa ước lao động, kiểm soát pháp lý và đóng góp ý kiến vào các văn bản nội bộ liên quan, cùng hỗ trợ giải quyết vấn đề pháp lý lao động và thực hiện nghiên cứu về quy định pháp luật, trong sự phối hợp chặt chẽ với các đơn vị và tư vấn luật.</p>',
      requirements:
        '<ul><li>Tốt nghiệp Đại học (hệ chính quy) các chuyên ngành Kinh tế, Quản trị nhân sự, Kinh tế lao động, QTKD, Luật hoặc tương đương. Kinh nghiệm >1 năm trong lĩnh vực nhân sự hoặc pháp lý, ưu tiên Ứng viên làm việc tại Tập đoàn đa lĩnh vực, công ty công nghệ quy mô >2.000 nhân sự. Tố chất, tư duy ngành pháp lý, tính phản biện cao; chủ động, giải quyết công việc độc lập; kỹ năng giải quyết các vụ việc trong quan hệ lao động. Tương đương TOEIC 850 hoặc IELTS 7.0 trở lên.</li></ul>        ',
      advantages:
        '<ul><li>Chế độ Thu nhập hấp dẫn và tăng theo năng lực, kinh nghiệm - Môi trường làm việc cởi mở và năng động, khuyến khích trao đổi ý tưởng ở mọi cấp, cho phép bạn làm việc, sáng tạo theo cách riêng. - Được khơi gợi cảm hứng làm việc với văn phòng xanh, không gian mở, hiện đại tiêu chuẩn quốc tế. - Được thư giãn, khơi nguồn sáng tạo với Happy Time mỗi ngày. - Thưởng thức bữa trưa tại Tập đoàn, được chọn lọc bởi các chuyên gia dinh dưỡng. - Cơ hội tham gia gắn kết với tập thể, tổ chức với các hoạt động team building - Chế độ chăm sóc y tế đặc biệt cho CBNV và người thân với trang thiết bị hiện đại.</li></ul>        ',
      company_id: 8,
      salary_min: 10000,
      salary_max: 15000,
      expired_at: '2024-02-28T23:59:59Z',
      years_of_experience: 3,
      job_location: 'Hoan Kiem, Ha Noi, Viet Nam',
      thumbnail_url:
        'https://example.com/images/graphic_designer_thumbnail.jpg',
      //jobs_type: 'Thực tập',
      majorsId: 22,
      is_domestic: true,
    },
    update: {},
  });

  await prisma.job.upsert({
    where: {
      id: 9,
    },
    create: {
      title: 'Chuyên Viên Chỉnh Sửa Video',
      description:
        '<p>Chịu trách nhiệm thiết kế và quản lý video truyền thông trực tuyến, bao gồm quảng cáo trên các nền tảng như Facebook, YouTube, TikTok, Instagram. Biên tập và dựng video theo kịch bản, bao gồm cắt ghép hình ảnh, điều chỉnh âm thanh, thêm hiệu ứng và âm nhạc nền. Theo dõi hiệu suất của video đã đăng, đánh giá và cải thiện nội dung để đạt được mục tiêu. Đề xuất ý tưởng sáng tạo và đóng góp ý kiến để nâng cao chất lượng video. Tham gia hỗ trợ các hoạt động và chiến dịch của đội Marketing khi cần thiết.</p>',
      requirements:
        '<ul><li>Học vấn: Tốt nghiệp cao đẳng, đại học, chuyên ngành liên quan. Tối thiểu 2 năm kinh nghiệm. Sử dụng thành thạo các phần mềm như Capcut, Adobe Premiere, After Effect. Kiến thức về màu sắc, định dạng video, Social Media. Đam mê tạo sản phẩm video sáng tạo. Chủ động, trách nhiệm, sáng tạo, thích nghi với áp lực. Cầu thị, trung thực, hòa đồng. Gửi CV kèm link sản phẩm.</li></ul>        ',
      advantages:
        '<ul><li>Thu nhập: Lương 12.000.000 - 16.000.000 + Phụ cấp + Thưởng (Up to 13.000.000 - 18.000.000Đ). Phụ cấp sức khỏe/làm đẹp 500.000Đ, xăng xe 200.000Đ, ăn trưa và xế free. Cơ hội phát triển: Nội dung đa kênh, học hỏi, thử sai, dự án Marketing. Môi trường làm việc năng động, thân thiện. Đánh giá, tăng lương định kỳ, thưởng lễ tết, du lịch. Thời gian làm việc: 8h30 - 18h00, thứ 2 - thứ 7.</li></ul>        ',
      company_id: 9,
      salary_min: 15000,
      salary_max: 23000,
      expired_at: '2024-01-31T23:59:59Z',
      years_of_experience: 2,
      job_location: 'Cau Giay, Ha Noi, Viet Nam',
      thumbnail_url:
        'https://example.com/images/graphic_designer_thumbnail.jpg',
      //jobs_type: 'Bán thời gian, Thực tập',
      majorsId: 32,
      is_domestic: true,
    },
    update: {},
  });

  await prisma.job.upsert({
    where: {
      id: 10,
    },
    create: {
      title: 'Chuyên Viên Quay Dựng Video ',
      description:
        '<p>Chịu trách nhiệm quay và dựng video trên các nền tảng như Facebook, TikTok, YouTube. Tiếp nhận kịch bản từ đội biên kịch, thảo luận ý tưởng thiết kế, xây dựng kịch bản, và thực hiện quay trực tiếp. Set up bối cảnh quay, đưa ra gợi ý về hướng quay, và xác định trình tự quay phù hợp. Cân chỉnh góc máy cho từng cảnh quay, điều chỉnh máy quay và đảm bảo chất lượng hình ảnh, âm thanh, ánh sáng tại vị trí quay. Thực hiện công đoạn hậu kỳ cho video đã quay, bao gồm xử lý âm thanh, hình ảnh, để đảm bảo tuân thủ yêu cầu sản xuất và ý tưởng kịch bản.</p>',
      requirements:
        '<ul><li>Học vấn: Tốt nghiệp cao đẳng, đại học, chuyên ngành liên quan... (Gửi CV có đính kèm link sản phẩm)</li></ul>        ',
      advantages:
        '<ul><li>Thu nhập 12-18 triệu + phụ cấp + thưởng, cơ hội đa kênh, phát triển sự nghiệp, môi trường năng động, thưởng lễ tết, thời gian linh hoạt 8h30-18h00, T2-T7.</li></ul>        ',
      company_id: 3,
      salary_min: 25000,
      salary_max: 30000,
      expired_at: '2024-01-31T23:59:59Z',
      years_of_experience: 1,
      job_location: 'Hoan Kiem, Ha Noi, Viet Nam',
      thumbnail_url:
        'https://example.com/images/graphic_designer_thumbnail.jpg',
      //jobs_type: 'Bán thời gian, Toàn thời gian',
      majorsId: 29,
      is_domestic: true,
    },
    update: {},
  });

  await prisma.job.upsert({
    where: {
      id: 11,
    },
    create: {
      title: 'Content Creator',
      description:
        '<p>Lập kế hoạch và sáng tạo ý tưởng nội dung, sản xuất video TikTok độc đáo cho thị trường Hoa Kỳ, hợp tác với KOLs, nghiên cứu xu hướng, phân tích và cải tiến nội dung, thực hiện nhiệm vụ marketing khác theo yêu cầu.</p>',
      requirements:
        '<ul><li>Lập Kế Hoạch và Sáng Tạo Ý Tưởng: Phát triển kế hoạch và ý tưởng nội dung độc đáo cho thị trường Hoa Kỳ.</li><li>Sản Xuất và Chỉnh Sửa Video: Tạo video TikTok sáng tạo, thị trường Hoa Kỳ, sử dụng công cụ chuyên nghiệp.</li><li>Hợp Tác với KOLs: Xác định và hợp tác với KOLs, hỗ trợ chiến lược thương hiệu và chiến dịch marketing.</li><li>Nghiên Cứu và Bắt Kịp Xu Hướng: Theo dõi và nghiên cứu xu hướng TikTok, cập nhật thuật toán và phương pháp hiệu quả.</li><li>Phân Tích và Cải Tiến Nội Dung: Đánh giá chất lượng nội dung và đề xuất sáng kiến cải tiến.</li><li>Thực Hiện Nhiệm Vụ Marketing Khác: Tham gia vào các dự án và nhiệm vụ marketing khác theo chỉ đạo quản lý.</li></ul>        ',
      advantages:
        '<ul><li>Kinh nghiệm ưu tiên 2 năm làm việc với TikTok.</li><li>Sáng tạo nội dung, kỹ năng chỉnh sửa video chuyên nghiệp.</li><li>Am hiểu văn hóa và xu hướng thị trường Hoa Kỳ.</li><li>Đam mê khám phá nội dung mới và hiểu biết về TikTok.</li><li>Kỹ năng làm việc nhóm và giao tiếp tốt.</li><li>Năng lực giao tiếp tiếng Anh tốt.</li></ul>        ',
      company_id: 4,
      salary_min: 17000,
      salary_max: 25000,
      expired_at: '2024-03-31T23:59:59Z',
      years_of_experience: 1,
      job_location: 'Prenzlauer Berg, Berlin, Germany',
      thumbnail_url:
        'https://example.com/images/graphic_designer_thumbnail.jpg',
      //jobs_type: 'Bán thời gian, Làm từ xa',
      majorsId: 27,
      is_domestic: false,
    },
    update: {},
  });

  await prisma.job.upsert({
    where: {
      id: 12,
    },
    create: {
      title: 'Nhân Viên Diễn Hoạt 3D Animation',
      description:
        '<p>Diễn hoạt phim hoạt hình 3D theo storyboard và chỉ đạo của đạo diễn, thực hiện sản phẩm cho các loại phim giải trí và giáo dục dành cho trẻ em, phát sóng trên truyền hình và YouTube. Phối hợp trong quy trình sản xuất để hoàn thiện sản phẩm, đóng góp ý tưởng trong quá trình sản xuất, và thực hiện các công việc khác liên quan đến chuyên môn theo sự phân công của quản lý.</p>',
      requirements:
        '<ul><li>Độ tuổi: 20 – 35 tuổi. Yêu thích phim hoạt hình.</li><li>Tối thiểu 1 năm kinh nghiệm diễn hoạt 3D Animation.</li><li>Sử dụng thành thạo phần mềm: Autodesk Maya (Nếu biết các phần mềm tương tự như Blender sẽ được đào tạo chuyển sang Maya).</li><li>Có khả năng sử dụng Photoshop, Premiere Pro, After Effect... là một lợi thế.</li><li>Nắm vững 12 nguyên tắc chuyển động trong Animation.</li><li>Có kiến thức nền tảng về kể chuyện bằng hình ảnh, nguyên tắc camera, bố cục khuôn hình.</li><li>Thái độ làm việc nghiêm túc, có khả năng làm việc nhóm. Ham học hỏi.</li></ul>        ',
      advantages:
        '<ul><li><strong>LƯƠNG, THƯỞNG:</strong> 12-15 triệu/tháng.<ul><li>Bao gồm: Lương cơ bản + Phụ cấp (Ăn trưa + Xăng xe) + Thưởng.</li><li>Thưởng năm và thưởng các ngày lễ tết theo quy định của nhà nước.</li><li>Thời gian làm việc: 8h30 - 17h30 từ thứ 2 đến thứ 6 + thứ 7 luân phiên.</li></ul></li><li><strong>CHẾ ĐỘ PHÚC LỢI:</strong><ul><li>Đóng BHXH ngay sau khi hết thử việc.</li><li>Cam kết trả lương đúng hạn trong mọi hoàn cảnh.</li><li>Môi trường làm việc chuyên nghiệp, năng động và sáng tạo.</li><li>Được trang bị máy tính, cơ sở vật chất đầy đủ, tiện nghi.</li><li>Du lịch/Teambuilding hàng năm để nâng cao tinh thần đội nhóm trong tổ chức.</li><li>Dã ngoại, xem phim, sinh hoạt ngoại khóa hàng tháng, quý.</li></ul></li><li><strong>PHÁT TRIỂN NĂNG LỰC VÀ LỘ TRÌNH CÔNG DANH:</strong><ul><li>Được đào tạo & học hỏi từ những chuyên gia hàng đầu trong ngành sản xuất phim hoạt hình (Đạo diễn – Họa sĩ Trịnh Lâm Tùng, họa sĩ Vũ Duy Khánh...).</li><li>Cam kết phát triển năng lực CBNV thông qua các hoạt động đào tạo về chuyên môn và kỹ năng mềm hàng tuần, hàng tháng.</li><li>Con đường công danh của bạn luôn rõ ràng tại ALPHA STUDIO: Nhân viên - Chuyên viên - Chuyên viên cao cấp - Chuyên gia Nhân viên - Chuyên viên - Trưởng nhóm - Trưởng bộ phận - Giám đốc chuyên môn.</li></ul></li></ul>        ',
      company_id: 2,
      salary_min: 20000,
      salary_max: 30000,
      expired_at: '2024-01-31T23:59:59Z',
      years_of_experience: 2,
      job_location: 'Hai Chau, Da Nang, Viet Nam',
      thumbnail_url:
        'https://example.com/images/graphic_designer_thumbnail.jpg',
      //jobs_type: 'Toàn thời gian',
      majorsId: 30,
      is_domestic: true,
    },
    update: {},
  });

  await prisma.job.upsert({
    where: {
      id: 13,
    },
    create: {
      title: 'Data Analyst',
      description:
        '<p>Triển khai phân tích và tác động bao gồm chuẩn hóa dữ liệu và sử dụng các phương pháp phân tích khai phá thông tin từ dữ liệu theo hướng dẫn và phân công. Tổng hợp các phân tích theo quy trình và quy định đã được ban hành để đảm bảo tri thức được trình bày một cách hệ thống. Chuẩn bị kế hoạch và triển khai các chương trình tác động, sau đó đánh giá hậu triển khai và đề xuất các phương án cải thiện cho use-case</p>',
      requirements:
        '<ul><li>Tốt nghiệp đại học ngành "Khoa học dữ liệu/Khoa học máy tính/CNTT/Toán học ứng dụng/Điện tử viễn thông/Cơ-Điện/Tự động hóa/Thống kê/Kinh tế/Khoa học Ứng dụng (Toán, Lý, Hóa) hoặc liên quan</li><li>TOEIC đạt tối thiểu 550 hoặc tương ứng.</li><li>Có ít nhất 2 năm kinh nghiệm.</li><li>Có khả năng phân tích yêu cầu của khách hàng và đưa ra giải pháp phù hợp.</li><li>Có khả năng làm việc độc lập và làm việc trong nhóm.</li><li>Kỹ năng tốt trong việc ghi chép và tài liệu hóa các dự án phần mềm.</li></ul>        ',
      advantages:
        '<ul><li>Thu nhập tối thiểu từ 200 triệu VNĐ/năm.</li><li>Phụ cấp ăn trưa: 680.000 VNĐ/tháng. Điện thoại: 200.000 VNĐ/tháng.</li><li>Chế độ thưởng theo quý, năm; tiền quà các ngày Lễ, Tết, ngày thành lập Tập đoàn; hỗ trợ chi phí nghỉ dưỡng hằng năm...</li><li>Hưởng Bảo hiểm Xã hội, Bảo hiểm Y tế theo quy định của Luật Lao động và của Tập đoàn.</li><li>Bảo hiểm sức khỏe PJICO (Chi trả 100% theo thực tế phát sinh chi phí thuộc phạm vi bảo hiểm, Không vượt quá hạn mức bảo hiểm).</li><li>Môi trường chuyên nghiệp, sáng tạo, cạnh tranh, phát triển, năng động có nhiều cơ hội thăng tiến.</li><li>Cơ hội học tập, nghiên cứu, làm việc trong nước và các nước trên thế giới.</li></ul>        ',
      company_id: 10,
      salary_min: 25000,
      salary_max: 40000,
      expired_at: '2024-01-31T23:59:59Z',
      years_of_experience: 3,
      job_location: 'Hoan Kiem, Ha Noi, Viet Nam',
      thumbnail_url:
        'https://example.com/images/graphic_designer_thumbnail.jpg',
      //jobs_type: 'Toàn thời gian, Làm từ xa',
      majorsId: 14,
      is_domestic: true,
    },
    update: {},
  });

  await prisma.job.upsert({
    where: {
      id: 14,
    },
    create: {
      title: 'Java Core Backend',
      description:
        '<p>Nghiên cứu, phát triển, và tích hợp công nghệ mới cho sản phẩm Trung tâm trên cả backend/frontend, player và lĩnh vực truyền hình, xây dựng lộ trình phát triển và nâng cấp chất lượng dịch vụ.</p>',
      requirements:
        '<ul><li>Tốt nghiệp đại học ngành CNTT, Kỹ thuật điện tử viễn thông</li><li>Kinh nghiệm tối thiểu 2 năm ở vị trí tương đương</li><li>TOEIC đạt tối thiểu 550 hoặc tương ứng</li><li>Có khả năng phân tích yêu cầu của khách hàng và đưa ra giải pháp phù hợp</li><li>Có khả năng làm việc độc lập và làm việc trong nhóm</li><li>Kỹ năng tốt trong việc ghi chép và tài liệu hóa các dự án phần mềm</li></ul>        ',
      advantages:
        '<ul><li>Thu nhập tối thiểu từ 200 triệu VNĐ/năm.</li><li>Phụ cấp ăn trưa: 680.000 VNĐ/tháng. Điện thoại: 200.000 VNĐ/tháng.</li><li>Chế độ thưởng theo quý, năm; tiền quà các ngày Lễ, Tết, ngày thành lập Tập đoàn; hỗ trợ chi phí nghỉ dưỡng hằng năm...</li><li>Hưởng Bảo hiểm Xã hội, Bảo hiểm Y tế theo quy định của Luật Lao động và của Tập đoàn.</li><li>Bảo hiểm sức khỏe PJICO (Chi trả 100% theo thực tế phát sinh chi phí thuộc phạm vi bảo hiểm, Không vượt quá hạn mức bảo hiểm).</li><li>Môi trường chuyên nghiệp, sáng tạo, cạnh tranh, phát triển, năng động có nhiều cơ hội thăng tiến.</li><li>Cơ hội học tập, nghiên cứu, làm việc trong nước và các nước trên thế giới.</li></ul>        ',
      company_id: 6,
      salary_min: 55000,
      salary_max: 70000,
      expired_at: '2024-01-31T23:59:59Z',
      years_of_experience: 5,
      job_location: 'Le Marais, Paris, France',
      thumbnail_url:
        'https://example.com/images/graphic_designer_thumbnail.jpg',
      //jobs_type: 'Toàn thời gian',
      majorsId: 15,
      is_domestic: false,
    },
    update: {},
  });

  await prisma.job.upsert({
    where: {
      id: 15,
    },
    create: {
      title: 'DevOps Engineers',
      description:
        '<p>Làm việc với khách hàng từ châu Âu/US, với cơ hội làm việc tại chỗ tại châu Âu, Mỹ, châu Á và Úc. Nghiên cứu yêu cầu và khung công việc của khách hàng, phân tích và ước lượng công việc theo quy trình ước lượng đã định sẵn. Có khả năng tạo ra thiết kế chi tiết và đề xuất giải pháp theo nhu cầu cụ thể khi cần. Tham gia vào lập trình, kiểm thử đơn vị, sửa lỗi và thiết lập môi trường. Hỗ trợ đồng đội khi có nhu cầu. Báo cáo cho Quản lý Dự án.</p>',
      requirements:
        '<ul><li>Kinh nghiệm xây dựng hệ thống CI/CD bằng Jenkins pipeline, TeamCity hoặc các công cụ khác.</li><li>Kinh nghiệm viết kịch bản tự động hóa bằng shell script, Python, NodeJS, Go, v.v.</li><li>Chuyên sâu với Docker, Cloud Foundry, AWS, Artifactory, Nexus, Git, SVN, Rally.</li><li>Người tự khởi động, học hỏi và thoải mái làm việc nhóm.</li><li>Hiểu biết về các công cụ quản lý cấu hình như Chef/Puppet/Ansible.</li><li>Hiểu biết về hệ thống log tập trung như ELK và các công cụ giám sát (Zabbix/Nagios/NewRelic).</li><li>Kinh nghiệm với Unix/Linux và tối ưu hiệu suất.</li><li>Hiểu biết về các công nghệ big data như Cassandra, Hadoop, Spark, v.v.</li></ul>        ',
      advantages:
        '<ul><li>Ứng viên thành công sẽ tham gia đội ngũ tài năng thân thiện, đầy động lực và cam kết, với ưu đãi hấp dẫn từ $800 đến $1500, bảo hiểm y tế "FPT care" do AON cung cấp, xe đưa đón, kỳ nghỉ hè hàng năm, các khoản phụ cấp khác và tiện ích tại khuôn viên FTown.</li></ul>        ',
      company_id: 8,
      salary_min: 45000,
      salary_max: 60000,
      expired_at: '2024-02-28T23:59:59Z',
      years_of_experience: 4,
      job_location: 'Hoan Kiem, Ha Noi, Viet Nam',
      thumbnail_url:
        'https://example.com/images/graphic_designer_thumbnail.jpg',
      //jobs_type: 'Toàn thời gian',
      majorsId: 18,
      is_domestic: true,
    },
    update: {},
  });

  await prisma.job.upsert({
    where: {
      id: 16,
    },
    create: {
      title: 'Java Developer',
      description:
        '<p>Tham gia vào các dự án phát triển sử dụng ngôn ngữ Java và các công nghệ khác. Phát triển sản phẩm mới và nâng cấp các sản phẩm hiện có. Xây dựng và tối ưu hóa hệ thống để đáp ứng số lượng người dùng lớn. Tham gia training và tự học kiến thức và công nghệ mới để áp dụng vào dự án. Hỗ trợ nghiên cứu công nghệ, phối hợp với BA trong việc phân tích tài liệu yêu cầu người sử dụng, tài liệu mô tả, và đặc tả sản phẩm dự án. Đảm bảo tuân thủ các chuẩn và thủ tục kiểm thử. Nghiên cứu tài liệu dự án cùng với project team leader và thành viên dự án. Hỗ trợ thành viên dự án để hiểu rõ yêu cầu nghiệp vụ và yêu cầu người sử dụng, đồng thời thống nhất giao diện sử dụng. Viết các tài liệu dự án theo yêu cầu. Thực hiện các công việc được giao bởi trưởng bộ phận và quản trị dự án trong phạm vi công việc.</p>',
      requirements:
        '<ul><li>Trình độ học vấn: Cao đẳng trở lên (chuyên ngành công nghệ thông tin hoặc liên quan); Có trên 3 năm kinh nghiệm Java; Kinh nghiệm với Vue, Angular, React là lợi thế; Kinh nghiệm xây dựng ứng dụng Microservice là lợi thế; Sử dụng thành thạo ít nhất 1 hệ quản trị cơ sở dữ liệu như Oracle, MySQL, PostgreSQL, Mongo; Tinh thần trách nhiệm, tập thể; Kỹ năng giao tiếp tốt; Chủ động tìm hiểu và học hỏi công nghệ mới; Chủ động, cầu tiến trong công việc.</li></ul>        ',
      advantages:
        '<ul><li>Mức lương cạnh tranh</li><li>Môi trường làm việc thân thiện, năng động, có cơ hội phát triển và thăng tiến.</li><li>Ghi nhận thành tích, tăng lương và thưởng kịp thời.</li><li>Thưởng định kì ngày lễ 30/4, 2/9, thường Tết.</li><li>Nghỉ thứ 7, chủ nhật và các ngày Lễ theo quy định.</li><li>Được hỗ trợ tiền làm thêm giờ, phụ cấp hoạt động dự án.</li><li>Tham gia các khóa đào tạo do công ty tổ chức: kỹ năng mềm, nâng cao trình độ chuyên môn...</li><li>Có cơ hội thăng tiến.</li><li>Được đào tạo, làm việc cùng các chuyên gia nước ngoài.</li><li>Có cơ hội công tác nước ngoài.</li><li>Được hưởng đầy đủ các chế độ bảo hiểm theo luật Việt Nam và quy định của công ty.</li></ul>        ',
      company_id: 3,
      salary_min: 35000,
      salary_max: 40000,
      expired_at: '2024-01-31T23:59:59Z',
      years_of_experience: 3,
      job_location: 'Hoan Kiem, Ha Noi, Viet Nam',
      thumbnail_url:
        'https://example.com/images/graphic_designer_thumbnail.jpg',
      //jobs_type: 'Toàn thời gian',
      majorsId: 16,
      is_domestic: true,
    },
    update: {},
  });

  await prisma.job.upsert({
    where: {
      id: 17,
    },
    create: {
      title: 'Nhân Viên Kỹ Thuật Viễn Thông',
      description:
        '<p>Triển khai và lắp đặt đường truyền Internet và Truyền hình IPTV của FPT Telecom. Cài đặt và hướng dẫn khách hàng về sử dụng dịch vụ Internet và truyền hình của FPT. Bảo trì, kiểm tra, và khắc phục sự cố liên quan đến đường truyền Internet và truyền hình FPT cho khách hàng. Ghi nhận phản hồi trực tiếp từ khách hàng và phối hợp với các bộ phận liên quan để nâng cao chất lượng dịch vụ của công ty.</p>',
      requirements:
        '<ul><li>Nam tuổi từ 20-33</li><li>Tốt nghiệp từ trung cấp nghề trở lên với các chuyên ngành liên quan khối kỹ thuật: Điện tử viễn thông, công nghệ thông tin, Điện điện tử, Cơ điện tử, Điện,..v..v...</li><li>Khả năng giao tiếp tốt, có điện thoại hệ điều hành Android và xe máy di chuyển</li></ul>        ',
      advantages:
        '<ul><li>Thu nhập: Theo năng lực, trung bình 10-15 triệu/tháng. Thời gian thử việc ngắn, có đào tạo và phúc lợi đầy đủ. Môi trường làm việc thân thiện và cơ hội phát triển.</li></ul>        ',
      company_id: 8,
      salary_min: 45000,
      salary_max: 60000,
      expired_at: '2024-03-31T23:59:59Z',
      years_of_experience: 4,
      job_location: 'Westminster, London, United Kingdom',
      thumbnail_url:
        'https://example.com/images/graphic_designer_thumbnail.jpg',
      //jobs_type: 'Toàn thời gian',
      majorsId: 1,
      is_domestic: false,
    },
    update: {},
  });


  await prisma.job.upsert({
    where: {
      id: 18,
    },
    create: {
      title: 'Kỹ Sư Hệ Thống',
      description:
        '<p>Quản trị và phát triển hệ thống máy chủ Middleware, đảm bảo an toàn dữ liệu, triển khai giải pháp Cloud và công nghệ ảo hóa, xây dựng quy trình DevOps, tích hợp hệ thống với đối tác, và thực hiện các nhiệm vụ khác theo phân công.</p>',
      requirements:
        '<ul><li>Tốt nghiệp Đại học Công nghệ thông tin, Kinh nghiệm 2 năm ở vị trí Kỹ sư giải pháp tích hợp hệ thống, hiểu biết về Linux và Windows. Kiến thức về hạ tầng phần cứng, lập trình shell, python. Tham gia triển khai dự án tích hợp hệ thống, Cloud, ảo hóa, mạng, lưu trữ. Tư duy logic tốt, chủ động, trách nhiệm và thái độ tích cực.</li></ul>        ',
      advantages:
        '<ul><li>Thu nhập: từ 300 đến 650 triệu/năm (min/max), Phụ cấp ăn ca 730,000 VNĐ/tháng, Thưởng lễ, BHXH, BHYT, BHTN, Đào tạo, Thời gian làm việc: Thứ 2 - Thứ 6, 8-17h, Tăng lương định kỳ, Thăng tiến, Môi trường chuyên nghiệp, rộng, cơ hội thể hiện năng lực</li></ul>        ',
      company_id: 5,
      salary_min: 50000,
      salary_max: 70000,
      expired_at: '2024-01-31T23:59:59Z',
      years_of_experience: 4,
      job_location: 'District 1, Ho Chi Minh City, Viet Nam',
      thumbnail_url:
        'https://example.com/images/graphic_designer_thumbnail.jpg',
      //jobs_type: 'Toàn thời gian',
      majorsId: 15,
      is_domestic: true,
    },
    update: {},
  });

  await prisma.job.upsert({
    where: {
      id: 19,
    },
    create: {
      title: 'Giáo Viên Toán',
      description:
        '<p>Chuẩn bị giáo án và kế hoạch giảng dạy theo chương trình của Bộ GD&ĐT. Quan tâm và chăm sóc học sinh, đảm bảo chất lượng và hiệu quả giảng dạy. Tham gia các hoạt động của nhà trường và tổ chuyên môn. Thực hiện công tác chủ nhiệm nếu có, và thực hiện các nhiệm vụ khác được phân công.</p>',
      requirements:
        '<ul><li>Tốt nghiệp Đại học chính quy Sư phạm, Làm chủ nhiệm lớp, Chất giọng truyền cảm, Năng lực sư phạm vững vàng, Hiểu tâm lý lứa tuổi, Giao tiếp tốt với đồng nghiệp và phụ huynh</li></ul>        ',
      advantages:
        '<ul><li>Bảo hiểm theo quy định</li><li>Ăn trưa, nghỉ trưa tại trường</li><li>Thưởng hàng tháng theo năng lực</li><li>Giảm 100% học phí cho 2 con theo học tại trường</li><li>Có cơ hội được làm việc trong môi trường chuyên nghiệp</li></ul>        ',
      company_id: 1,
      salary_min: 15000,
      salary_max: 20000,
      expired_at: '2024-02-28T23:59:59Z',
      years_of_experience: 7,
      job_location: 'Hoan Kiem, Ha Noi, Viet Nam',
      thumbnail_url:
        'https://example.com/images/graphic_designer_thumbnail.jpg',
      //jobs_type: 'Toàn thời gian',
      majorsId: 4,
      is_domestic: true,
    },
    update: {},
  });

  await prisma.job.upsert({
    where: {
      id: 20,
    },
    create: {
      title: 'Trợ Lý Học Thuật',
      description:
        '<p>Hình thức làm việc: Onsite, làm việc trực tiếp tại văn phòng công ty (Địa điểm: 81 Giang Văn Minh, Đội Cấn, Ba Đình, Hà Nội). Hỗ trợ Giám đốc Học Thuật hoàn thiện giáo trình, bao gồm việc tổng hợp câu hỏi cho 4 kỹ năng từ nhiều nguồn khác nhau, nghiên cứu các tài liệu, thu thập và biên soạn chúng thành một giáo trình chất lượng. Viết câu trả lời gợi ý với ý tưởng và từ vựng cho các câu hỏi ở kỹ năng viết và nói. Tạo bài tập ôn tập từ vựng cho kỹ năng nghe và đọc, ví dụ như nối từ với nghĩa, lập bảng keyword, và viết mẹo và kỹ thuật làm bài cho từng dạng câu hỏi ở 4 kỹ năng. Đồng thời, thực hiện việc viết giáo án.</p>',
      requirements:
        '<ul><li>Có bằng Sư phạm tiếng Anh (chấp nhận cả sinh viên chưa ra trường và sinh viên mới ra trường), hoặc chứng chỉ IELTS 7.5 trở lên (chứng chỉ hết hạn không quá 4 năm)</li><li>Có kinh nghiệp trong việc giảng dạy tiếng Anh hoặc IELTS, có kinh nghiệm làm giáo án, giáo trình là một lợi thế</li><li>Sẵn sàng học hỏi, mong muốn trở thành IELTS trainer trong tương lai</li></ul>        ',
      advantages:
        '<ul><li>Full-time: 12,000,000 - 16,000,000 VND/tháng (làm việc theo giờ hành chính, từ 8h30 đến 18h, nghỉ trưa 12h30 đến 14h) và thưởng.</li><li>Bảo hiểm, trợ cấp đi lại và ăn trưa, thưởng tháng lương thứ 13, 12 ngày nghỉ phép trong năm, tiệc công ty hàng quý, du lịch công ty.</li><li>Thưởng cuối dự án 2 triệu - 4 triệu</li><li>Có hỗ trợ đóng dấu thực tập</li></ul>        ',
      company_id: 5,
      salary_min: 12000,
      salary_max: 16000,
      expired_at: '2024-01-31T23:59:59Z',
      years_of_experience: 4,
      job_location: 'Thanh Khe, Da Nang, Viet Nam',
      thumbnail_url:
        'https://example.com/images/graphic_designer_thumbnail.jpg',
      //jobs_type: 'Toàn thời gian',
      majorsId: 7,
      is_domestic: true,
    },
    update: {},
  });

  await prisma.job.upsert({
    where: {
      id: 21,
    },
    create: {
      title: 'Frontend Developer',
      description:
        '<p>Phát triển Mobile App, hợp tác với đội UI/UX và lập trình backend, tham gia phân tích yêu cầu, nghiên cứu công nghệ mới, và tối ưu hóa hiệu suất để cải thiện trải nghiệm người dùng.</p>',
      requirements:
        '<ul><li>Yêu cầu về ngôn ngữ lập trình và tools: <ul><li>Thành thạo lập trình với ngôn ngữ C#.</li><li>Kinh nghiệm sử dụng ASP.NET Core, Entity Framework để phát triển API, backend.</li><li>Thành thạo HTML, CSS, JavaScript và các framework như React để phát triển frontend mobile/web.</li><li>Kinh nghiệm thiết kế giao diện người dùng (UI/UX) và triển khai các tính năng tương tác.</li></ul></li><li>Yêu cầu về database: <ul><li>Thành thạo với SQL: bao gồm các lệnh SELECT, INSERT, UPDATE, DELETE và JOIN, tối ưu hóa truy vấn.</li><li>Hiểu biết về các loại cơ sở dữ liệu NoSQL như MongoDB, Cassandra, hoặc Redis là 1 lợi thế.</li></ul></li></ul>        ',
      advantages:
        '<ul><li>Thu nhập hấp dẫn lên tới 35 triệu đồng/tháng.</li><li>Môi trường làm việc sáng tạo và thân thiện.</li><li>Được hưởng đầy đủ các quyền lợi về BHXH - BHYT.</li><li>Được trang bị đầy đủ trang thiết bị phục vụ công việc.</li><li>Cơ hội thể hiện tài năng và đóng góp ý tưởng trong các dự án thú vị.</li><li>Phát triển sự nghiệp và thăng tiến trong lĩnh vực Lập trình.</li></ul>        ',
      company_id: 3,
      salary_min: 20000,
      salary_max: 35000,
      expired_at: '2024-03-31T23:59:59Z',
      years_of_experience: 3,
      job_location: 'Cau Giay, Ha Noi, Viet Nam',
      thumbnail_url:
        'https://example.com/images/graphic_designer_thumbnail.jpg',
      //jobs_type: 'Toàn thời gian',
      majorsId: 19,
      is_domestic: true,
    },
    update: {},
  });

  await prisma.job.upsert({
    where: {
      id: 22,
    },
    create: {
      title: 'System Engineer',
      description:
        '<p>Tổ chức và triển khai giải pháp An toàn thông tin và Truyền thông (ATTT), bao gồm tiếp nhận, nghiên cứu giải pháp, thực nghiệm hệ thống, thiết lập môi trường, cấu hình, và triển khai các dịch vụ sản phẩm theo hợp đồng đã ký kết với khách hàng và nội bộ tập đoàn, nhằm đảm bảo chất lượng và tuân thủ Service Level Agreement (SLA). Xử lý các sự cố và lỗi xuất hiện trong quá trình triển khai giải pháp ATTT tại site của khách hàng, hướng dẫn và đào tạo người sử dụng về việc sử dụng và quản lý sản phẩm ATTT sau khi triển khai. Quản lý nguồn lực triển khai để đảm bảo chất lượng và tiến độ, đồng thời duy trì và nâng cấp các phiên bản sản phẩm ATTT, đồng bộ phiên bản để cung cấp khách hàng những sản phẩm được cập nhật và nâng cấp.</p>',
      requirements:
        '<ul><li>Có từ 2 năm kinh nghiệm triển khai các sản phẩm CNTT/ATTT</li><li>Tốt nghiệp ĐH/CĐ, chuyên ngành: CNTT, Điện tử viễn thông, An toàn thông tin</li><li>Có kiến thức, kinh nghiệm về các hệ điều hành linux là bắt buộc (Ubuntu, Debian, Centos...), có kiến thức cơ bản về hệ thống mạng, TCP/IP Routing, Switching...</li><li>Có kiến thức về các hệ thống ảo hóa: vmware esxi, vcenter hoặc tương đương</li><li>Có kinh nghiệm và kỹ năng làm việc khách hàng</li><li>Có chứng chỉ mạng, Linux, bảo mật là lợi thế</li><li>Có khả năng đọc hiểu tiếng Anh tốt, trình độ tương đương TOEIC 550 trở lên</li></ul>        ',
      advantages:
      '<ul><li>Chế độ Thu nhập hấp dẫn và tăng theo năng lực, kinh nghiệm</li><li>Vị trí cấp tập đoàn, quản trị toàn bộ ngành dọc, level Chuyên viên chính chỉ chiếm 15% định biên trong tập đoàn</li><li>Môi trường làm việc cởi mở và năng động, khuyến khích trao đổi ý tưởng ở mọi cấp, cho phép bạn làm việc, sáng tạo theo cách riêng</li><li>Được khơi gợi cảm hứng làm việc với văn phòng xanh, không gian mở, hiện đại tiêu chuẩn quốc tế</li></ul>',
      company_id: 5,
      salary_min: 18000,
      salary_max: 32000,
      expired_at: '2024-01-31T23:59:59Z',
      years_of_experience: 2,
      job_location: 'Hoan Kiem, Ha Noi, Viet Nam',
      thumbnail_url:
        'https://example.com/images/graphic_designer_thumbnail.jpg',
      //jobs_type: 'Toàn thời gian',
      majorsId: 15,
      is_domestic: true,
    },
    update: {},
  });

  await prisma.job.upsert({
    where: {
      id: 23,
    },
    create: {
      title: 'Nhân Viên Quản Lý Quan Hệ Khách Hàng',
      description:
        '<p>Tiếp nhận và xử lý yêu cầu của khách hàng qua điện thoại, email, và tin nhắn; giải đáp thắc mắc, quảng bá sản phẩm/dịch vụ; quản lý, thu thập, và xử lý dữ liệu khách hàng; thực hiện khảo sát, xây dựng báo cáo và đề xuất giải pháp; điều phối và hỗ trợ sự kiện khách hàng bằng cách xây dựng đề xuất, tư vấn, và tham gia trực tiếp trong thời gian diễn ra sự kiện.</p>',
      requirements:
        '<ul><li>Không yêu cầu kinh nghiệm, sẽ được đào tạo bài bản khi nhận việc, có kinh nghiệm làm việc là lợi thế.</li><li>Cẩn thận, tỉ mỉ và có trách nhiệm trong công việc.</li><li>Biết sắp xếp công việc hợp lý.</li><li>Giao tiếp thành thạo tiếng Anh và tiếng Việt.</li><li>Giọng nói lưu loát, không ngọng, không nói lắp.</li><li>Có kỹ năng văn phòng tốt, sử dụng thành thạo các công cụ Microsoft Office.</li><li>Đã có kinh nghiệm trong ngành dịch vụ là một lợi thế.</li></ul>        ',
      advantages:
        '<ul><li>Môi trường làm việc thân thiện, trẻ, hòa đồng, vui vẻ, tôn trọng cá nhân, đề cao học hỏi.</li><li>Hỗ trợ ăn trưa.</li><li>Được tham gia chế độ bảo hiểm y tế, bảo hiểm thất nghiệp và bảo hiểm xã hội sau khi ký hợp đồng chính thức.</li><li>Chế độ lương thưởng rõ ràng theo năng lực, trách nhiệm và có cơ hội thăng tiến cao.</li><li>Được tham gia các hoạt động bonding team hằng tháng, company trip hằng năm.</li><li>Thời gian làm việc linh hoạt.</li><li>Lương: thoả thuận, chưa bao gồm tip, service charge, commission bonus.</li></ul>        ',
      company_id: 1,
      salary_min: 10000,
      salary_max: 20000,
      expired_at: '2024-02-28T23:59:59Z',
      years_of_experience: 0,
      job_location: 'Shibuya, Tokyo, Japan',
      thumbnail_url:
        'https://example.com/images/graphic_designer_thumbnail.jpg',
      //jobs_type: 'Toàn thời gian',
      majorsId: 27,
      is_domestic: false,
    },
    update: {},
  });

  await prisma.job.upsert({
    where: {
      id: 24,
    },
    create: {
      title: 'Thực Tập Sinh Tiktok Content Creator',
      description:
        '<p>Bán hàng qua TikTok Shop, chỉnh sửa video bằng Capcut và quản lý kênh TikTok; công việc chi tiết sẽ được hướng dẫn trực tiếp; thời gian làm việc linh động theo lịch học của ứng viên (có thể làm online tại nhà).</p>',
      requirements:
        '<ul><li>Không yêu cầu kinh nghiệm</li><li>Tiếng Anh cơ bản đến khá</li><li>Nhanh nhẹn và chăm chỉ</li><li>Biết xem tiktok và chỉnh sửa Capcut là một lợi thế</li></ul>        ',
      advantages:
      '<ul><li>Thời gian làm việc: Thứ 2-thứ 6: 8h30-17h, thứ 7: 8h30-12h</li><li>Mức lương: thỏa thuận, xứng đáng với năng lực</li><li>Chế độ nghỉ phép năm, nghỉ lễ, Tết theo quy định</li><li>Tham gia BHXH, BHTN, BHYT đầy đủ</li><li>Thưởng lễ 30/04, 01/05, 01/06, 02/09, tết dương lịch, âm lịch,...</li><li>Xét nâng lương định kỳ</li><li>Môi trường làm việc năng động, hòa đồng, thân thiện, sếp tận tâm, nhiệt tình</li><li>Được tham gia vào các khóa đào tạo, nâng cao năng lực của công ty</li></ul>',
      company_id: 1,
      salary_min: 3000,
      salary_max: 5000,
      expired_at: '2024-01-31T23:59:59Z',
      years_of_experience: 0,
      job_location: 'Hoan Kiem, Ha Noi, Viet Nam',
      thumbnail_url:
        'https://example.com/images/graphic_designer_thumbnail.jpg',
      //jobs_type: 'Toàn thời gian',
      majorsId: 27,
      is_domestic: true,
    },
    update: {},
  });

  await prisma.job.upsert({
    where: {
      id: 25,
    },
    create: {
      title: 'Nhân Viên Kinh Doanh Online/ Kênh TMĐT',
      description:
        '<p>Tìm Nhân Viên Kinh Doanh Online/Phụ Trách Kênh Online cho thương hiệu Mỹ Phẩm Tóc - vnproin.com. Phát triển khách hàng Buôn/Sỉ/Lẻ trên Zalo, Facebook, Tiktok, sàn Thương Mại Điện Tử. Đăng bài, sáng tạo nội dung trên các kênh Zalo, Facebook, Tiktok, Sàn TMDT. Chăm sóc KH theo quy trình để tối đa hóa hiệu quả bán hàng. Tiếp nhận và giải đáp thắc mắc, theo dõi đơn hàng đến hoàn thành giao dịch. Thực hiện các công việc phát sinh theo chỉ đạo từ trưởng bộ phận và Ban Lãnh Đạo. Báo cáo kết quả công việc định kỳ hoặc khi có yêu cầu. Cơ hội thực tập và làm CTV NVKD Online liên tục.</p>',
      requirements:
        '<ul><li>Độ tuổi: Dưới 35 tuổi;</li><li>Sử dụng và hiểu biết về các kênh Mạng Xã Hội: Zalo, Facebook, Tiktok.</li><li>Có hiểu biết về vận hành các sàn thương mại điện tử (ví dụ như: Shopee, Tiktok shop, Lazada,...);</li><li>Nhanh nhẹn, chăm chỉ, trung thực, nhiệt tình, có trách nhiệm</li><li>Lợi thế các bạn đã có kinh nghiệm TMDT/ Tư vấn/ Telesales/ Bán hàng online</li><li>Kỹ năng giao tiếp tốt.</li></ul>        ',
      advantages:
        '<ul><li>Thu Nhập: Từ 10 triệu đến trên 30 triệu (Bao gồm: Lương cứng + Lương KPI + % Hoa hồng) hoặc đàm phán trao đổi theo năng lực và kế hoạch mục tiêu.</li><li>Phúc Lợi: <ul><li>Làm việc trong môi trường chuyên nghiệp - SẢN PHẨM TOP ĐẦU ƯA CHUỘNG VÀ PHÁT TRIỂN, môi trường trẻ năng động, thu nhập cao, có thể phát triển lên cấp Quản Lí và Phát triển chuyên môn kiến thức.</li><li>Thưởng các ngày Lễ/Tết, Lương tháng 13, Thưởng doanh thu cuối năm.</li><li>Các danh hiệu thi đua và vinh danh cá nhân cống hiến.</li><li>Tham quan, du lịch, nghỉ mát hàng năm.</li><li>Sử dụng các sản phẩm và dịch vụ VIP mà công ty hợp tác.</li><li>Được đào tạo Kinh doanh từ chuyên gia hàng đầu.</li><li>Thực hiện theo quyền lợi trong Hợp Đồng Lao Động, BHXH.</li></ul></li></ul>        ',
      company_id: 7,
      salary_min: 10000,
      salary_max: 30000,
      expired_at: '2024-01-31T23:59:59Z',
      years_of_experience: 2,
      job_location: 'Cau Giay, Ha Noi, Viet Nam',
      thumbnail_url:
        'https://example.com/images/graphic_designer_thumbnail.jpg',
      //jobs_type: 'Toàn thời gian',
      majorsId: 8,
      is_domestic: true,
    },
    update: {},
  });

  await prisma.job.upsert({
    where: {
      id: 26,
    },
    create: {
      title: 'Kỹ Sư Cơ Khí / Thiết Kế Khuôn Mẫu',
      description:
        '<p>Chịu trách nhiệm về việc vẽ, thiết kế chi tiết máy móc và giám sát quá trình sản xuất, lắp ráp sản phẩm. Bóc tách vật tư theo bản vẽ sản xuất và xây dựng định mức vật tư cho sản phẩm. Quản lý thiết bị trong toàn nhà máy, tiếp nhận và bàn giao thiết bị, cũng như thực hiện quy trình công nghệ cho các thiết bị mới. Nghiên cứu và đề xuất các cải tiến để nâng cao hiệu quả sản xuất của máy móc và thiết bị. Bảo trì, sửa chữa và giải quyết sự cố của máy móc và thiết bị trong nhà máy.</p>',
      requirements:
        '<ul><li>Có ít nhất 2 năm kinh nghiệm trong lĩnh vực cơ khí, chế tạo máy.</li><li>Ưu tiên ứng viên đã làm việc cho các công ty gia công chế tạo khuôn mẫu.</li><li>Sử dụng thành thạo phần mềm thiết kế Autocad, 3D và các phần mềm ứng dụng trên máy tính.</li><li>Thành thạo các phương pháp nhận biết, phân loại và lựa chọn vật liệu cơ khí.</li><li>Thành thạo các thao tác lắp ráp, lắp đặt thiết bị, máy móc.</li><li>Thành thạo trong khâu bảo trì, bảo dưỡng các sản phẩm cơ khí.</li><li>Có kỹ năng gia công như: bào, hàn, phay, tiện...</li><li>Nhanh nhẹn, năng nổ, chịu khó học hỏi, chịu được áp lực cao trong công việc.</li></ul>        ',
      advantages:
      '<ul><li>Thu nhập: Theo năng lực, trung bình 10-15 triệu/tháng. Thời gian thử việc ngắn, có đào tạo và phúc lợi đầy đủ. Môi trường làm việc thân thiện và cơ hội phát triển.</li></ul>        ',
      company_id: 2,
      salary_min: 12000,
      salary_max: 20000,
      expired_at: '2024-01-31T23:59:59Z',
      years_of_experience: 2,
      job_location: 'Thanh Khe, Da Nang, Viet Nam',
      thumbnail_url:
        'https://example.com/images/graphic_designer_thumbnail.jpg',
      //jobs_type: 'Toàn thời gian',
      majorsId: 1,
      is_domestic: true,
    },
    update: {},
  });

  await prisma.job.upsert({
    where: {
      id: 27,
    },
    create: {
      title: 'Nhân Viên Kỹ Thuật Độ Xe Hơi',
      description:
        '<p>Nhận phân công từ Trưởng kỹ thuật và Trưởng cửa hàng cho các dự án kỹ thuật. Kiểm tra tình trạng xe trước thi công, báo cáo về lỗi, xước, và tình trạng xe cho Trưởng kỹ thuật và Nhân viên kinh doanh. Đảm bảo phụ tùng lắp đặt cho khách hàng đầy đủ và nguyên vẹn, thử nghiệm sản phẩm trước khi lắp đặt. Chuẩn bị vật tư cần thiết và triển khai thi công theo quy trình công ty. Yêu cầu hỗ trợ khi cần để đảm bảo tiến độ công việc và kiểm tra xe trước khi bàn giao để đảm bảo độ hoàn thiện, ổn định và an toàn.</p>',
      requirements:
        '<ul><li>Đã tốt nghiệp trung cấp nghề trở lên liên quan tới ngành Kỹ thuật ô tô.</li><li>Thành thạo các dụng cụ và máy móc liên quan để ngành Cơ khí và Điện.</li><li>Biết lắp cơ bản màn hình, cam 360, cam hành trình, độ đèn, bi gầm, sub, cảm biến, phụ kiện âm thanh là lợi thế.</li><li>Có hiểu biết cần thiết về các sản phẩm của công ty.</li><li>Giao tiếp tốt, khả năng học hỏi, tiếp thu kiến thức tốt. Có thái độ làm việc tốt, say mê công việc.</li><li>Độ tỉ mỉ và chính xác cao khi làm việc.</li></ul>        ',
      advantages:
        '<ul><li>Thu nhập: 7.000.000 – 15.000.000 (Lương cứng + Khoản thưởng Tuần/Tháng/KPI) + Trợ cấp ăn trưa + Phúc lợi (Sinh nhật, hiếu, hỉ, sinh con...) + Ngày nghỉ và ngày phép đầy đủ theo quy định + Môi trường làm việc trẻ trung, năng động và chuyên nghiệp, cơ hội học tập và phát triển chuyên môn.</li></ul>        ',
      company_id: 10,
      salary_min: 7000,
      salary_max: 15000,
      expired_at: '2024-03-31T23:59:59Z',
      years_of_experience: 2,
      job_location: 'Cau Giay, Ha Noi, Viet Nam',
      thumbnail_url:
        'https://example.com/images/graphic_designer_thumbnail.jpg',
      //jobs_type: 'Toàn thời gian',
      majorsId: 1,
      is_domestic: true,
    },
    update: {},
  });

  await prisma.job.upsert({
    where: {
      id: 28,
    },
    create: {
      title: 'Lập Trình Viên Ruby On Rail',
      description:
        '<p>Tham gia lập trình dự án công nghệ sử dụng Ruby on Rails cho khách hàng, thực hiện các giai đoạn nghiên cứu yêu cầu, phân tích, thiết kế, và nghiên cứu công nghệ của dự án. Đề xuất các giải pháp và cải tiến nhằm nâng cao chất lượng công trình.</p>',
      requirements:
        '<ul><li>Đã làm TypeScript và ReactJS</li><li>Có kiến thức và hiểu biết tốt về Ruby on Rails</li><li>Đã có hơn 1 năm kinh nghiệm</li></ul>        ',
      advantages:
        '<ul><li>Mức lương hấp dẫn, phù hợp với năng lực làm việc (10-20tr).</li><li>Review thành tích 2 lần/năm</li><li>Giờ làm việc: 8:30 - 17:30, thứ 2-thứ 6. Nghỉ t7 và CN</li><li>Được hưởng chế độ đãi ngộ tốt của công ty khi trở thành nhân viên: gửi xe, máy tính hiện đại, BHXH, bảo hiểm, du lịch công ty hàng năm,...</li><li>Lương tháng 13, Thưởng cuối năm,...</li><li>Công nhận và phần thưởng dựa trên hiệu suất của bạn</li><li>Cơ hội thăng tiến cao</li></ul>        ',
      company_id: 8,
      salary_min: 15000,
      salary_max: 20000,
      expired_at: '2024-01-31T23:59:59Z',
      years_of_experience: 3,
      job_location: 'Manhattan, New York, USA',
      thumbnail_url:
        'https://example.com/images/graphic_designer_thumbnail.jpg',
      //jobs_type: 'Toàn thời gian',
      majorsId: 17,
      is_domestic: false,
    },
    update: {},
  });

  await prisma.job.upsert({
    where: {
      id: 29,
    },
    create: {
      title: 'IT Support Engineers',
      description:
        '<p>Là đầu mối kỹ thuật chính hỗ trợ khách hàng doanh nghiệp và đối tác nước ngoài, khắc phục sự cố kỹ thuật liên quan đến Microsoft Dynamics CRM và Dynamics ERP, phát triển trong môi trường công việc nhanh và đầy thách thức, cam kết mang lại trải nghiệm khách hàng tốt nhất</p>',
      requirements:
        '<ul><li>Successful candidates will be part of a friendly, motivated, and committed talent team with attractive offers; Attractive salary from $800 to $1500, health insurance, company shuttle buses, annual summer vacation, and other allowances; FTown Campus provides facilities like a football ground, gym, and more.</li></ul>        ',
      advantages:
        '<ul><li>1. Lương, thưởng, bảo hiểm:</li><li>- 100% lương trong thời gian On Job Training</li><li>- Đóng bảo hiểm trên 100% lương</li><li>- Performance bonus/KPI bonus hàng quý và cuối năm</li><li>- Bảo hiểm sức khỏe PTI (ngoại trú 15 triệu/năm, nội trú 100 triệu/năm)</li><li>- Health check 1 năm/lần tại các bệnh viện lớn</li><li>2. Training & development:</li><li>- Native English instructor (từng giảng dạy tại British University Vietnam, ĐH Hà Nội, ĐH Quốc Gia HN, Language Link Vietnam...)</li><li>- Tham gia nhiều khóa đào tạo kĩ năng mềm: Cultivate Your Leadership Program, Unleash Your Potential Program...</li></ul>        ',
      company_id: 6,
      salary_min: 25000,
      salary_max: 30000,
      expired_at: '2024-02-28T23:59:59Z',
      years_of_experience: 2,
      job_location: 'Hoan Kiem, Ha Noi, Viet Nam',
      thumbnail_url:
        'https://example.com/images/graphic_designer_thumbnail.jpg',
      //jobs_type: 'Toàn thời gian',
      majorsId: 12,
      is_domestic: true,
    },
    update: {},
  });

  await prisma.job.upsert({
    where: {
      id: 30,
    },
    create: {
      title: 'Middle/Senior UI/UX Designer',
      description:
        '<p>Phối hợp với đội thiết kế giao diện phần mềm, xây dựng thiết kế tương tác đáp ứng, đảm bảo đồng nhất và tuân thủ quy tắc thiết kế và nhận diện thương hiệu. Làm việc với nhà phát triển để triển khai thiết kế UI/UX, kiểm tra khả năng sử dụng, và cập nhật với xu hướng và công nghệ mới.</p>',
      requirements:
        '<ul><li>Kinh nghiệm thiết kế giao diện và trải nghiệm người dùng.</li><li>Thành thạo Figma, có kinh nghiệm sử dụng Sketch, Adobe XD, hoặc Illustrator.</li><li>Hiểu biết về nguyên tắc thiết kế tương tác và đáp ứng.</li><li>Kiến thức về Material Design là một lợi thế.</li><li>Làm việc hiệu quả trong môi trường đa chức năng và nhóm.</li><li>Kiến thức về quy trình Agile, Scrum là một lợi thế.</li><li>Kỹ năng giao tiếp và làm việc nhóm tốt.</li><li>Khả năng đóng góp và xây dựng sản phẩm.</li></ul>        ',
      advantages:
        '<ul><li>Kinh nghiệm thiết kế giao diện và trải nghiệm người dùng.</li><li>Thành thạo Figma, có kinh nghiệm sử dụng Sketch, Adobe XD, hoặc Illustrator.</li><li>Hiểu biết về nguyên tắc thiết kế tương tác và đáp ứng.</li><li>Kiến thức về Material Design là một lợi thế.</li><li>Làm việc hiệu quả trong môi trường đa chức năng và nhóm.</li><li>Kiến thức về quy trình Agile, Scrum là một lợi thế.</li><li>Kỹ năng giao tiếp và làm việc nhóm tốt.</li><li>Khả năng đóng góp và xây dựng sản phẩm.</li></ul>        ',
      company_id: 1,
      salary_min: 15000,
      salary_max: 25000,
      expired_at: '2024-01-31T23:59:59Z',
      years_of_experience: 3,
      job_location: 'Cau Giay, Ha Noi, Viet Nam',
      thumbnail_url:
        'https://example.com/images/graphic_designer_thumbnail.jpg',
      //jobs_type: 'Toàn thời gian',
      majorsId: 28,
      is_domestic: true,
    },
    update: {},
  });
};
export default seedJobs;
