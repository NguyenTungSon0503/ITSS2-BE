const seedJobTypeToJobs = async (prisma) => {
  await prisma.jobTypeToJob.create({
    data: {
      jobId: 1,
      typeId: 1,
    },
  });

  await prisma.jobTypeToJob.create({
    data: {
      jobId: 1,
      typeId: 2,
    },
  });

  await prisma.jobTypeToJob.create({
    data: {
      jobId: 2,
      typeId: 1,
    },
  });

  await prisma.jobTypeToJob.create({
    data: {
      jobId: 2,
      typeId: 3,
    },
  });

  await prisma.jobTypeToJob.create({
    data: {
      jobId: 3,
      typeId: 2,
    },
  });

  await prisma.jobTypeToJob.create({
    data: {
      jobId: 3,
      typeId: 3,
    },
  });

  await prisma.jobTypeToJob.create({
    data: {
      jobId: 4,
      typeId: 1,
    },
  });

  await prisma.jobTypeToJob.create({
    data: {
      jobId: 4,
      typeId: 3,
    },
  });

  await prisma.jobTypeToJob.create({
    data: {
      jobId: 5,
      typeId: 2,
    },
  });
  await prisma.jobTypeToJob.create({
    data: {
      jobId: 5,
      typeId: 4,
    },
  });
  await prisma.jobTypeToJob.create({
    data: {
      jobId: 6,
      typeId: 1,
    },
  });
  await prisma.jobTypeToJob.create({
    data: {
      jobId: 6,
      typeId: 4,
    },
  });
  await prisma.jobTypeToJob.create({
    data: {
      jobId: 7,
      typeId: 3,
    },
  });
  await prisma.jobTypeToJob.create({
    data: {
      jobId: 7,
      typeId: 4,
    },
  });
  await prisma.jobTypeToJob.create({
    data: {
      jobId: 8,
      typeId: 1,
    },
  });
  await prisma.jobTypeToJob.create({
    data: {
      jobId: 8,
      typeId: 2,
    },
  });
  await prisma.jobTypeToJob.create({
    data: {
      jobId: 9,
      typeId: 1,
    },
  });
  await prisma.jobTypeToJob.create({
    data: {
      jobId: 9,
      typeId: 2,
    },
  });
  await prisma.jobTypeToJob.create({
    data: {
      jobId: 10,
      typeId: 1,
    },
  });
  await prisma.jobTypeToJob.create({
    data: {
      jobId: 10,
      typeId: 3,
    },
  });
  await prisma.jobTypeToJob.create({
    data: {
      jobId: 11,
      typeId: 2,
    },
  });
  await prisma.jobTypeToJob.create({
    data: {
      jobId: 11,
      typeId: 3,
    },
  });
  await prisma.jobTypeToJob.create({
    data: {
      jobId: 12,
      typeId: 3,
    },
  });
  await prisma.jobTypeToJob.create({
    data: {
      jobId: 12,
      typeId: 4,
    },
  });
  await prisma.jobTypeToJob.create({
    data: {
      jobId: 13,
      typeId: 1,
    },
  });
  await prisma.jobTypeToJob.create({
    data: {
      jobId: 13,
      typeId: 4,
    },
  });
  await prisma.jobTypeToJob.create({
    data: {
      jobId: 14,
      typeId: 2,
    },
  });
  await prisma.jobTypeToJob.create({
    data: {
      jobId: 14,
      typeId: 4,
    },
  });
  await prisma.jobTypeToJob.create({
    data: {
      jobId: 15,
      typeId: 1,
    },
  });
  await prisma.jobTypeToJob.create({
    data: {
      jobId: 15,
      typeId: 3,
    },
  });
  await prisma.jobTypeToJob.create({
    data: {
      jobId: 15,
      typeId: 4,
    },
  });
};

export default seedJobTypeToJobs;
