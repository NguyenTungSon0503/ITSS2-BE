import prisma from '../service/prisma.js';
import ApiError from '../utils/ApiError.js';
import { StatusCodes } from 'http-status-codes';

const companyController = {
  getAll: async (req, res, next) => {
    try {
      const allCompanies = await prisma.company.findMany({});
      return res.status(200).json(allCompanies);
    } catch (error) {
      next(error);
      throw new ApiError(StatusCodes.INTERNAL_SERVER_ERROR, error.message);
    }
  },

  getCompanyById: async (req, res, next) => {
    const { id } = req.params;
    const idInt = parseInt(id);
    try {
      const company = await prisma.company.findUnique({
        where: { id: idInt },
      });
      return company
        ? res.status(200).json(company)
        : res.status(404).json({ message: `Company ${id} not found` });
    } catch (error) {
      next(error);
      throw new ApiError(StatusCodes.INTERNAL_SERVER_ERROR, error.message);
    }
  },

  create: async (req, res, next) => {
    const { email, website, phone_number, hust_partner, logo_url, address } =
      req.body;
    try {
      const createdCompany = await prisma.company.create({
        data: {
          email,
          website,
          phone_number,
          hust_partner,
          logo_url: logo_url,
          address,
        },
      });
      return res.status(201).json(createdCompany);
    } catch (error) {
      next(error);
      throw new ApiError(StatusCodes.INTERNAL_SERVER_ERROR, error.message);
    }
  },

  delete: async (req, res, next) => {
    const { id } = req.params;
    const idInt = parseInt(id);

    if (isNaN(idInt) || idInt <= 0) {
      return res.status(400).json({ message: 'Invalid company ID' });
    }

    try {
      const deletedCompany = await prisma.company.delete({
        where: { id: idInt },
      });

      if (!deletedCompany) {
        return res.status(404).json({ message: `Company ${id} not found` });
      }

      return res.status(204).json({
        message: `Company ${id} deleted successfully`,
      });
    } catch (error) {
      next(error);
      throw new ApiError(StatusCodes.INTERNAL_SERVER_ERROR, error.message);
    }
  },

  update: async (req, res, next) => {
    const { id } = req.params;
    const idInt = parseInt(id);

    if (isNaN(idInt) || idInt <= 0) {
      return res.status(400).json({ message: 'Invalid company ID' });
    }

    try {
      const updatedCompany = await prisma.company.update({
        where: { id: idInt },
        data: req.body,
      });

      if (!updatedCompany) {
        return res.status(404).json({ message: `Company ${id} not found` });
      }

      return res.status(200).json({
        message: `Company ${id} updated successfully`,
        updatedCompany,
      });
    } catch (error) {
      next(error);
      throw new ApiError(StatusCodes.INTERNAL_SERVER_ERROR, error.message);
    }
  },
};

export default companyController;
