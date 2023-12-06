import prisma from '../service/prisma.js';
import hashPasswordFunction from '../utils/hash.js';

const handleErrorResponse = (res, error, statusCode) => {
  console.error(error);
  res.status(statusCode).send('Internal Server Error');
};

const companyController = {
  getAll: async (req, res) => {
    try {
      const allCompanies = await prisma.company.findMany({});
      return res.status(200).json(allCompanies);
    } catch (error) {
      handleErrorResponse(res, error, 500);
    }
  },

  getCompanyById: async (req, res) => {
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
      handleErrorResponse(res, error, 500);
    }
  },

  create: async (req, res) => {
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
      handleErrorResponse(res, error, 500);
    }
  },

  delete: async (req, res) => {
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
      return res.status(500).json({ message: error.meta.cause });
    }
  },

  update: async (req, res) => {
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
      return res.status(500).json({ message: error.meta.cause });
    }
  },
};

export default companyController;
