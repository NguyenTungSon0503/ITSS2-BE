import { publishMessage } from '../service/rabbitmq.js';
import deleteFile from '../utils/deleteFile.js';
import fs from 'fs';

const handleErrorResponse = (res, error, statusCode) => {
  console.error(error);
  res.status(statusCode).send('Internal Server Error');
};

const applyController = {
  create: async (req, res) => {
    const { mailContent, companyEmail, subject } = req.body;
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
      deleteFile(filePath);
      return res.send('Applied successfully');
    } catch (error) {
      handleErrorResponse(res, error, 500);
    }
  },
};

export default applyController;
