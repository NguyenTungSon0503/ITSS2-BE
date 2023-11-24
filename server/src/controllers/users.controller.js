import prisma from '../service/prisma.js';
import hashPasswordFunction from '../utils/hash.js';

const handleErrorResponse = (res, error, statusCode) => {
  console.error(error);
  res.status(statusCode).send('Internal Server Error');
};

const userController = {
  getAll: async (req, res) => {
    try {
      const allUsers = await prisma.user.findMany({});
      return res.status(200).json(allUsers);
    } catch (error) {
      handleErrorResponse(res, error, 500);
    }
  },

  getById: async (req, res) => {
    const { id } = req.params;
    const idInt = parseInt(id);
    try {
      const user = await prisma.user.findUnique({
        where: { id: idInt },
      });
      return user
        ? res.status(200).json(user)
        : res.status(404).json({ message: `User ${id} not found` });
    } catch (error) {
      handleErrorResponse(res, error, 500);
    }
  },

  create: async (req, res) => {
    const { email, username, avatar_url, password } = req.body;
    const hashedPassword = await hashPasswordFunction(password);
    try {
      const createdUser = await prisma.user.create({
        data: {
          email,
          username,
          password: hashedPassword,
          avatar_url: avatar_url,
          role: 'USER',
        },
      });
      return res.status(201).json(createdUser);
    } catch (error) {
      handleErrorResponse(res, error, 500);
    }
  },

  delete: async (req, res) => {
    const { id } = req.params;
    const idInt = parseInt(id);

    if (isNaN(idInt) || idInt <= 0) {
      return res.status(400).json({ message: 'Invalid user ID' });
    }

    try {
      const deletedUser = await prisma.user.delete({
        where: { id: idInt },
      });

      if (!deletedUser) {
        return res.status(404).json({ message: `User ${id} not found` });
      }

      return res.status(204).json({
        message: `User ${id} deleted successfully`,
      });
    } catch (error) {
      return res.status(500).json({ message: error.meta.cause });
    }
  },

  update: async (req, res) => {
    const { id } = req.params;
    const idInt = parseInt(id);

    if (isNaN(idInt) || idInt <= 0) {
      return res.status(400).json({ message: 'Invalid user ID' });
    }

    try {
      const updatedUser = await prisma.user.update({
        where: { id: idInt },
        data: req.body,
      });

      if (!updatedUser) {
        return res.status(404).json({ message: `User ${id} not found` });
      }

      return res.status(200).json({
        message: `User ${id} updated successfully`,
        updatedUser,
      });
    } catch (error) {
      return res.status(500).json({ message: error.meta.cause });
    }
  },

  //   getUserWhereTaskStatus: async (req, res) => {
  //     const { status } = req.query;
  //     try {
  //       const usersWithCompletedTasks = await prisma.user.findMany({
  //         where: {
  //           tasks: {
  //             some: {
  //               status: status,
  //             },
  //           },
  //         },
  //         include: {
  //           tasks: {
  //             where: {
  //               status: status,
  //             },
  //           },
  //         },
  //       });
  //       return res.status(200).json(usersWithCompletedTasks);
  //     } catch (error) {
  //       handleErrorResponse(res, error, 500);
  //     }
  //   },
};

export default userController;
