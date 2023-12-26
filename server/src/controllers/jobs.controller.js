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
  getJobById: async (req, res, next) => {
    const { id } = req.params;
    const idInt = parseInt(id);
    try {
      const job = await prisma.job.findUnique({
        where: { id: idInt },
        include: {
          company: {
            select: {
              name: true,
              hust_partner: true,
              logo_url: true,
              website: true,
              phone_number: true,
              email: true,
            },
          },
          majors: {
            select: {
              name: true,
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
      if (job) {
        return res.status(200).json(job);
      } else {
        return res.status(404).json({ message: `Job ${id} not found` });
      }
    } catch (error) {
      next(error);
      throw new ApiError(StatusCodes.INTERNAL_SERVER_ERROR, error.message);
    }
  },
  getJobWithHustPartnerCompany: async (req, res, next) => {
    let hust_partner = req.query.hust_partner;
    const hust_partnerBoolean = hust_partner === 'true';
    try {
      const jobWithHustPartnerCompany = await prisma.job.findMany({
        where: {
          company: {
            hust_partner: hust_partnerBoolean,
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
      return res.status(200).json(jobWithHustPartnerCompany);
    } catch (error) {
      next(error);
      throw new ApiError(StatusCodes.INTERNAL_SERVER_ERROR, error.message);
    }
  },
  getAllJobTitle: async (req, res, next) => {
    try {
      const allJobTitles = await prisma.job.findMany({
        select: {
          title: true,
        },
      });
      const jobTitlesArray = allJobTitles.map((job) => job.title);
      return res.status(200).json(jobTitlesArray);
    } catch (error) {
      next(error);
      throw new ApiError(StatusCodes.INTERNAL_SERVER_ERROR, error.message);
    }
  },
  getJobWithTitle: async (req, res, next) => {
    const job_title = req.query.job_title;
    try {
      const jobWithTitle = await prisma.job.findMany({
        where: {
          title: job_title,
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
      return res.status(200).json(jobWithTitle);
    } catch (error) {
      next(error);
      throw new ApiError(StatusCodes.INTERNAL_SERVER_ERROR, error.message);
    }
  },
};
export default jobController;
