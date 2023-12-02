import prisma from '../service/prisma.js';
import ApiError from '../utils/ApiError.js';
import { StatusCodes } from 'http-status-codes';
import logger from '../utils/logger.js';

const companyController = {
  getAll: async (req, res, next) => {
    try {
      // const allCompany = await prisma.company.findMany({
      //   include: {
      //     jobs: true,
      //   },
      // });
      throw new ApiError(StatusCodes.INTERNAL_SERVER_ERROR, "This code is bad");
      // return res.status(200).json(allCompany);
    } catch (error) {
      logger.error(error);
      next(error);
    }
  },
};

export default companyController;
