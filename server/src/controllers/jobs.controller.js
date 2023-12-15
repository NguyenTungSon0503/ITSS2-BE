import prisma from '../service/prisma.js';
import ApiError from '../utils/ApiError.js';
import { StatusCodes } from 'http-status-codes';

const jobController = {
  getAll: async (req, res, next) => {
    try {
      const allJobs = await prisma.job.findMany({
        include: {
          company: {
            select: {
              name: true,
              hust_partner: true,
              logo_url: true,
            },
          },
          jobTypeRelations: {
            select: {
              type: {
                select: {
                  name: true,
                },
              },
            },
          },
        },
      });
      return res.status(200).json(allJobs);
    } catch (error) {
      next(error);
      throw new ApiError(StatusCodes.INTERNAL_SERVER_ERROR, error.message);
    }
  },
  filter: async (req, res, next) => {
    const {
      field,
      major,
      hust_partner,
      jobType,
      is_domestic,
      yearsOfExperienceRange,
      salaryRange,
    } = req.body;

    const { min: salaryFilterMin, max: salaryFilterMax } = salaryRange;
    const { min: yoeFilterMin, max: yoeFilterMax } = yearsOfExperienceRange;

    let jobArray = [];

    if (jobType.includes('Tất cả')) {
      jobArray = ['Toàn thời gian', 'Làm từ xa', 'Thực Tập', 'Bán thời gian'];
    } else {
      jobArray = jobType;
    }
    console.log(req.body);
    try {
      const filteredJobs = await prisma.job.findMany({
        where: {
          years_of_experience: {
            lte: yoeFilterMax,
            gte: yoeFilterMin,
          },
          salary_min: {
            gte: salaryFilterMin * 1000,
          },
          salary_max: {
            lte: salaryFilterMax * 1000,
          },
          is_domestic: is_domestic,
          company: {
            hust_partner: hust_partner,
          },
          jobTypeRelations: {
            some: {
              type: {
                name: {
                  in: jobArray,
                },
              },
            },
          },
          majors: {
            name: major,
          },
        },
        include: {
          company: {
            select: {
              name: true,
              hust_partner: true,
              logo_url: true,
            },
          },
          jobTypeRelations: {
            select: {
              type: {
                select: {
                  name: true,
                },
              },
            },
          },
        },
      });
      return res.status(200).json(filteredJobs);
    } catch (error) {
      next(error);
      throw new ApiError(StatusCodes.INTERNAL_SERVER_ERROR, error.message);
    }
  },
};
export default jobController;
