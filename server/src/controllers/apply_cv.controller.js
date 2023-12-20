import { publishMessage } from '../service/rabbitmq.js';
import deleteFile from '../utils/deleteFile.js';
import fs from 'fs';
import { googleDriverUpload } from '../service/google-drive.js';
import prisma from '../service/prisma.js';
import ApiError from '../utils/ApiError.js';
import { StatusCodes } from 'http-status-codes';

const applyController = {
  create: async (req, res, next) => {
    const { mailContent, companyEmail, subject, userId, jobId } = req.body;
    const userIdInt = parseInt(userId);
    const jobIdInt = parseInt(jobId);
    const file = req.file;
    const filePath = file.path;
    const fileContent = fs.readFileSync(filePath);
    try {
      const text = 'Hello User';
      const data = {
        html: mailContent,
        to: companyEmail,
        text: text,
        subject: subject,
        attachments: [
          {
            filename: file.originalname,
          },
        ],
      };
      await publishMessage(JSON.stringify(data), fileContent);
      const cvUrl = await googleDriverUpload.uploadFile({
        filePath: filePath,
        fileName: file.originalname,
      });
      try {
        const createdApplyCV = await prisma.applyJob.create({
          data: {
            jobId: jobIdInt,
            userId: userIdInt,
            message: mailContent,
            cv_url: cvUrl,
          },
        });
        deleteFile(filePath);
        return res.status(200).json('CV uploaded and sended successfully');
      } catch (error) {
        next(error);
        throw new ApiError(StatusCodes.INTERNAL_SERVER_ERROR, error.message);
      }
    } catch (error) {
      next(error);
      throw new ApiError(StatusCodes.INTERNAL_SERVER_ERROR, error.message);
    }
  },
};

export default applyController;
