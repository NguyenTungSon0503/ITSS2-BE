import bcrypt from 'bcrypt';

export default async function hashPasswordFunction(password) {
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    return hashedPassword;
  } catch (error) {
    throw new Error('Password hashing failed');
  }
}
