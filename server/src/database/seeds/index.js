import prisma from '../../service/prisma.js';
import seedUsers from './users.js';

const seed = async () => {
  await seedUsers(prisma);
  await prisma.$disconnect();
};

seed();