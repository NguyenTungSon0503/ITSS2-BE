const seedApplyJobs = async (prisma) => {
  await prisma.applyJob.create({
    data: {
      userId: 1,
      jobId: 2,
      status: 'PENDING',
      message:
        '<p>Tôi là một lập trình viên chuyên nghiệp với nền tảng vững về Công nghệ Thông tin. Kinh nghiệm làm việc trong các dự án phức tạp và khả năng giải quyết vấn đề mạnh mẽ là những điểm mạnh của tôi. Tôi mong muốn đóng góp vào một môi trường làm việc đầy thách thức và đồng đội sáng tạo.</p>',
      cv_url: 'https://example.com/images/graphic_designer_thumbnail.jpg',
    },
  });

  await prisma.applyJob.create({
    data: {
      userId: 1,
      jobId: 3,
      status: 'APPROVE',
      message:
        '<p>Với nền tảng kỹ năng quản lý dự án đa dạng và hiệu quả, tôi đã thành công trong việc dẫn dắt nhóm đội để đạt được kết quả cao. Sự tập trung vào chi tiết và khả năng giao tiếp xuất sắc giúp tôi xây dựng mối quan hệ chặt chẽ với đồng đội và đối tác kinh doanh.</p>',
      cv_url: 'https://example.com/images/graphic_designer_thumbnail.jpg',
    },
  });
  await prisma.applyJob.create({
    data: {
      userId: 1,
      jobId: 5,
      status: 'APPROVE',
      message:
        '<p>Với khả năng phân tích dữ liệu và trình bày thông tin phức tạp một cách dễ hiểu, tôi đã đóng góp vào quá trình ra quyết định chiến lược trong các dự án trước đây. Tôi luôn tìm kiếm cơ hội để ứng dụng sự sáng tạo của mình trong việc tối ưu hóa hiệu suất.</p>',
      cv_url: 'https://example.com/images/graphic_designer_thumbnail.jpg',
    },
  });
  await prisma.applyJob.create({
    data: {
      userId: 3,
      jobId: 7,
      status: 'PENDING',
      message:
        '<p>Tôi là một chuyên gia tiếp thị kỹ thuật số với kinh nghiệm trong việc phát triển chiến lược quảng cáo trực tuyến và quản lý chiến dịch quảng cáo. Sự đam mê về xu hướng mới và sự sáng tạo trong nghệ thuật tiếp thị là những điểm mạnh của tôi.</p>',
      cv_url: 'https://example.com/images/graphic_designer_thumbnail.jpg',
    },
  });
  await prisma.applyJob.create({
    data: {
      userId: 4,
      jobId: 9,
      status: 'REJECT',
      message:
        '<p>Với kinh nghiệm lâu năm trong tư vấn doanh nghiệp, tôi đã tham gia vào nhiều dự án chiến lược và quản lý hiệu suất doanh nghiệp. Tôi đặt mục tiêu là hỗ trợ doanh nghiệp tối ưu hóa khả năng cạnh tranh và tăng cường lợi nhuận.</p>',
      cv_url: 'https://example.com/images/graphic_designer_thumbnail.jpg',
    },
  });
  await prisma.applyJob.create({
    data: {
      userId: 5,
      jobId: 10,
      status: 'PENDING',
      message:
        '<p>Sự đam mê về thiết kế sáng tạo và khả năng làm việc với nhiều công cụ đồ họa là những đặc điểm nổi bật của tôi. Tôi luôn khát khao tạo ra trải nghiệm người dùng tuyệt vời thông qua thiết kế độc đáo và thu hút.</p>',
      cv_url: 'https://example.com/images/graphic_designer_thumbnail.jpg',
    },
  });
  await prisma.applyJob.create({
    data: {
      userId: 3,
      jobId: 11,
      status: 'REJECT',
      message:
        '<p>Kinh nghiệm của tôi trong quản lý sự kiện và làm việc với đội ngũ đa ngành nghề làm cho tôi trở thành một người tổ chức sự kiện xuất sắc. Tôi cam kết đem lại trải nghiệm sự kiện tốt nhất cho khách hàng và đối tác.</p>',
      cv_url: 'https://example.com/images/graphic_designer_thumbnail.jpg',
    },
  });
  await prisma.applyJob.create({
    data: {
      userId: 1,
      jobId: 12,
      status: 'APPROVE',
      message: '<p></p>',
      cv_url: 'https://example.com/images/graphic_designer_thumbnail.jpg',
    },
  });
};

export default seedApplyJobs;
