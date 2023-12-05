import prisma from '../../service/prisma.js';
import seedUsers from './users.js';
import seedCompanies from './companies.js';
import seedJobs from './jobs.js';
import seedField from './field.js';
import seedJobsType from './jobs_type.js';
import seedMajors from './majors.js';
import seedApplyJobs from './applyJobs.js';

const seed = async () => {
  await seedUsers(prisma);
  await seedCompanies(prisma);
  await seedJobs(prisma);
  await seedJobsType(prisma);
  await seedField(prisma);
  await seedMajors(prisma);
  await seedApplyJobs(prisma);
  await prisma.$disconnect();
};

seed();
