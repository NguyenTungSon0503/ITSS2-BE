import { empty } from '@prisma/client/runtime/library.js';
import prisma from '../service/prisma.js';

const handleErrorResponse = (res, error, statusCode) => {
  res.status(statusCode).send('Internal Server Error');
};

const Controller = {
  getAll: async (req, res) => {
    try {
      const filter = req.query.filter;
      const order = req.query.order;

      const objFilter = json.encode(Buffer.from(filter, 'base64'))
      const objOrder = json.encode(Buffer.from(order,'base64'))

      const result = await prisma.job.findMany({
        where: {
          ...(!empty(objFilter.salary_min ?? "") ? {
            salary_max: {
              gt: parseInt(objFilter.salary_min)
            }
          } : {}),
          ...(!empty(objFilter.salary_max ?? "") ? {
            salary_min: {
              lt: parseInt(objFilter.salary_max)
            }
          } : {}),

        },
        orderBy: {
          ...(!empty(objOrder.field ?? "") ? {
            [objOrder.field]: objOrder.type
          } : {})
        }
      })

    } catch (error) {
      handleErrorResponse(res, error, 500);
    }
  },

  getById: async (req, res) => {
    const { id } = req.params;
    const idInt = parseInt(id);
    try {
      const job = await prisma.job.findUnique({
        where: {id: idInt}
      });
      return job
        ? res.status(200).json(job)
        : res.status(404).json({ message: `Job ${id} not found` });
    } catch (error) {
      handleErrorResponse(res, error, 500);
    }
  },

  create: async (req, res) => {
    try {
      const { title, description, requirements, advantages, company_id, salary_min, salary_max, years_of_experience, job_location, thumbnail_url, majors, is_domestic } = req.body
      const createdJob = await prisma.job.create({
        data: {
          title: title,
          description: description,
          requirements: requirements,
          advantages: advantages,
          company_id: company_id,
          salary_min: salary_min,
          salary_max: salary_max,
          years_of_experience: years_of_experience,
          job_location: job_location,
          thumbnail_url: thumbnail_url,
          majors: majors,
          is_domestic: is_domestic,
        },
      });
      return res.status(201).json(createdJob);
    } catch (error) {
      handleErrorResponse(res, error, 500);
    }
  },

  delete: async (req, res) => {
    const { id } = req.params;
    const idInt = parseInt(id);

    if (isNaN(idInt) || idInt <= 0) {
      return res.status(400).json({ message: 'Invalid ID' });
    }
    try {
      const deletedJob = await prisma.job.delete({
        where: { id: idInt },
      });

      if (!deletedJob) {
        return res.status(404).json({ message: `Job ${id} not found` });
      }

      return res.status(204).json({
        message: `User ${id} deleted successfully`,
      });
    } catch (error) {
      handleErrorResponse(res, error, 500);
    }
  },

  update: async (req, res) => {
    const { id } = req.params;
    const idInt = parseInt(id);

    if (isNaN(idInt) || idInt <= 0) {
      return res.status(400).json({ message: 'Invalid ID' });
    }
    try {
      const updatedJob = await prisma.job.update({
        where: { id: idInt },
        data: req.body,
      });

      if (!updatedJob) {
        return res.status(404).json({ message: `Job ${id} not found` });
      }

      return res.status(200).json({
        message: `Job ${id} updated successfully`,
        updatedUser,
      });
    } catch (error) {
      handleErrorResponse(res, error, 500);
    }
  },
};

export default Controller;