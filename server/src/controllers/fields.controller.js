import prisma from '../service/prisma.js';
import ApiError from '../utils/ApiError.js';
import { StatusCodes } from 'http-status-codes';

const fieldController = {
  getAll: async (req, res, next) => {
    try {
      const allFields = await prisma.field.findMany({
        include: {
          majors: {
            select: {
              name: true,
              id: true,
            },
          },
        },
      });
      return res.status(200).json(allFields);
    } catch (error) {
      next(error);
      throw new ApiError(StatusCodes.INTERNAL_SERVER_ERROR, error.message);
    }
  },
};
export default fieldController;
