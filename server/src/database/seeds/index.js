import prisma from '../../service/prisma.js';
import seedUsers from './users.js';
import seedCompanies from './companies.js';
import seedJobs from './jobs.js';

const seed = async () => {
  await seedUsers(prisma);
  await seedCompanies(prisma);
  await seedJobs(prisma);
  await prisma.$disconnect();
};

seed();
