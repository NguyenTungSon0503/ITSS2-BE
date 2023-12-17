const seedJobsType = async (prisma) => {
  await prisma.jobType.create({
    data: {
      name: 'Bán thời gian',
    },
  });

  await prisma.jobType.create({
    data: {
      name: 'Toàn thời gian',
    },
  });
  await prisma.jobType.create({
    data: {
      name: 'Thực tập',
    },
  });
  await prisma.jobType.create({
    data: {
      name: 'Làm từ xa',
    },
  });
};
export default seedJobsType;
