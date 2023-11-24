import hashPasswordFunction from '../../utils/hash.js';

const seedUsers = async (prisma) => {
  const hashedPassword = await hashPasswordFunction('testpassword');

  for (let i = 0; i < 5; i++) {
    await prisma.user.create({
      data: {
        email: `user${i + 1}@example.com`,
        username: `user${i + 1}`,
        password: hashedPassword,
        avatar_url: 'https://example.com/avatar.png',
        role: 'USER',
      },
    });
  }
};

export default seedUsers;
